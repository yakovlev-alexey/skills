# Facilitation-planning skill improvements — design

Date: 2026-07-01
Status: approved design, pending implementation
Skill: `facilitation-planning`

## Context

Two independent expert reviews of the `facilitation-planning` skill converged
tightly. Both praised the same strengths and flagged the same top gaps. The
skill reliably produces structurally complete, catalogue-grounded, follow-through-backed
plans, but it is nearly blind to **decision authority, group size, real conflict,
and timing math** — so it can produce well-run sessions that do not stick, blow
up at scale, or march an unsafe room toward an action list.

### Confirmed strengths (do not regress)

- Intake-before-design is a hard gate ("just give me something" is not permission
  to skip intake).
- Catalogue-only + "name it honestly" prevents invented branded methods with fake
  citations. This is the skill's main anti-hallucination guard.
- Follow-through (artifacts + owners + timeline + next checkpoint) is first-class.
- The three-arc retro triad branches on the right real-world variables.

### Confirmed weaknesses (this work targets the top tier)

Empirically, the committed E2E run (`e2e/runs/2026-07-01/summary.md`) already
showed: per-block step tables summing past block duration; a base-60 clock bug
(`0:55-0:68`); and a 25-person `scale_mismatch` failure from plenary round-robins.

## Goals

Implement the converged TOP-5 plus low-cost second-tier wins that ride along in
the same files. Preserve the skill's lean design (mechanics live in `references/`,
`SKILL.md` stays mostly terse) and its anti-hallucination guard.

## Non-goals (deferred)

Captured in `2026-07-01-facilitation-planning-future-improvements.md`. Notably,
anything requiring new catalogue practice families is out of scope, because
`catalogue.md` is **generated** from `~/Repos/awesome-facilitation` via
`scripts/build-catalogue.mjs` — adding practices means editing that source repo
and regenerating.

## Key constraints discovered

- `references/catalogue.md` is generated; never hand-edit it.
- All ingredients the TOP-5 needs already exist in the catalogue:
  `Agreement and Certainty`, `Heard, Seen, Respected`, `Creating Safety`,
  `Writing the Unspeakable`, `Stinky Fish`, `Spot the Elephant`,
  `Conversation Cafe`, `Rounds`, `What I Need From You`, `Gradients of Agreement`,
  and `World Cafe` / `Open Space Technology` / `25/10 Crowdsourcing` / `Spokescouncil`.
  So no source-repo edits are required for this work.
- The skill's own test protocol (pressure scenarios + E2E briefs run by
  subagents, committed under `e2e/runs/<date>/`) must run before edits ship.

## Approach

Approach A (surgical edits to existing files). Map each change onto the reference
file where it naturally belongs; add no new `references/*` file. Deferred backlog
goes to a separate future-improvements doc.

### File / section map

```
facilitation-planning/
├── SKILL.md
│    ├─ Phase 1 Intake   → + authority / decision-rule / confidentiality / neutrality fields
│    ├─ Catalogue rule   → relaxed (framing "plain structure" + labeled off-catalogue)
│    ├─ Scaling          → + group-size axis (pointer to session-patterns)
│    └─ Stop if          → rewritten to facilitation-reality stops
├── references/
│    ├─ session-patterns.md → + conflict-repair family, + large-group family,
│    │                         + group-size scaling axis, + safety-downshift in retro-safe,
│    │                         + decision-rule-first / criteria-before-vote notes
│    ├─ plan-template.md    → + timing math (≤85% + transitions), + break cadence,
│    │                         + REQUIRED cut list, + criteria-before-vote,
│    │                         + authority/confidentiality in goal & artifacts, + clock-format note
│    └─ catalogue.md         (unchanged — generated)
├── future-improvements.md   (see note below on location)
├── pressure-scenarios.md    → + new scenarios
└── e2e/
     ├─ briefs.md            → + new briefs
     ├─ facilitator-review.md → + new dimensions & failure-mode spot-checks
     └─ runs/<date>/         → NEW committed run (full harness)
```

Note on future-improvements location: for this brainstorming pass the deferred
backlog is written to `docs/superpowers/specs/` alongside this design. During
implementation it may also be copied into `facilitation-planning/` as the skill's
own backlog; decide at implementation time.

## Detailed changes

### Change 1 — Decision authority in intake (`SKILL.md` Phase 1; `session-patterns.md`)

Add REQUIRED intake fields (compact, one line each):

- Sponsor / decision owner — who owns the outcome and can commit resources.
- Decision rule — consult / consent / consensus / leader-decides / vote. Selected
  **before** the arc, using `Agreement and Certainty` to match issue to approach.
- Authority reality — "will this stick, or can it be overridden?" If unclear or the
  outcome is predetermined, reframe the session as **input-gathering, not
  decision-making**, and say so explicitly.
- Acceptance criteria — what "done" looks like; fallback if no agreement emerges.
- Confidentiality / recording — Chatham House vs attributed; recorded?; who sees the
  output. This choice carries into the artifacts section.
- Facilitator neutrality + who is in the room — is the requester a participant or a
  neutral facilitator? Is the decision-maker present? Is any key knowledge-holder
  missing?

`session-patterns.md` fix: `alignment-commit` stops **defaulting** contested
decisions to Sociocracy consent / Core Protocols Decider. It selects the decision
rule from intake instead (consent/Decider remain options, not the default).

Acceptance: a sparse alignment request triggers authority questions; a predetermined
outcome is reframed as input-gathering rather than staged as a decision session.

### Change 2 — Timing realism + cut list (`plan-template.md`; both scaling tables)

- Step-sum rule: per-block timed-flow steps sum to **≤ ~85%** of block duration;
  reserve ~2-3 min per block for instructions + transitions.
