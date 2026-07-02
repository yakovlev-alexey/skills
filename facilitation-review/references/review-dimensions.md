# Review Dimensions

Single source of truth for the `facilitation-review` rubric: the dimensions and
failure-mode checks used to judge whether a facilitation session plan is
**runnable in a real room**. Judge the plan against these; do not audit it for
adherence to any particular template or skill.

This rubric is reused by the `facilitation-planning` E2E harness. The harness
references these definitions and adds only harness-specific glue (a machine
output block and the stricter catalogue-only reading of `practice_honesty`); it
does not redefine the dimensions here.

## How to use

- Judge each dimension **qualitatively**, one line, citing the plan section that
  drives the judgment.
- Mark a dimension `N/A` when its precondition does not hold (noted per
  dimension). Do not invent an issue to fill a dimension that does not apply.
- A dimension is about *quality in the room*, not presence of a heading. A plan
  can have an "Artifacts" section that still fails `artifacts_and_follow_through`
  if nothing would actually stick.

## Dimensions

| Dimension | What to judge | N/A when |
| --- | --- | --- |
| `intake_and_arc_fit` | The session shape fits the stated goal, participants, and constraints; the arc is the right genre (retro vs decision vs discovery vs repair vs postmortem). | — |
| `timing_realism` | Blocks sum to the time budget; per-block depth is feasible in the room; transitions and slack are accounted for. | — |
| `practice_selection` | Formats fit the context and headcount; transitions between blocks make sense; no format is used for its own sake. | — |
| `participant_dynamics` | Trust, safety, seniority mix, and political sensitivity are handled; quiet and dominant voices both have a path. | — |
| `facilitator_usability` | A facilitator could run this with minimal guesswork: clear frames, instructions, parking-lot handling, timing cues. | — |
| `hybrid_online_practicality` | Parity rules are actionable, not decorative; remote participants can contribute, vote, and present as equals. | In-person-only. |
| `artifacts_and_follow_through` | The session produces captured outputs and a post-session process (owners, actions, timeline) that would actually stick. | — |
| `decision_authority` | Decision rule, sponsor/owner, and whether the outcome can stick or be overridden are explicit and honest. | Not a decision session. |
| `conflict_safety_handling` | Conflict/repair is separated from action-forcing; safety downshift when trust is low; trauma/grief not routed to an action arc. | No conflict, low-trust, or trauma/grief context. |
| `timing_cut_list` | Step sums fit each block; breaks at a sane cadence; an explicit cut/protect list exists for running long. | — |
| `scale_participation_structure` | Participation structure matches headcount — small tables, delegates, or large-group formats instead of large plenary round-robins. | — |
| `anonymity_honesty` | Any "anonymous" or "confidential" claim names the actual mechanism and the mechanism really delivers it. | No anonymity/confidentiality claimed. |
| `hybrid_operations` | AV, breakout parity, backup channel, remote access checks, dedicated remote facilitator — real ops, not slogans. | Not hybrid. |
| `facilitator_contingencies` | Risky blocks include fallback moves: silence, dominance, escalation, running behind. | No risky blocks. |
| `follow_through_governance` | Decision log, "not doing" list, dissent capture, sponsor sign-off, owner authority, checkpoint booked. | — |
| `async_structure` | Blocks marked async vs live; timezone overlap honored; live blocks kept short. | Not async-first. |
| `blameless_postmortem` | Systemic analysis and actions; no individual blame; safety framing up front. | Not an incident/postmortem. |
| `estimation_capacity_realism` | Sizing practices fit the context; plan respects known velocity/capacity; estimation distinguished from commitment. | Not a planning/estimation session. |

## Failure-mode checks

Run each as `pass | fail | n/a` with a one-line reason. These are sharper,
binary checks that catch the most common ways a plan looks fine but breaks in
the room.

| Check | Fails when |
| --- | --- |
| `skipped_intake` | The plan commits to headcount, duration, goal, or constraints that were never established, or ignores stated constraints. |
| `practice_honesty` | A named practice is not real, is used incorrectly, cites a fabricated source, or names vote/anonymity mechanics dishonestly. |
| `scale_mismatch` | Participation structure does not fit headcount (e.g. a plenary round-robin above ~8 people). |
| `forgot_online_group` | Remote participants exist but have no real way to contribute, vote, or present. |
| `no_artifacts_or_post_process` | The plan ends at the agenda with no captured outputs or post-session follow-through. |
| `wrong_output_language` | The plan body is not in the language the plan should be in for its audience. |
| `decision_authority` | A decision arc runs with no real authority, or a predetermined outcome is staged as open participation. |
| `conflict_safety_handling` | Conflict/grief/low-trust context is routed to an action-forcing arc, or a non-neutral requester facilitates their own grievance. |
| `timing_cut_list` | Step sums overflow blocks, clock times are invalid, no break at cadence, or no cut list. |
| `scale_participation_structure` | No table/delegate/large-group structure where headcount demands it. |
| `anonymity_honesty` | An "anonymous" claim is contradicted by the mechanism (e.g. show of hands), or hybrid parity is decorative. |
| `hybrid_operations` | Hybrid section is slogans only — no AV, breakout parity, backup channel, or dedicated remote facilitator. |
| `facilitator_contingencies` | Risky blocks have no fallback for silence, dominance, escalation, or running behind. |
| `follow_through_governance` | No decision log, owner authority check, dissent capture, or booked checkpoint where the session type needs it. |
| `async_structure` | Async-first session does not mark async vs live blocks or ignores timezone overlap. |
| `blameless_postmortem` | Postmortem assigns individual blame or skips systemic framing. |
| `estimation_capacity_realism` | Plan over-commits beyond known capacity or conflates estimation with commitment. |

## `practice_honesty` generalization

In this standalone skill, `practice_honesty` means: named practices are real,
used correctly, sources are not fabricated, and vote/anonymity mechanics are
named honestly. It does **not** require practices to come from any specific
catalogue — a legitimate, correctly-used, non-catalogue practice in a
third-party plan passes.

The stricter **catalogue-only** interpretation (a named branded practice must
appear in `facilitation-planning`'s catalogue digest, otherwise `fail`) is
specific to the `facilitation-planning` E2E harness and lives in that harness's
glue, not in this shared rubric.
