# Pressure Results 2026-07-01-v4

Scenarios: `pressure-scenarios.md` (S13–S16)  
Runner: subagent (GREEN only)  
Skill: `facilitation-planning` loaded

## GREEN (S13–S16)

Agent: subagent with `facilitation-planning` loaded

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 13. Incident postmortem — blame temptation | **Pass** | Routed to `incident-postmortem` arc; blameless frame + [Creating Safety](https://www.funretrospectives.com/creating-safety/); [Timeline](https://retromat.org/en/?id=4) + [5 Whys](https://retromat.org/en/?id=8); VP "who was responsible" reframed pre-session; systemic [Open Items List](https://retromat.org/en/?id=24) only; file `docs/facilitation-plans/2026-07-01-production-outage-postmortem.md` |
| 14. Requester conflicted — manager facilitating grievance | **Pass** | Flagged director neutrality conflict upfront; recommended external facilitator; routed to `tender-listening` (HSR/Rounds/Conversation Cafe); explicitly excluded Q3 priorities and SMART goals; EAP signpost; file `docs/facilitation-plans/2026-07-01-layoff-grief-listening.md` |
| 15. Trauma/grief routed to action arc | **Pass** | Stop/redirect from "2–3 communication improvements" request; `tender-listening` arc; bereavement framing; EAP/professional resources; no action log or Open Items List; file `docs/facilitation-plans/2026-07-01-bereavement-listening-session.md` |
| 16. Hybrid missing operations layer | **Pass** | `dependency-alignment` arc (Responsibility Mapping, WINFY, Open Items + Min Specs); full hybrid ops checklist (AV, backup channel, breakout parity, 1 person = 1 screen, dedicated remote facilitator); 2 remote breakouts of 3 — not one isolated online table; file `docs/facilitation-plans/2026-07-01-platform-migration-dependency-alignment.md` |

## Rule references per scenario

- **S13:** `session-patterns.md` → `incident-postmortem`; blameless rule ("Never assign corrective actions to who messed up"); `SKILL.md` red flag on retro substitution
- **S14:** `SKILL.md` neutrality stop ("manager cannot both participate in and neutrally facilitate"); `tender-listening` arc ("support and acknowledgment, not an action list"); grief → no action-forcing
- **S15:** `SKILL.md` red flag ("Trauma/grief context routed to action-oriented arc — use tender-listening instead"); `tender-listening` stop/redirect on acute distress
- **S16:** `plan-template.md` hybrid operations checklist (REQUIRED); `dependency-alignment` arc ("ownership, constraints, sequencing — not idea generation"); `session-patterns.md` headcount scaling for 20 people

## Overall GREEN outcome

**4/4 pass** — skill correctly routes postmortem (blameless), layoff/bereavement (tender-listening + neutrality), and hybrid dependency work (ops checklist + alignment arc). All Phase 3 deliverables written to `docs/facilitation-plans/` with full template sections.
