# Facilitation-planning — remaining backlog after pass 2

Date: 2026-07-01  
Status: active backlog for pass 3  
Skill: `facilitation-planning`

## What pass 2 shipped (skill-only)

Implemented in pass 2 without editing `~/Repos/awesome-facilitation`:

- New session arcs: `dependency-alignment`, `risk-premortem`, `incident-postmortem`, `town-hall`, `async-first`, `tender-listening`
- Timezone / energy-window intake; optional pre-interview note
- Hybrid operations checklist in `plan-template.md`
- Facilitator contingencies per risky block
- Follow-through governance (decision log, "not doing" list, dissent, sponsor sign-off, owner authority, checkpoint booked)
- Deeper requester-as-conflicted-party and trauma/grief Stop-if routing
- Pressure S13–S16; E2E briefs G/H/I; run `e2e/runs/2026-07-01-v3/`

See [2026-07-01-facilitation-planning-improvements-design.md](2026-07-01-facilitation-planning-improvements-design.md) for pass 1 (TOP-5). Pass 2 scope was defined from [2026-07-01-facilitation-planning-future-improvements.md](2026-07-01-facilitation-planning-future-improvements.md).

## Remaining — requires editing the generated catalogue source repo

`references/catalogue.md` is generated from `~/Repos/awesome-facilitation` via `scripts/build-catalogue.mjs`. **Never hand-edit the digest.** The following need new practice families added to the source repo, then regenerate:

### Practice families to add

| Family | Practices (examples) | Why deferred |
| --- | --- | --- |
| **Estimation / planning** | Planning poker, affinity estimation, magic estimation | No catalogue entries today; "closest match" fails cleanly for sprint/PI/roadmap planning |
| **Energizers (mid-session)** | Post-lunch / mid-day energy resets | Catalogue has opening icebreakers only |
| **Closings / feedback rituals** | ROTI, plus/delta, session-on-the-session feedback | Improves facilitator learning loop; not in digest |
| **Mediation / negotiation** | First-class mediation and negotiation formats | Conflict/repair arc reuses ingredients; no dedicated family |

### Session arc blocked on catalogue

- **Planning / estimation arc** — capacity, sequencing, and uncertainty mechanics for sprint / PI / roadmap sessions. Blocked until estimation practices exist in the source repo. After adding practices: add arc to `session-patterns.md`, brief + pressure scenario, E2E brief J.

## Pass 3 approach (when ready)

1. Edit `~/Repos/awesome-facilitation` — add README sections + practice markdown files following existing file format (see `core-structures/prioritization-practices.md` for table schema).
2. Regenerate: `node facilitation-planning/scripts/build-catalogue.mjs`
3. Add `planning-estimation` arc to `session-patterns.md` using new catalogue entries.
4. Optional: wire energizers/closings/mediation into existing arcs or new pattern families.
5. Run full test harness (pressure + E2E); commit new run folder.

## Prioritization

Highest leverage next: **estimation practices + planning arc** — unblocks a whole class of real sessions that pass 2 still cannot serve with catalogue-first honesty.

Secondary: energizers and closings (quality-of-life for full-day sessions); mediation family (upgrade conflict/repair beyond ingredient reuse).

## Non-goals for pass 3

- No hand-editing `references/catalogue.md`
- No relaxing the anti-hallucination guard (`framing_plus_labeled`)
