# Review Dimensions

Single source of truth for the `facilitation-review` rubric: the review areas and
spot-checks used to judge whether a facilitation session plan is **runnable in a
real room**. Judge the plan against these; do not audit it for adherence to any
particular template or skill.

This rubric is reused by the `facilitation-planning` E2E harness. The harness
references these definitions and adds only harness-specific glue (a machine
output block and the stricter catalogue-only reading of practice honesty); it
does not redefine the review areas here.

## How to use

Two-layer rubric — **report each concept exactly once**:

- **Review areas** — qualitative judgment, one line each, cited to the driving
  plan section. These are **internal working notes by default**; the surfaced
  review shows only root issues. Areas are where explanation lives.
- **Spot-checks** — a sharp binary (`pass | fail | n/a`) subset of the most
  common, catastrophic, truly-binary landmines. Each maps to exactly one parent
  area. The spot-check is the binary spot; the area is the explanation. A concept
  never appears twice in the surfaced issue list.

Additional rules:

- Mark an area `N/A` when its precondition does not hold (noted per area). Do not
  invent an issue to fill an area that does not apply.
- An area is about *quality in the room*, not presence of a heading. A plan can
  have an "Artifacts" section that still fails `artifacts_and_follow_through` if
  nothing would actually stick.
- **Safety `N/A` rule**: silence is not `N/A`. If the topic touches sensitive
  territory and trust / facilitator-neutrality / recording is unstated →
  interactive: ask; harness: flag + lower confidence. Safety areas require
  positive evidence of absent risk to be marked `N/A`.

## Review areas

| Area | What to judge | N/A when |
| --- | --- | --- |
| `intake_and_arc_fit` | Arc genre fits goal/participants/constraints | — |
| `timing_and_pacing` | Block arithmetic + human pacing (post-lunch graveyard, no movement, back-to-back heavy blocks); cut list (preconditioned — see spot-check note) | — |
| `practice_selection_and_honesty` | Formats fit context/headcount; honest naming of practices/sources (standalone reading — legitimate non-catalogue practices pass) | — |
| `power_and_safety` | Trust, seniority, politics, retaliation/coercion, conflict/grief not routed to action, facilitator neutrality, forced vulnerability, low-trust downshift | No sensitive context (with positive evidence) |
| `voice_architecture` | Quiet/dominant voice path; participation structure vs headcount | — |
| `facilitator_usability` | Frames, instructions, timing cues, parking lot, risky-block fallbacks; room layout and materials for in-person | — |
| `hybrid_and_remote_parity` | Real ops: AV, breakout parity, backup channel, remote facilitator, remote contribute/vote/present | In-person only |
| `accessibility` | Captions, screen-reader-friendly boards, colorblind-safe voting, mobility, neurodiversity, sensory load, materials ahead | No stated/inferable needs |
| `inputs_and_prework` | Pre-read/pre-work as dependency; async load; cramming live what should be prework; async-first marking | No prework/async dependency |
| `sensemaking_and_synthesis` | Path from raw notes to usable output, not just input gathering | — |
| `decision_and_authority` | Decision rule, sponsor/owner, stickiness; decision quality (criteria before vote, real options, not predetermined); estimation vs commitment | Not a decision/planning session |
| `artifacts_and_follow_through` | Captured outputs + governance (decision log, "not doing", dissent, sponsor sign-off, owner authority, checkpoint) — governance conditional on decision/alignment/commitment sessions | — |
| `privacy_and_confidentiality` | Anonymity mechanism is real; recording-vs-candor; confidentiality promises; who sees outputs | No anonymity/confidentiality/recording claim |
| `blameless_postmortem` | Systemic analysis, no individual blame, safety framing | Not incident/postmortem |

## Spot-checks

Run each as `pass | fail | n/a` with a one-line reason. Each spot-check maps to
exactly one parent review area.

| Spot-check | Parent area | Fails when |
| --- | --- | --- |
| `skipped_intake` | `intake_and_arc_fit` | Commits to headcount/time/goal never established, or ignores stated constraints |
| `invalid_timing` | `timing_and_pacing` | Step sums overflow a block, invalid clock (base-60), no break at cadence. *(Missing cut list is NOT a hard fail — it is a preconditioned should-fix; see below.)* |
| `scale_mismatch` | `voice_architecture` | Plenary round-robin above ~8 for **substantive** sharing (not a brief opt-out check-in) |
| `forgot_online_group` | `hybrid_and_remote_parity` | Remote participants exist but have no real way to contribute/vote/present |
| `unsafe_arc_for_context` | `power_and_safety` | Trauma/grief/low-trust/conflict routed to an action-forcing arc; or a non-neutral requester facilitates their own grievance |
| `decision_authority_theater` | `decision_and_authority` | Decision arc with no real authority, or a predetermined outcome staged as open participation |
| `anonymity_or_recording_dishonesty` | `privacy_and_confidentiality` | "Anonymous" claim contradicted by the mechanism (show of hands); or a recorded/attributed sensitive session presented as candor-safe |
| `no_artifacts_or_post_process` | `artifacts_and_follow_through` | Plan ends at the agenda: no captured outputs or post-session process |
| `wrong_output_language` | `intake_and_arc_fit` | Plan body is not in the audience's language (needed by harness) |

**Harness-only**: `catalogue_practice_honesty` (renamed from `invented_practice`)
— the stricter catalogue-only reading lives only in the harness glue, not in this
shared rubric.

## Anti-double-count rule

The spot-check is the binary spot; the area is where you explain. A concept
appears once in the surfaced issue list. If `invalid_timing` fails on clock
arithmetic, explain it under `timing_and_pacing` — do not also list a separate
issue for the same clock error.

## Preconditions on absolute checks

These soften false positives without hiding real defects:

- **Cut list**: absence is a **should-fix**, not a hard fail. Required only for
  tight/high-stakes/long/complex sessions. A simple, low-stakes session without a
  cut list should not fail `invalid_timing`.
- **`scale_mismatch`**: fires only for substantive plenary sharing above ~8, not
  brief opt-out check-ins or short round-robins.
- **`follow_through_governance`** (in `artifacts_and_follow_through`): conditional
  on decision/alignment/commitment sessions — not every session needs a decision
  log.
