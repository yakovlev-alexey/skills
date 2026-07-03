# Trigger results — 2026-07-03

Skill: facilitation-planning
Library: facilitation-planning, facilitation-review, web-app-design, web-app-testing, brainstorming
Protocol: **3 fresh subagents per query** (runs 1–3/3)
Total fresh agents: 60 (20 queries × 3 runs)
Runner: L1 live subagent harness (2026-07-03)
Method: Independent Task subagent per eval run; skill selection from description menu only

## Per-query results

| ID | Split | Query (truncated) | Expected | Runs triggered | trigger_rate | Deterministic | Pass |
| --- | --- | --- | --- | --- | --- | --- | --- |
| trg-plan-01 | train | Plan a 90-minute online team retrospect… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-02 | train | got a retro tomorrow, 7 ppl, online, ba… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-03 | train | We're kicking off a new cross-functiona… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-04 | train | Design a workshop agenda for our produc… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-05 | train | Help me moderate an alignment meeting w… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-06 | train | Нужен план фасилитации ретроспективы на… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-07 | train | Review this facilitation plan before we… | no | 0/3 | 0.00 | yes | pass |
| trg-plan-08 | train | Stress-test my workshop agenda for hybr… | no | 0/3 | 0.00 | yes | pass |
| trg-plan-09 | train | Sanity-check this meeting plan — will i… | no | 0/3 | 0.00 | yes | pass |
| trg-plan-10 | train | Write meeting minutes from yesterday's … | no | 0/3 | 0.00 | yes | pass |
| trg-plan-11 | train | What's the weather in Berlin today? | no | 0/3 | 0.00 | yes | pass |
| trg-plan-12 | train | Run the retro for me in the room tomorr… | no | 3/3 | 1.00 | yes | fail |
| trg-plan-13 | val | Plan a two-day hybrid Strategy Lab for … | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-14 | val | My team wants a premortem before launch… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-15 | val | Boss wants an ideation brainstorm next … | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-16 | val | Plan an async-first session: 3 days Mir… | yes | 3/3 | 1.00 | yes | pass |
| trg-plan-17 | val | facilitation-planning just produced thi… | no | 0/3 | 0.00 | yes | pass |
| trg-plan-18 | val | Critique my workshop design — is it run… | no | 0/3 | 0.00 | yes | pass |
| trg-plan-19 | val | Edit block 3 of this facilitation plan … | no | 1/3 | 0.33 | no | pass |
| trg-plan-20 | val | Convert this JSON file to YAML. | no | 0/3 | 0.00 | yes | pass |

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

- **trg-plan-19**: [facilitation-planning, none, none] — passes at threshold but nondeterministic across 3 runs.

## Failures (train only — candidates for description fix)

- **trg-plan-12** (near_miss_other): invoked [facilitation-planning, facilitation-planning, facilitation-planning]; expected no trigger.

## Notes

- Runs 2–3 added 2026-07-03 to confirm nondeterminism per `trigger-evals.json`.
- Near-miss negatives tested with sibling skill `facilitation-review` in menu.
- Selection by description menu; not live Cursor Skill tool invocation.
