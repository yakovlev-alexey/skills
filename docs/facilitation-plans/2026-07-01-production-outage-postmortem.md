# Production Outage Postmortem — Facilitation Plan

## Goal

Conduct a blameless 2-hour postmortem on last week's production outage so the engineering group produces a shared timeline, systemic contributing factors, and process/safeguard improvements — **not individual accountability assignments**.

## Decision authority

- **Sponsor:** VP Engineering (requested "who was responsible" — **reframe before session**).
- **Facilitation stance:** This is **systemic learning**, not a personnel review. Individual corrective actions are out of scope; HR/performance processes are separate channels.
- **Decision rule:** Consent on systemic action items only; no vote on blame.
- **Will this stick?** Actions require sponsor commitment to resourcing; confirm sponsor accepts blameless framing in a pre-brief.

## Key outcomes

- Shared event timeline with timestamps
- Contributing factors mapped (systems, processes, tooling — not people)
- 3–5 systemic improvements with owners and dates
- Explicit agreement: **no blame assignments** captured in artifacts

## Acceptance criteria

- Group agrees the timeline reflects what happened
- At least three systemic actions owned and resourced
- **Fallback:** If blame-seeking derails the session, pause, restate ground rules, and convert remaining time to timeline + parking lot for offline follow-up with neutral facilitator

