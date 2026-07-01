# Pressure Results 2026-07-01-v2

Scenarios: `pressure-scenarios.md` (S1–S10)  
Runner: subagents  
Skill: `facilitation-planning` (post TOP-5 improvements)

## RED Baseline (new scenarios S7–S10 only)

Agent: subagents (no skill loaded)

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 7. Predetermined outcome / no authority | **Fail** | Full Sociocracy consent decision workshop; "CEO's direction is context, not a veto"; no authority reframe |
| 8. Requester not neutral / conflict as workshop | **Fail** | EM-led working-agreements workshop with charter and action items; no neutrality flag |
| 9. Large-group plenary temptation | **Fail** | Three 28-person plenary round-robins; one late small-group block |
| 10. Timing overrun / cut list | **Fail** | Step tables overrun 5 of 6 work blocks; break present; no cut list |

Verbatim rationalizations (Scenario 7):

- "The CEO's direction is context, not a veto on today's process — the group needs to own the decision for implementation to succeed."
- "Front-load listening — first 45 minutes are input-heavy so directors feel their concerns shaped the outcome."
- "Merge feels like their decision because their conditions are in the record."

Verbatim rationalizations (Scenario 8):

- "End on concrete actions so the team feels progress."
- "Keep standup conflict off the table — 'We're designing forward-looking norms.'"

RED outcome: **four real failures** on new scenarios — confirms TOP-5 gaps before edits.

## GREEN (post-improvements)

Agent: subagents with `facilitation-planning` loaded (edited skill)

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. One-line request and time pressure | Pass | Phase 1 intake; 2–4 questions; no invented defaults |
| 2. User names non-catalogue practice (Sailboat) | Pass | Sailboat not in catalogue; Starfish/Rose Bud Thorn offered honestly |
| 3. 30-minute meeting, full plan requested | Pass | `alignment-priorities` scaled to 30 min; cut list + artifacts |
| 4. Hybrid session, room-first framing | Pass | Miro source of truth, online advocate, triads with remote mix |
| 5. Detailed plan without follow-through | Pass | Artifacts + post-session with owners and timeline |
| 6. Russian request | Pass | Plan in Russian; practice names in English |
| 7. Predetermined outcome / no authority | Pass | Reframed as input-gathering; leader-decides; no fake consent arc |
| 8. Requester not neutral / conflict as workshop | Pass | Stopped; external facilitator recommended; conflict-repair routing |
| 9. Large-group plenary temptation | Pass | World Cafe 7×4 tables + Spokescouncil delegates; no plenary round-robins |
| 10. Timing overrun / cut list | Pass | Step sums ≤85%; break at 0:52; explicit cut list; valid h:mm times |

Verbatim rule references (new scenarios):

- Scenario 7: "reframe as **input-gathering, not decision-making**, and say so"
- Scenario 8: "Stop if: Requester is not neutral" / "conflict-repair — understanding and repair, not an action list"
- Scenario 9: "Do not schedule plenary round-robins above ~8 people" / `large-group-forum`
- Scenario 10: "Step times must sum to ≤ ~85%" / "Cut list (REQUIRED)"

GREEN outcome: **pass** — all ten scenarios comply with edited skill rules.

## End-to-end briefs

Full run with outputs, facilitator reviews, and pinned definitions:

**[e2e/runs/2026-07-01-v2/summary.md](e2e/runs/2026-07-01-v2/summary.md)**

## Refactor notes

TOP-5 changes landed in `SKILL.md`, `references/session-patterns.md`, and `references/plan-template.md`. No catalogue regeneration. Test definitions extended: S7–S10, Briefs D–F, five new facilitator-review spot-checks.
