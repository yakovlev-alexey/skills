#!/usr/bin/env node
/** Print Task prompts for a run batch. Usage: node evals/print-l1-prompts.mjs planning 2 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
const skillKey = process.argv[2] || 'planning';
const run = Number(process.argv[3] || 2);
const skillDir =
  skillKey === 'review'
    ? join(__dir, '..', '..', 'facilitation-review')
    : join(__dir, '..');
const data = JSON.parse(
  readFileSync(join(skillDir, 'evals', 'trigger-evals.json'), 'utf8')
);

const MENU = `- facilitation-planning: Use when facilitating, moderating, or running a meeting, workshop, session, retro, retrospective, brainstorm, ideation, discovery, planning, strategy session, decision-making, kickoff, alignment, or workshop agenda.
- facilitation-review: Use when reviewing, critiquing, evaluating, stress-testing, or sanity-checking a facilitation plan, session agenda, workshop design, or meeting plan — right after facilitation-planning or for a plan built any other way.
- web-app-design: Use when deciding which TypeScript web app architecture guidance applies.
- web-app-testing: Use when choosing test coverage for TypeScript web apps.
- brainstorming: Use when doing creative work - creating features, building components, adding functionality, or modifying behavior.`;

for (const ev of data.evals) {
  console.log(
    JSON.stringify({
      id: ev.id,
      run,
      title: `L1 ${ev.id} run${run}`,
      prompt: `L1 trigger eval — fresh agent session (run ${run}/3, ${ev.id})

Cursor agent at session start. Skill menu:
${MENU}

User message: "${ev.query.replace(/"/g, '\\"')}"

Which skill load before acting? Reply ONLY: {"invoked":"facilitation-planning"|"facilitation-review"|"none"|"other"}`,
    })
  );
}
