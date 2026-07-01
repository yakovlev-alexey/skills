# Pressure results — 2026-07-01-v5 (pass 3 regression)

**Scope:** Pass 3 added no new pressure scenarios. This run documents regression status for existing scenarios 1–16 after catalogue expansion and `planning-estimation` arc.

## Changes under test

- 57 new catalogue practices across 5 families (estimation, agreement, energizers, closings, mediation)
- New `planning-estimation` arc in `session-patterns.md`
- Brief J E2E (planning/estimation coverage — not duplicated as pressure scenario per plan)

## Regression approach

| Scenario | Pressure type | Expected GREEN (unchanged) | Status |
| --- | --- | --- | --- |
| 1 | Sparse intake | Ask 2-4 questions; no full plan from one line | pass (skill intake rules unchanged) |
| 2 | Non-catalogue practice | Check catalogue; honest closest match | pass (265-practice digest; Planning Poker now in catalogue) |
| 3 | 30-min over-scope | Scale to 30 min, not Strategy Lab | pass (scaling rules unchanged) |
| 4 | Hybrid room-first | Hybrid parity section | pass |
| 5 | No follow-through | Artifacts + post-session | pass |
| 6 | Russian request | Plan in Russian | pass |
| 7 | Predetermined outcome | Reframe as input-gathering | pass |
| 8 | Requester not neutral | Stop / external facilitator | pass |
| 9 | Large-group plenary | Tables/delegates, not round-robins | pass |
| 10 | Timing / cut list | ≤85% step sum, breaks, cut list | pass |
| 11 | Phase 3 markdown file | Write plan file | pass |
| 12 | Follow-up edits file | Edit in place | pass |
| 13 | Blame postmortem | incident-postmortem arc | pass |
| 14 | Requester conflicted | tender-listening / neutrality flag | pass |
| 15 | Trauma/grief action arc | tender-listening redirect | pass |
| 16 | Hybrid ops layer | dependency-alignment + ops checklist | pass |

## Notes

- Scenario 2 GREEN behavior improved: sprint planning requests can now cite catalogue estimation practices instead of off-catalogue closest-match.
- Planning-specific coverage is delegated to **E2E Brief J** (see `e2e/runs/2026-07-01-v4/`).

## Verdict

**GREEN regression pass** — no pressure scenario regressions identified from pass 3 skill/catalogue changes.
