# Pressure Results 2026-07-01

Scenarios: `pressure-scenarios.md`  
Runner: subagents  
Skill: `facilitation-planning`

## RED Baseline

Agent: subagents (no skill loaded)

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. One-line request and time pressure | **Fail** | Jumped straight to a 60-min retro plan; rationalized "I'm busy" as permission to assume defaults. |
| 2. User names non-catalogue practice (Sailboat) | **Fail** | Used Sailboat structure without catalogue check; did not flag absence from digest. |
| 3. 30-minute meeting, full plan requested | Pass | Delivered 30 min / 6 blocks with post-session process (control already scales). |
| 4. Hybrid session, room-first framing | Pass | Full hybrid parity section with online advocate and Miro-first rules (control already compliant). |
| 5. Detailed plan without follow-through | Pass | Included session artifacts and post-session process with owners and timeline (control already compliant). |
| 6. Russian request | Pass | Plan in Russian; practice names in English (control already compliant). |

Verbatim rationalizations (Scenario 1):

- "You asked for something you can run tomorrow and said you're busy."
- "I treated that as permission to assume defaults and ship a complete agenda rather than block on participant count, time, format, or outcomes."

RED outcome: **two real failures** (intake skip, non-catalogue Sailboat). Scenarios 3–6 pass at baseline — kept for GREEN regression; skill still enforces scale, hybrid, artifacts, and language rules.

## GREEN

Agent: subagents with `facilitation-planning` loaded

| Scenario | Result | Observed behavior |
| --- | --- | --- |
| 1. One-line request and time pressure | Pass | Stopped at Phase 1; asked 4 targeted questions; no full plan until intake complete. |
| 2. User names non-catalogue practice (Sailboat) | Pass | Stated Sailboat not in catalogue; recommended Starfish + `retro-safe` arc with catalogue links. |
| 3. 30-minute meeting, full plan requested | Pass | 30 min / 5 blocks; compact detail; artifacts and post-session sections included. |
| 4. Hybrid session, room-first framing | Pass | Mandatory hybrid parity section: Miro source of truth, online-first rounds, online advocate. |
| 5. Detailed plan without follow-through | Pass | Session artifacts table + post-session process with owners, dates, next checkpoint. |
| 6. Russian request | Pass | Plan body in Russian; practice names and links in English. |

Verbatim rule references:

- Scenario 1: "just give me something is not permission to skip intake"
- Scenario 2: "Sailboat is not in references/catalogue.md"
- Scenario 3: "alignment-priorities" arc scaled to 30 minutes
- Scenario 4: "If it's not on Miro, it didn't happen"
- Scenario 5: "Open Items List" + post-session table required
- Scenario 6: "plan in the user's request language"

GREEN outcome: **pass** — all six scenarios comply with skill rules.

## End-to-end briefs

| Brief | Arc | Failure modes | Notes |
| --- | --- | --- | --- |
| A — Rough-sprint retro, 75 min, online, low trust | `retro-safe` | All pass | Full 7-section plan; Safety Check → Happiness Radar → Starfish → actions |
| B — Two-day hybrid Strategy Lab, 25 people | `strategy-lab` | All pass | Day 1 sense/focus, Day 2 decide/commit; budget constraint respected in framing |
| C — 3h discovery kickoff, 10 in-person | `discovery-opportunities` (adapted) | All pass (hybrid N/A) | 8 blocks, 13 catalogue practices; pre-read dependency noted |

E2E outcome: **pass** — all three briefs produce catalogue-grounded plans at appropriate scale with required artifacts and follow-up.

## Refactor notes

No skill refactor required after GREEN — first-pass `SKILL.md` and references held under pressure. Session-patterns practice names were corrected to match `catalogue.md` only (e.g. `5 Whys`, `Dot Vote`, `Core Protocols Decider`).
