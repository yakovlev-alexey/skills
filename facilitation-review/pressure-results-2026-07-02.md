# Pressure Results 2026-07-02

Scenarios: `pressure-scenarios.md` (S1–S14, including optional S13–S14)  
Runner: subagents  
Skill: `facilitation-review` (post-improvements: two-layer rubric, severity model, safety N/A rule)

## RED Baseline

Agent: subagents (no skill loaded)

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. Rubber-stamp a hollow plan | **Fail** | Approved agenda-only retro as "ready to run"; chronological walkthrough; no critique of missing artifacts or post-session process |
| 2. Missing-context intake | **Fail** | Invented ~8–10 people and 60–90 minutes; confident verdict without asking or flagging absent headcount, time, or mode |
| 3. Calibration / do not invent problems | **Fail** | Thoroughness theater on a solid plan — optional improvements laundry list without proportional severity |
| 4. Scale mismatch (25-person round-robin) | **Fail** | Treated full-group round-robin as workable with "keep shares brief"; missed headcount-to-structure mismatch |
| 5. Anonymity / parity theater | **Fail** | Accepted "anonymous vote" despite show-of-hands mechanism; treated "chime in when they want" as adequate hybrid parity |
| 6. Harness non-interactive mode | **Fail** | Free-form narrative only, no machine block; may ask clarifying questions despite harness constraint |
| 7. Trauma-to-action safety flag | **Fail** | Approved layoff grief → quarterly commitments as reasonable workshop flow; no safety blocker framing |
| 8. N/A-on-silence sensitive topic | **Fail** | Rubber-stamped reorg feedback agenda; confident verdict without flagging unstated trust/facilitator/recording |
| 9. Yes-with-edits where edits are blockers | **Fail** | Identified PM-as-facilitator and hybrid voting problems but collapsed into vague "needs a few tweaks"; no named blockers |
| 10. Good simple plan without cut list | **Pass** | Correctly approved proportionate 30-minute check-in; did not hard-fail for missing cut list — baseline behaves well |
| 11. Inaccessible hybrid plan | **Fail** | Mentioned captions/colors as minor tips but passed plan as workable; did not treat accessibility gaps as blockers |
| 12. Real authority but no decision criteria | **Fail** | Passed because "CTO decides at the end"; missed decision-quality gap (no criteria before vote) |
| 13. Cross-cultural global workshop | **Pass** | Flagged 1am JST slot as unfair for APAC — timezone failure too obvious for baseline to miss |
| 14. Overloaded prework | **Pass** | Caught arithmetic mismatch (12 × 5 min cannot fit in 45 min) and heavy prework without the skill |

Verbatim rationalizations (Scenario 1):

- "This is a solid, well-structured retro agenda. The time allocations are reasonable and cover the classic retro phases. You're ready to run this — just make sure someone captures notes during the discussion block."

Verbatim rationalizations (Scenario 7):

- "The flow moves thoughtfully from reflection to action, which should help the team process the layoffs and leave with concrete Q3 commitments. The silent reflection and dot-vote before group work gives people space before committing."

RED outcome: **11 expected failures, 3 weak discriminators** (S10, S13, S14) — baseline exhibits targeted failure modes on safety, scale, anonymity, harness compliance, and severity calibration. S10/S13/S14 are proportionally obvious enough that a careful general agent passes without the skill.

## GREEN

Agent: subagents with `facilitation-review` loaded (updated skill + rubric)

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. Rubber-stamp a hollow plan | Pass | `RUNNABLE: yes-with-edits` or `no`; flagged `no_artifacts_or_post_process`; narrative contract with severity tags |
| 2. Missing-context intake | Pass | Withheld verdict; asked 1–3 targeted questions; did not invent context |
| 3. Calibration / do not invent problems | Pass | Valid base-60 clock (`0:48–1:08`, not `0:68`); `RUNNABLE: yes`, `CONFIDENCE: high`; proportional minor notes only |
| 4. Scale mismatch (25-person round-robin) | Pass | `RUNNABLE: no`; quantified round-robin blowout; `scale_mismatch` fail under `voice_architecture` |
| 5. Anonymity / parity theater | Pass | Named show-of-hands ≠ anonymous; `anonymity_or_recording_dishonesty` and `forgot_online_group` fail |
| 6. Harness non-interactive mode | Pass | No questions; `CONFIDENCE: low`; full machine block with 14 review areas + spot-checks including `catalogue_practice_honesty` |
| 7. Trauma-to-action safety flag | Pass | Layoff grief → action-forcing arc flagged as **blocker**; `unsafe_arc_for_context` fail; `power_and_safety` not N/A on silence |
| 8. N/A-on-silence sensitive topic | Pass | Reorg feedback flagged as sensitive; asked targeted questions; did not mark `power_and_safety` N/A |
| 9. Yes-with-edits where edits are blockers | Pass | Named blockers in VERDICT (PM-as-facilitator, remote parity); `decision_authority_theater` fail; no nit aggregation |
| 10. Good simple plan without cut list | Pass | Did not hard-fail `invalid_timing` for missing cut list; `RUNNABLE: yes`; proportionate calibration |
| 11. Inaccessible hybrid plan | Pass | Flagged colorblind-unsafe dots, missing captions, physical whiteboard excluding remotes; `accessibility` + `forgot_online_group` |
| 12. Real authority but no decision criteria | Pass | Did not fail `decision_authority_theater`; flagged decision-quality gap (no criteria before vote) as should-fix |
| 13. Cross-cultural global workshop | Pass | Flagged APAC-unfriendly 1am JST slot; noted missing hierarchy norms and language/translation context |
| 14. Overloaded prework | Pass | Flagged unrealistic prework load and timing overflow under `inputs_and_prework` and `timing_and_pacing` |

Verbatim rule references:

- Scenario 1: `no_artifacts_or_post_process` — "Plan ends at the agenda: no captured outputs or post-session process"
- Scenario 3: "Anti-inflation: report each concept once; nits never aggregate into a downgrade; double-counting is forbidden."
- Scenario 6: harness machine block includes `catalogue_practice_honesty: pass | fail — <one line>`

GREEN outcome: **14/14 pass** — all scenarios comply with updated skill rules.

## Refactor notes

Implemented per `docs/superpowers/specs/2026-07-02-facilitation-review-improvements-design.md`:

- **P0**: two-layer context model, safety `N/A` rule, expanded stop/caution conditions, S3 base-60 clock fix, removed catalogue-only paragraph from shared rubric.
- **P1**: restructured rubric (~14 review areas + ~9 spot-checks, 1:1 mapping, anti-double-count), severity tiers + verdict thresholds, updated output contract, synced harness glue (`catalogue_practice_honesty`).
- **P2**: new coverage areas (accessibility, inputs_and_prework, sensemaking_and_synthesis, decision quality in decision_and_authority, privacy_and_confidentiality, energy_and_pacing in timing_and_pacing).
- **Validation**: S7–S14 added; full RED/GREEN run recorded here.

S3 gold answer is now internally consistent: valid clock (`1:08`), still a high-confidence calibration case.

Follow-up (out of scope): regenerate `facilitation-planning` E2E a–j review outputs under the new machine-block schema.
