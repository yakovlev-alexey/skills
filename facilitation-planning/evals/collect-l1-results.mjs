#!/usr/bin/env node
/**
 * Parse L1 trigger subagent transcripts + manual results; aggregate 3 runs/query.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const date = args.includes('--date') ? args[args.indexOf('--date') + 1] : '2026-07-03';
const txDir =
  args.includes('--transcripts')
    ? args[args.indexOf('--transcripts') + 1]
    : join(
        process.env.HOME,
        '.cursor/projects/Users-yakovlev-alex-Repos-skills/agent-transcripts/59c3b591-56e0-4d01-b8bd-7494fa7d8962/subagents'
      );
const targetSkill = args.includes('--target')
  ? args[args.indexOf('--target') + 1]
  : 'facilitation-planning';
const evalsPath = args.includes('--evals')
  ? args[args.indexOf('--evals') + 1]
  : join(__dir, 'trigger-evals.json');

const data = JSON.parse(readFileSync(evalsPath, 'utf8'));

/** @type {Map<string, string>} key = `${id}@run${n}` */
const runMap = new Map();

function addRun(id, run, invoked, source) {
  if (!id || !run || !invoked) return;
  const key = `${id}@run${run}`;
  if (!runMap.has(key)) runMap.set(key, invoked);
}

for (const file of readdirSync(txDir).filter((f) => f.endsWith('.jsonl'))) {
  const content = readFileSync(join(txDir, file), 'utf8');
  const lines = content.split('\n').filter(Boolean);

  let evalId = null;
  let runNum = null;
  let isBatch = false;

  for (const line of lines) {
    try {
      const obj = JSON.parse(line);
      const text =
        obj?.message?.content?.map((c) => c.text || '').join('\n') || '';
      if (
        text.includes('L1 trigger eval orchestrator') &&
        text.includes('70 fresh subagents')
      ) {
        isBatch = true;
        break;
      }
      const idMatch = text.match(/trg-(?:plan|rev)-\d+/);
      if (idMatch) evalId = idMatch[0];
      const runMatch = text.match(/run (\d)\/3/);
      if (runMatch) runNum = Number(runMatch[1]);
    } catch {
      /* ignore */
    }
  }

  if (isBatch || !evalId || !runNum) continue;

  let invoked = null;
  for (const line of lines) {
    try {
      const obj = JSON.parse(line);
      for (const part of obj?.message?.content || []) {
        const m = part.text?.match(/\{"invoked":"([^"]+)"\}/);
        if (m) invoked = m[1];
      }
    } catch {
      /* ignore */
    }
  }

  addRun(evalId, runNum, invoked, file);
}

const manualPath = join(__dir, 'runs', date, 'manual-results-run2-run3.jsonl');
if (existsSync(manualPath)) {
  for (const line of readFileSync(manualPath, 'utf8').trim().split('\n')) {
    if (!line) continue;
    const row = JSON.parse(line);
    addRun(row.id, row.run, row.invoked, 'manual');
  }
}

const rows = data.evals.map((ev) => {
  const invoked = [1, 2, 3]
    .map((r) => runMap.get(`${ev.id}@run${r}`))
    .filter(Boolean);
  const triggered = invoked.filter((r) => r === targetSkill).length;
  const total = invoked.length;
  const rate = total ? triggered / total : null;
  const expected = ev.should_trigger;
  let pass = null;
  if (total >= 3) {
    pass = expected ? rate > 0.5 : rate < 0.5;
  } else if (total > 0) {
    pass = expected ? rate >= 1 : rate === 0;
  }
  const unique = [...new Set(invoked)];
  return {
    id: ev.id,
    split: ev.split,
    query: ev.query,
    expected: expected ? 'yes' : 'no',
    runsTriggered: total ? `${triggered}/${total}` : '—',
    trigger_rate: rate !== null ? rate.toFixed(2) : '—',
    pass: pass === null ? 'pending' : pass ? 'pass' : 'fail',
    invoked,
    unique_invoked: unique,
    deterministic: unique.length <= 1,
    run_count: total,
  };
});

const out = {
  skill: targetSkill,
  collected_at: new Date().toISOString(),
  runs_per_query_target: data.runs_per_query,
  rows,
};
const outDir = join(__dir, 'runs', date);
writeFileSync(join(outDir, `${targetSkill}-raw.json`), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
