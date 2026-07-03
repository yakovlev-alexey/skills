#!/usr/bin/env node
/**
 * Generate trigger-results markdown from raw JSON + trigger-evals.json
 * Usage: node evals/generate-trigger-report.mjs --skill planning|review --date YYYY-MM-DD
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const skillKey = process.argv.includes('--skill')
  ? process.argv[process.argv.indexOf('--skill') + 1]
  : 'planning';
const date =
  (process.argv.includes('--date')
    ? process.argv[process.argv.indexOf('--date') + 1]
    : '2026-07-03');

const skillDir =
  skillKey === 'review'
    ? join(__dir, '..', '..', 'facilitation-review')
    : join(__dir, '..');
const skillName =
  skillKey === 'review' ? 'facilitation-review' : 'facilitation-planning';
const sibling =
  skillKey === 'review' ? 'facilitation-planning' : 'facilitation-review';
const runsDir = join(__dir, 'runs', date);

const evals = JSON.parse(
  readFileSync(join(skillDir, 'evals', 'trigger-evals.json'), 'utf8')
);
const rawPath = join(runsDir, `${skillName}-raw.json`);
const raw = JSON.parse(readFileSync(rawPath, 'utf8'));

function trunc(s, n = 40) {
  return s.length <= n ? s : s.slice(0, n - 1) + '…';
}

const rows = raw.rows;
const train = rows.filter(
  (r) => evals.evals.find((e) => e.id === r.id)?.split === 'train'
);
const val = rows.filter(
  (r) => evals.evals.find((e) => e.id === r.id)?.split === 'val'
);
const countPass = (arr) => arr.filter((r) => r.pass === 'pass').length;
const flaky = rows.filter((r) => !r.deterministic);

const table = rows
  .map((r) => {
    const det = r.deterministic ? 'yes' : 'no';
    return `| ${r.id} | ${evals.evals.find((e) => e.id === r.id)?.split || '?'} | ${trunc(r.query)} | ${r.expected} | ${r.runsTriggered} | ${r.trigger_rate} | ${det} | ${r.pass} |`;
  })
  .join('\n');

const trainFails = train
  .filter((r) => r.pass === 'fail')
  .map((r) => {
    const ev = evals.evals.find((e) => e.id === r.id);
    return `- **${r.id}** (${ev?.axis}): invoked [${r.invoked.join(', ')}]; expected ${r.expected === 'yes' ? 'trigger' : 'no trigger'}.`;
  });

const flakyLines = flaky.map(
  (r) =>
    `- **${r.id}**: [${r.invoked.join(', ')}] — passes at threshold but nondeterministic across 3 runs.`
);

const agentsUsed = rows.reduce((n, r) => n + (r.run_count || 0), 0);

const md = `# Trigger results — ${date}

Skill: ${skillName}
Library: ${skillName}, ${sibling}, web-app-design, web-app-testing, brainstorming
Protocol: **3 fresh subagents per query** (runs 1–3/3)
Total fresh agents: ${agentsUsed} (${rows.length} queries × 3 runs)
Runner: L1 live subagent harness (${date})
Method: Independent Task subagent per eval run; skill selection from description menu only

## Per-query results

| ID | Split | Query (truncated) | Expected | Runs triggered | trigger_rate | Deterministic | Pass |
| --- | --- | --- | --- | --- | --- | --- | --- |
${table}

## Summary

| Split | Pass | Fail | Pass rate |
| --- | --- | --- | --- |
| train | ${countPass(train)} | ${train.length - countPass(train)} | ${train.length ? Math.round((countPass(train) / train.length) * 100) : 0}% |
| val | ${countPass(val)} | ${val.length - countPass(val)} | ${val.length ? Math.round((countPass(val) / val.length) * 100) : 0}% |
| **total** | **${countPass(rows)}** | **${rows.length - countPass(rows)}** | **${Math.round((countPass(rows) / rows.length) * 100)}%** |

## Determinism (3 runs)

| Metric | Value |
| --- | --- |
| Queries with 3/3 runs | ${rows.filter((r) => r.run_count === 3).length}/${rows.length} |
| Deterministic (same invoked all runs) | ${rows.filter((r) => r.deterministic).length}/${rows.length} |
| Nondeterministic but pass | ${flaky.filter((r) => r.pass === 'pass').length} |

${flakyLines.length ? `### Nondeterministic queries\n\n${flakyLines.join('\n')}` : 'All queries deterministic across 3 runs.'}

## Failures (train only — candidates for description fix)

${trainFails.length ? trainFails.join('\n') : 'None.'}

## Notes

- Runs 2–3 added ${date} to confirm nondeterminism per \`trigger-evals.json\`.
- Near-miss negatives tested with sibling skill \`${sibling}\` in menu.
- Selection by description menu; not live Cursor Skill tool invocation.
`;

mkdirSync(join(skillDir, 'evals'), { recursive: true });
writeFileSync(join(skillDir, 'evals', `trigger-results-${date}.md`), md);
console.log(`Wrote ${skillDir}/evals/trigger-results-${date}.md`);
