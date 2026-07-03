# Trigger Evals (L1)

Use these evals to test **skill activation** for `facilitation-planning` before
deploying description edits. Triggering and output quality are independent
measurements — this harness tests only whether the agent loads this skill for the right user queries.

Data file: [`trigger-evals.json`](trigger-evals.json)

## Prerequisites

**Library context matters.** Run with a realistic skill menu, not this skill
alone:

- `facilitation-planning` (skill under test)
- `facilitation-review` (sibling — near-miss negatives depend on it)
- Neighbors from the skills repo README, e.g. `web-app-design`, `web-app-testing`

Near-miss negatives (queries that should trigger `facilitation-review` instead)
are the primary discriminative signal for this skill's description.

## Orchestrator workflow

1. Read [`trigger-evals.json`](trigger-evals.json) — do not give evaluators the
   `should_trigger`, `split`, or `axis` fields.
2. For **each** eval query, run **`runs_per_query` (3) fresh sessions**:
   - Launch a new subagent / session with the library context above.
   - Give **only** the `query` text as the user message.
   - Do not hint at which skill to use.
3. Record whether `facilitation-planning` was invoked:
   - Skill tool call loading this skill
   - Read of `facilitation-planning/SKILL.md`
   - Explicit statement of using `facilitation-planning`
4. Compute `trigger_rate = triggered_runs / total_runs` for the query.
5. Pass/fail per query (default threshold `0.5`):
   - `should_trigger: true` → pass if `trigger_rate > 0.5`
   - `should_trigger: false` → pass if `trigger_rate < 0.5`
6. Write results to `evals/trigger-results-<YYYY-MM-DD>.md` (see format below).
7. Never overwrite a prior results file — create a new dated file per run.

## Scoring summary

| Split | Queries | Use |
| --- | --- | --- |
| train (12) | trg-plan-01 … trg-plan-12 | Description optimization — fix failures here only |
| val (8) | trg-plan-13 … trg-plan-20 | Sanity check — do not tune description to val failures |

Report aggregate pass rate separately for train and val.

## Results file format

```markdown
# Trigger results — YYYY-MM-DD

Skill: facilitation-planning
Library: facilitation-planning, facilitation-review, web-app-design, web-app-testing
Runs per query: 3
Runner: <who ran it>

## Per-query results

| ID | Split | Query (truncated) | Expected | Runs triggered | trigger_rate | Pass |
| --- | --- | --- | --- | --- | --- | --- |
| trg-plan-01 | train | Plan a 90-minute online… | yes | 3/3 | 1.0 | pass |

## Summary

| Split | Pass | Fail | Pass rate |
| --- | --- | --- | --- |
| train | 11 | 1 | 92% |
| val | 7 | 1 | 88% |
| **total** | 18 | 2 | 90% |

## Failures (train only — candidates for description fix)

- trg-plan-XX: observed …; expected …

## Notes

<optional: ambiguous queries, harness limitations>
```

## Description optimization loop

Only after a baseline run with failures on **train** queries:

1. Analyze train failures by category (missed trigger vs false trigger).
2. Revise `description` in `SKILL.md` frontmatter — broaden or narrow by
   **category**, not by copying failed query keywords.
3. Re-run full suite; pick the iteration with best **validation** pass rate.
4. Sanity-check with 5–10 fresh queries outside this file.

Do **not** put workflow steps in the description — triggers/symptoms only; process
stays in the skill body.

## Non-goals

- Not L2 output quality (use `e2e/briefs.md` and `pressure-scenarios.md`).
- Not a substitute for `skills-ref validate` (L0).
- Do not change description in the same change that adds or edits this eval set
  without a baseline run first.