- Break cadence: mandatory break every ~60-75 min in-person, ~45-60 min online.
- Cut list (REQUIRED element): every plan carries an "if running long, cut X /
  protect Y" line.
- Clock-format note: times are clock minutes (`h:mm`), not decimals — prevents the
  `0:55-0:68` base-60 bug.

Acceptance: generated plans have step tables that fit their blocks, include a break
at the mandated cadence, and carry an explicit cut list.

### Change 3 — Group-size scaling axis + large-group arc (`session-patterns.md`; `SKILL.md` scaling)

Add a headcount axis, independent of time budget:

| Headcount | Participation structure |
| --- | --- |
| ≤8 | Plenary rounds OK |
| 9-15 | Pairs/triads + popcorn; delegate report-outs |
| 16-30 | Small tables + delegate report-out (no full round-robins) |
| 30+ | `World Cafe` / `Open Space Technology` / `25/10 Crowdsourcing` / `Spokescouncil` |

Add a `large-group-forum` single-session arc (>~16 people) so scale is not served
only by the multi-day `strategy-lab`.

Acceptance: a 25+ person brief schedules tables/delegates, not 25-person round-robins.

### Change 4 — Conflict/repair arc + safety-downshift (`session-patterns.md`)

New "Conflict / repair" pattern family whose destination is **understanding and
repair, not an action list**:

```
Create Safety / Heard, Seen, Respected
  → surface (Writing the Unspeakable / Stinky Fish / Spot the Elephant)
  → dialogue (Conversation Cafe / Rounds)
  → mutual requests (What I Need From You)
  → light relationship agreement (NOT a to-do list)
```

Operational safety-downshift wired into `retro-safe` (replaces the "stay at the
level the room supports" slogan): if the Safety Check reads low, switch to
`Creating Safety` / `Heard, Seen, Respected`, drop action-forcing, and convert to a
listening session.

Anonymity honesty (cheap win): distinguish real anonymity (blind poll / private
submission / anonymous board mode) from theatrical anonymity (named participants on
a shared board). The plan must name the actual mechanism whenever it claims
anonymity.

Acceptance: a "team in open conflict" brief routes to the conflict/repair arc, not
an action-forcing retro; a low safety check downshifts; any "anonymous" claim names
its mechanism.

### Change 5 — Rewrite "Stop if" + relax catalogue rule (`SKILL.md`)

New "Stop if" (facilitation-reality stops):

- No clear decision authority, or predetermined outcome disguised as participation.
- Requester is not neutral (facilitating their own grievance).
- Active interpersonal / HR / legal conflict framed as a workshop.
- Key decision-maker or knowledge-holder missing.
- Impossible scope for the time.
- Safety check fails in the room.
- Trauma/grief context routed to an action-oriented arc.
- (kept, condensed) no intake on a sparse request; hybrid without online design; no
  artifacts/post-process; wrong output language.

Relaxed catalogue rule (`framing_plus_labeled`) with guardrails:

- Framing/admin/transition/break/decision-rule/cut-list blocks may be described as
  "plain facilitation structure" with no forced catalogue citation.
- Named branded practices are **catalogue-first, always**. Off-catalogue is allowed
  only when the user names it or nothing in the catalogue fits, and must be
  explicitly labeled: `not from the digest — [real source], unverified against
  catalogue`. Never fabricate a source; never attribute an off-catalogue method to
  the digest.

Acceptance: framing blocks no longer force fake citations; the Sailboat pressure
scenario still refuses to attribute Sailboat to the digest but may now offer it as a
clearly-labeled off-catalogue option with a real source.

### Cheap wins folded in

- Criteria-before-vote: every converge/vote block sets decision/prioritization
  criteria first (`plan-template.md` + patterns).
- Confidentiality/recording intake carried into artifacts (Change 1).
- Anonymity mechanics (Change 4).
- Requester-neutrality + wrong-people-in-room checks (Change 1 + Stop-if).

## Testing plan (full harness)

Definitions:

- `pressure-scenarios.md`: add S7 predetermined-outcome / no-authority; S8
  requester-not-neutral / conflict-as-workshop; S9 large-group plenary temptation;
  S10 timing-overrun / cut-list.
- `e2e/briefs.md`: add Brief D (alignment where outcome may be overridden —
  authority + criteria); Brief E (conflict/repair + safety downshift); Brief F
  (large single-session forum — scale).
- `e2e/facilitator-review.md`: add dimensions / failure-mode spot-checks for
  `decision_authority`, `conflict_safety_handling`, `timing_cut_list`,
  `scale_participation_structure`, `anonymity_honesty`.

Execution:

- Run pressure RED/GREEN and all E2E briefs via executor + reviewer subagents.
- Commit under a fresh `e2e/runs/<date>/` folder; do not overwrite the existing
  `2026-07-01` run (use a distinct run label if the date collides).
- Regenerate catalogue only if the source repo changes (it will not for this work).

## Acceptance criteria (overall)

- All five changes implemented in the mapped files; `SKILL.md` remains lean.
- Anti-hallucination guard preserved: no fabricated sources; catalogue-first ordering.
- New pressure scenarios pass GREEN; new E2E briefs return runnable-with-fewer-edits
  and specifically clear `decision_authority`, `scale_participation_structure`, and
  `timing_cut_list` spot-checks.
- Deferred items recorded in the future-improvements doc.

## Rollout / handoff

Brainstorming normally hands off to a `writing-plans` skill; that skill is not
present in this workspace. The relevant skill here is `writing-skills` (for editing
skills). After spec approval, implementation proceeds as a tracked todo list
following `writing-skills` guidance, then the full test harness runs and its run
folder is committed.
