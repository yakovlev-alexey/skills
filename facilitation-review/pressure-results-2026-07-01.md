# Pressure Results 2026-07-01

Scenarios: `pressure-scenarios.md` (S1–S6)  
Runner: subagents  
Skill: `facilitation-review` (initial implementation)

## RED Baseline

Agent: subagents (no skill loaded)

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. Rubber-stamp a hollow plan | **Fail** | Approved agenda-only retro as "Ready to run"; chronological block walkthrough; no critique of missing artifacts or post-session process |
| 2. Missing-context intake | **Fail** | Invented ~8–10 people and 60–90 minutes; delivered confident verdict without asking or flagging absent headcount, time, or mode |
| 3. Calibration / do not invent problems | **Fail** | Thoroughness theater on a solid plan — invented or over-weighted gaps (missing break, partial anonymity, tight timing); downgraded toward `no` |
| 4. Scale mismatch (25-person round-robin) | **Fail** | Praised full-group round-robin as inclusive at 25 people; "should run reasonably well"; missed headcount-to-structure mismatch |
| 5. Anonymity / parity theater | **Fail** | Accepted "anonymous vote" despite show-of-hands mechanism; treated "chime in when they want" as adequate hybrid parity |
| 6. Harness non-interactive mode | **Fail** | Asked 2–3 clarifying questions despite explicit non-interactive instruction; narrative only, no machine block; medium confidence despite major gaps |

Verbatim rationalizations (Scenario 1):

- "This is a solid, well-structured 60-minute retro for 7 people online."
- "Assessment: Ready to run."

Verbatim rationalizations (Scenario 4):

- "The round-robin gives everyone airtime upfront, which supports inclusion."
- "With a skilled facilitator keeping discussion on track, this should run reasonably well."

RED outcome: **six real failures** — baseline reviewer exhibits all targeted failure modes (rubber-stamp, invented context, over-criticism, scale blindness, anonymity theater, harness non-compliance).

## GREEN

Agent: subagents with `facilitation-review` loaded

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. Rubber-stamp a hollow plan | Pass | `RUNNABLE: yes-with-edits`; flagged `no_artifacts_or_post_process`, missing cut list, and online ops; narrative contract, not chronological summary |
| 2. Missing-context intake | Pass | Withheld verdict; asked 3 targeted questions (headcount, time, mode); did not invent context |
| 3. Calibration / do not invent problems | Pass | `RUNNABLE: yes`, `CONFIDENCE: high`; cited artifacts, cut list, anonymity mechanism, booked checkpoint; one proportional minor note only |
| 4. Scale mismatch (25-person round-robin) | Pass | `RUNNABLE: no`; quantified round-robin blowout; recommended tables/delegates; `scale_mismatch` and `scale_participation_structure`: fail |
| 5. Anonymity / parity theater | Pass | Named show-of-hands ≠ anonymous; flagged decorative hybrid parity, `hybrid_operations`, and `forgot_online_group` |
| 6. Harness non-interactive mode | Pass | No questions; `CONFIDENCE: low`; flagged thin plan and absent artifacts; full machine block emitted |

Verbatim rule references:

- Scenario 1: "judge runnable-in-a-room, not rule adherence" / `no_artifacts_or_post_process`: fail
- Scenario 2: "ask 1–3 targeted questions before judging" / "Do not invent a verdict on a plan whose headcount or time budget you cannot determine"
- Scenario 3: "Inventing issues on a solid plan to look thorough — acknowledge strengths"
- Scenario 4: "Do not schedule plenary round-robins above ~8 people" / `scale_participation_structure`
- Scenario 5: "Any 'anonymous' claim names the actual mechanism" / hybrid parity "actionable, not decorative"
- Scenario 6: harness mode — "Ask no questions"; machine block from `facilitation-planning/e2e/facilitator-review.md`

GREEN outcome: **pass** — all six scenarios comply with skill rules.

## Refactor notes

Initial implementation of `facilitation-review` (SKILL.md, `references/review-dimensions.md`, `pressure-scenarios.md`). No skill edits required after this run. E2E subagent harness deliberately out of scope for this skill; harness glue verified via Scenario 6 GREEN machine block.