| Time | Block | Format (catalogue practice) | Output |
| --- | --- | --- | --- |
| 0:00-0:10 | Blameless frame + safety | [Creating Safety](https://www.funretrospectives.com/creating-safety/) + blameless postmortem framing (plain facilitation structure) | Ground rules; agreement to inspect systems, not people |
| 0:10-0:35 | Timeline reconstruction | [Timeline](https://retromat.org/en/?id=4) | Shared sequence of events with timestamps |
| 0:35-0:40 | Break | plain facilitation structure | — |
| 0:40-1:05 | Contributing factors | [5 Whys](https://retromat.org/en/?id=8) | Systemic cause themes (not individual fault) |
| 1:05-1:25 | Ownership boundaries | [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29) | Team-owned vs external constraints |
| 1:25-1:45 | Systemic actions | [Open Items List](https://retromat.org/en/?id=24) | Improvements addressing processes, tooling, safeguards |
| 1:45-2:00 | Close + sponsor next steps | plain facilitation structure | Summary; checkpoint booked; comms plan for absent stakeholders |

---

### Block: Blameless frame + safety (0:00-0:10)

**Why:** VP's "who was responsible" framing invites blame. Establish blameless ground rules before any incident detail.

**Format:** [Creating Safety](https://www.funretrospectives.com/creating-safety/) + blameless postmortem framing (plain facilitation structure)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────────────────────────┐
│  BLAMELESS POSTMORTEM — ground rules                    │
├─────────────────────────────────────────────────────────┤
│  ✓ We inspect systems, processes, and safeguards        │
│  ✓ We assume good intent and complexity                 │
│  ✗ No naming individuals as "root cause"                │
│  ✗ No individual corrective actions in this session     │
│  Personnel matters → HR/management channels, not here   │
└─────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Open by acknowledging the outage impact. State explicitly: *"The VP asked who was responsible — this session answers a different question: what in our systems and processes allowed this to happen, and what we change so it doesn't repeat."* If anyone pushes for individual accountability, park it: *"Noted — that's outside this session's scope."*

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Blame language early | Restate ground rules; use parking lot for personnel topics |
| Low safety scores | Extend Creating Safety; drop 5 Whys depth; protect timeline |
| VP joins and reintroduces blame | Pre-brief sponsor; facilitator redirects to systemic frame |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Context: outage impact, session purpose |
| 2 | 4 min | Creating Safety check |
| 3 | 2 min | Read and confirm blameless rules on board |

**Block output:** Ground rules visible on Miro; safety score captured

---

### Block: Timeline reconstruction (0:10-0:35)

**Why:** Shared factual sequence before causal analysis prevents conflicting narratives and blame attribution.

**Format:** [Timeline](https://retromat.org/en/?id=4)

**Board / frame (ASCII):**
```
┌──────────┬──────────┬──────────┬──────────┐
│  Time    │  Event   │  Signal  │  Actor   │
│          │          │  (alert) │  (role,  │
│          │          │          │  not name)│
├──────────┼──────────┼──────────┼──────────┤
│  ...     │          │          │          │
└──────────┴──────────┴──────────┴──────────┘
```

**Facilitator instruction:** Use **roles** (on-call, deploy pipeline, monitoring) not personal names on the public board. Corrections additive, not adversarial.

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Explain timeline columns; silent individual capture |
| 2 | 12 min | Popcorn build — one event at a time |
| 3 | 7 min | Cluster overlaps; resolve factual disputes only |

**Block output:** Agreed timeline on board

---

### Block: Break (0:35-0:40)

**Why:** Mandatory break in 2-hour online session (~45–60 min cadence).

**Format:** plain facilitation structure

**Block output:** —

---

### Block: Contributing factors (0:40-1:05)

**Why:** Move from events to systemic causes without individual scapegoating.

**Format:** [5 Whys](https://retromat.org/en/?id=8)

**Facilitator instruction:** Run 5 Whys on **process/system nodes** from the timeline (e.g., "alert didn't page," "rollback took 40 min"), never on "Person X did Y." Stop at organizational/process layers.

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Pick 2–3 timeline nodes for group analysis |
| 2 | 15 min | 5 Whys per node in pairs → plenary |
| 3 | 7 min | Cluster themes |

**Block output:** Contributing factor themes (systemic)

---

### Block: Ownership boundaries (1:05-1:25)

**Why:** Separate what this team can change from external dependencies.

**Format:** [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29)

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Explain circles |
| 2 | 12 min | Sort factors into team-owned vs soup |
| 3 | 5 min | Confirm top team-owned levers |

**Block output:** Sorted constraints map

---

### Block: Systemic actions (1:25-1:45)

**Why:** Convert learning into process/tooling/safeguard changes — **not** individual performance plans.

**Format:** [Open Items List](https://retromat.org/en/?id=24)

**Facilitator instruction:** Every action must describe a **system change** (runbook, alert threshold, deploy gate, capacity). Reject items framed as "Person A will be more careful."

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Brainstorm systemic improvements |
| 2 | 10 min | Dot vote top 3–5 (criteria: impact × feasibility) |
| 3 | 7 min | Assign owners, dates, success signals |

**Block output:** Action table — systems/processes only

---

### Block: Close + sponsor next steps (1:45-2:00)

**Why:** Lock follow-through and communicate blameless summary to absent stakeholders including VP.

**Format:** plain facilitation structure

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Read back actions; confirm no blame items |
| 2 | 5 min | Book checkpoint; name who briefs VP |

**Block output:** Summary + calendar hold

---

## Cut list

If running long:
- **Cut:** Second 5 Whys node; shorten Circles & Soup to top 5 factors only
- **Protect:** Blameless frame, timeline, systemic actions close

## Preparation

**Space / tools:** Miro board (timeline, factors, actions); video with recording off unless agreed; timer

**Pre-read / pre-work:** Send blameless postmortem guide + ground rules 48h ahead; **pre-brief VP** on systemic-only output; collect async timeline notes from on-call participants

**Facilitator role:** Neutral facilitator (not incident commander if they were in the hot seat); scribe on board

**Parking lot:** Separate section for personnel/HR topics — explicitly **not** actioned in this session

## Hybrid / online parity

Online-only (10 engineers). Miro is source of truth. Anonymous sticky mode for sensitive timeline notes if needed — name mechanism if claimed.

**Parity rules:**
- All contributions on board; verbal-only items scribed immediately
- Breakout not needed at this scale; use pairs in Zoom breakouts if subgroup analysis needed

## Session artifacts

| Artifact | Purpose | Owner | Location | Confidentiality |
| --- | --- | --- | --- | --- |
| Timeline board | Shared event sequence | Scribe | Miro | Internal engineering |
| Contributing factors | Systemic themes | Scribe | Miro | Internal |
| Action log | Systemic improvements | Facilitator | Wiki/Jira | Internal; **no blame entries** |
| Summary for VP | Outage learnings + actions | Facilitator | Email/doc | Internal leadership |
| Parking lot (personnel) | Out-of-scope items | Facilitator | Private doc | HR/management only |

**Follow-through governance:**
- Decision log: actions + criteria (impact/feasibility); dissent captured
- "Not doing" list: explicit deprioritizations
- Sponsor sign-off on resourcing within 48h
- First checkpoint **booked before session ends** (e.g., +2 weeks)

## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish blameless summary + action table | Scribe | Same day | Tag owners; brief VP on systemic frame |
| Sponsor confirms resourcing | VP Eng delegate | Within 48h | Approve or resize actions |
| Create tickets for each systemic action | Action owners | Within 24h | Link to postmortem doc |
| Verify owner authority/resources | Eng manager | Before work starts | Escalate blockers |
| Progress review | Facilitator | Checkpoint date (pre-booked) | Close or extend actions |
| Revisit in next retro | Team | Next sprint retro | Confirm safeguards held |
