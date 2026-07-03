# Trigger results — 2026-07-03

Skill: facilitation-review
Library: facilitation-review, facilitation-planning, web-app-design, web-app-testing, brainstorming
Protocol: **3 fresh subagents per query** (runs 1–3/3)
Total fresh agents: 60 (20 queries × 3 runs)
Runner: L1 live subagent harness (2026-07-03)
Method: Independent Task subagent per eval run; skill selection from description menu only

## Per-query results

| ID | Split | Query (truncated) | Expected | Runs triggered | trigger_rate | Deterministic | Pass |
| --- | --- | --- | --- | --- | --- | --- | --- |
| trg-rev-01 | train | Critique this workshop agenda before we… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-02 | train | Is this facilitation plan runnable in a… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-03 | train | Evaluate this session design — too ambi… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-04 | train | Here's the plan we wrote. Before I send… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-05 | train | does this agenda hold up? 25 ppl hybrid… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-06 | train | Проверь этот план фасилитации — готов л… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-07 | train | Plan a team retrospective for tomorrow … | no | 0/3 | 0.00 | yes | pass |
| trg-rev-08 | train | Design a two-day strategy offsite facil… | no | 0/3 | 0.00 | yes | pass |
| trg-rev-09 | train | Help me facilitate alignment on Q3 prio… | no | 0/3 | 0.00 | yes | pass |
| trg-rev-10 | train | Review our facilitation methodology pla… | no | 3/3 | 1.00 | yes | fail |
| trg-rev-11 | train | Summarize what each block in this facil… | no | 0/3 | 0.00 | yes | pass |
| trg-rev-12 | train | Write a post-mortem report from last we… | no | 0/3 | 0.00 | yes | pass |
| trg-rev-13 | val | Stress-test this meeting plan for polit… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-14 | val | Sanity-check the session agenda I paste… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-15 | val | Will this retro plan work with a low-tr… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-16 | val | facilitation-planning just produced thi… | yes | 3/3 | 1.00 | yes | pass |
| trg-rev-17 | val | Create a facilitation plan for a produc… | no | 0/3 | 0.00 | yes | pass |
| trg-rev-18 | val | Plan a 2.5-hour hybrid PI planning sess… | no | 0/3 | 0.00 | yes | pass |
| trg-rev-19 | val | Edit this plan — add a cut list to bloc… | no | 0/3 | 0.00 | no | pass |
| trg-rev-20 | val | Fix the failing unit test in auth middl… | no | 0/3 | 0.00 | yes | pass |

## Summary

| Split | Pass | Fail | Pass rate |
| --- | --- | --- | --- |
| train | 11 | 1 | 92% |
| val | 8 | 0 | 100% |
| **total** | **19** | **1** | **95%** |

## Determinism (3 runs)

| Metric | Value |
| --- | --- |
| Queries with 3/3 runs | 20/20 |
| Deterministic (same invoked all runs) | 19/20 |
| Nondeterministic but pass | 1 |

### Nondeterministic queries

- **trg-rev-19**: [none, facilitation-planning, facilitation-planning] — passes at threshold but nondeterministic across 3 runs.

## Failures (train only — candidates for description fix)

- **trg-rev-10** (near_miss_other): invoked [facilitation-review, facilitation-review, facilitation-review]; expected no trigger.

## Notes

- Runs 2–3 added 2026-07-03 to confirm nondeterminism per `trigger-evals.json`.
- Near-miss negatives tested with sibling skill `facilitation-planning` in menu.
- Selection by description menu; not live Cursor Skill tool invocation.
