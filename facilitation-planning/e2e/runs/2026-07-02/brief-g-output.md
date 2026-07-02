## Goal

Clarify cross-team **ownership**, **constraints**, and **sequencing** for the platform migration so Platform, Data, and Product can execute in parallel without hidden dependencies — not generate new migration options.

## Decision authority

- **Sponsor / decision owner:** Migration program lead (or engineering director accountable for migration delivery); present or represented with explicit handoff authority.
- **Commit authority in the room:** Three team leads (Platform, Data, Product) can **commit capacity and dates for their teams**. Individual contributors inform mapping but do not bind teams.
- **Decision rule:** [Agreement and Certainty](https://www.liberatingstructures.com/agreement-and-certainty) → **consent among team leads** on the sequenced plan using [Sociocracy consent decision-making](https://patterns.sociocracy30.org/consent-decision-making.html) ("good enough for now, safe enough to try"). Reservations captured via [Gradients of Agreement](https://workshopweaver.com/facilitation-methods/gradients-of-agreement) on the final commitment sheet.
- **Authority reality:** Team-level commitments stick unless escalated; org-level blockers (budget, vendor, compliance) go to the **Soup** column and sponsor escalation — not pretend-resolved in the room.
- **Confidentiality:** **Chatham House** for discussion; **attributed** ownership map and commitment log (accountability requires names). Recording off by default.

## Key outcomes

- Shared migration dependency question and success signal (what "aligned" means for this migration)
- Visible ownership map: who owns each migration workstream, handoff points, and **gaps** (unowned work)
- Constraints sorted: team-owned vs org/external (Circles & Soup)
- Explicit cross-team requests and offers ([What I Need From You](https://www.liberatingstructures.com/what-i-need-from-you))
- Sequenced commitment sheet: ordered milestones, owners, target dates, and dependencies — each team lead has stated team commitment
- **"Not doing in this phase"** list alongside commitments
- First dependency checkpoint **booked on calendar** before the room clears

## Acceptance criteria

- **Done:** Every migration workstream on the board has a named owner (or explicit gap flagged for sponsor); top constraints classified team vs org; ≥8 sequenced items with owners and dates; three team leads each state one team commitment aloud; consent or documented objections on the sequence; checkpoint date on calendar.
- **Fallback if consent fails:** Publish ownership map + constraint list + open objections; sponsor holds 45-minute decision brief within 3 business days — do not force false alignment on sequencing.

---

## Agenda table

| Time | Block | Format (catalogue practice) | Output |
| --- | --- | --- | --- |
| 0:00–0:08 | Frame and decision rule | [Agreement and Certainty](https://www.liberatingstructures.com/agreement-and-certainty) + plain facilitation structure | Migration question, authority, consent rule |
| 0:08–0:13 | Check-in | [One Word](https://www.funretrospectives.com/one-word/) | Mood baseline |
| 0:13–0:28 | Shared dependency frame | [ToP Focused Conversation](https://www.top-network.org/use-focused-conversation) | Success signal, scope boundaries, no-brainstorm charter |
| 0:28–0:48 | Ownership and handoffs | [Responsibility Mapping](https://leanpub.com/visualcollaborationtools) | Workstream owners, handoffs, gaps |
| 0:48–0:53 | Break | plain facilitation structure | — |
| 0:53–1:08 | Constraints | [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29) | Team-owned vs org/external blockers |
| 1:08–1:23 | Cross-team requests | [What I Need From You](https://www.liberatingstructures.com/what-i-need-from-you) | Negotiable asks and offers |
| 1:23–1:55 | Sequence and commitments | [Min Specs](https://www.liberatingstructures.com/min-specs) + [Open Items List](https://retromat.org/en/?id=24) + [Gradients of Agreement](https://workshopweaver.com/facilitation-methods/gradients-of-agreement) | Sequenced plan, owners, dates, reservations |
| 1:55–2:00 | Close and checkpoint | plain facilitation structure | Checkpoint booked; comms to absent stakeholders |

---

## Per-block detail

### Block: Frame and decision rule (0:00–0:08)

**Why:** Fourteen people across three teams need explicit agreement that today is **dependency alignment**, not ideation — and that team leads (not the loudest IC) bind commitments.

**Format:** [Agreement and Certainty](https://www.liberatingstructures.com/agreement-and-certainty) + plain facilitation structure

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  DEPENDENCY QUESTION                                         │
│  "What must each team own, wait for, or deliver — and in     │
│   what order — for the platform migration to succeed?"       │
├──────────────────────────────────────────────────────────────┤
│  NOT TODAY: new platform designs, vendor debates, scope creep│
├──────────────────────────────────────────────────────────────┤
│  AUTHORITY                                                   │
│  • Team leads → commit for Platform / Data / Product         │
│  • Sponsor → org blockers (#escalate)                        │
│  • Decision rule → consent among leads on sequence           │
├──────────────────────────────────────────────────────────────┤
│  AGREEMENT / CERTAINTY (quick placement)                     │
│  Migration sequencing → consent arc                            │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Neutral facilitator (not a team lead with migration turf). State hybrid parity rules in 30 seconds: board is source of truth; online speakers first in plenaries. Ask three team leads to thumb-consent on decision rule. Redirect "we should use technology X instead" to parking lot — **not in scope**.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Scope creep into brainstorming | Point to charter; park idea on `#ideas-later` column |
| Team lead absent | Pause — designate interim committer or reschedule; do not proceed with IC-only commits |
| Remote AV failure | Remote facilitator switches to backup channel; extend frame 3 min max |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Welcome; state 2-hour arc and artifacts |
| 2 | 2 min | Place issue on Agreement/Certainty matrix; confirm consent arc |
| 3 | 2 min | Read authority reality; team leads confirm commit authority |
| 4 | 2 min | Write dependency question + `#not-today` on board; open parking lot |

**Block output:** Framed question, decision rule, and no-brainstorm charter on Miro.

---

### Block: Check-in (0:08–0:13)

**Why:** Migration work carries anxiety across teams; naming arrival mood reduces performative certainty before ownership mapping.

**Format:** [One Word](https://www.funretrospectives.com/one-word/)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────┐
│  ONE WORD — arriving for migration  │
│  [word] [word] [word] ...           │
│  (type on board — no commentary)    │
└─────────────────────────────────────┘
```

**Facilitator instruction:** **No full round-robin of 14 voices.** Popcorn or typed one-word on board (30 sec each max); online participants post first. Facilitator reads words once; do not interpret. Capture privately if multiple "blocked" or "skeptical" words appear.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 1 min | Explain prompt; all type/post one word |
| 2 | 3 min | Popcorn harvest to board; online first |
| 3 | 1 min | Read back once; transition to frame block |

**Block output:** Mood strip on board zone.

---

### Block: Shared dependency frame (0:13–0:28)

**Why:** Ownership mapping requires a shared picture of migration scope, success signal, and boundaries — before assigning names to boxes.

**Format:** [ToP Focused Conversation](https://www.top-network.org/use-focused-conversation)

**Board / frame (ASCII):**
```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  OBJECTIVE   │  REACTIONS   │   MEANING    │   DECISION   │
│  (facts)     │  (concerns)  │  (implications)│ (boundaries)│
├──────────────┼──────────────┼──────────────┼──────────────┤
│ Migration    │              │              │ In scope     │
│ scope facts  │              │              │ Out of scope │
│ Success = ?  │              │              │ Success sig  │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

**Facilitator instruction:** OBJECTIVE: sponsor or delegate reads **pre-circulated migration brief** (2 min max) — facts only. REACTIONS: silent sticky capture 2 min, then cluster — no debate. MEANING: team leads each one sentence on implication for their team. DECISION: group agrees **one success signal** sentence and **three out-of-scope items** for today. Challenge solution proposals → parking lot.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Debate on migration approach | Timebox 2 min; park; return to success signal |
| No success signal agreement | Sponsor proposes default; consent check among leads |
| Dominance by one team | Use written capture first; leads speak before ICs |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Sponsor reads objective facts from pre-read |
| 2 | 3 min | Silent REACTIONS capture on board |
| 3 | 3 min | Cluster reactions; name themes (no fix-it) |
| 4 | 4 min | MEANING — one sentence per team lead (3× ~1 min) |
| 5 | 3 min | DECISION — draft success signal + out-of-scope list |
| 6 | 2 min | Confirm on board; photo zone for scribe |

**Block output:** Success signal, in/out scope boundaries, reaction themes on board.

---

### Block: Ownership and handoffs (0:28–0:48)

**Why:** Core dependency work — make who-owns-what and handoff points visible before sequencing or constraint debate.

**Format:** [Responsibility Mapping](https://leanpub.com/visualcollaborationtools)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  MIGRATION WORKSTREAMS (rows) × TEAMS (Platform/Data/Product)│
│  Workstream          │ Owner │ Handoff to │ Gap? │ Notes     │
│  ────────────────────┼───────┼────────────┼──────┼────────── │
│  e.g. Data pipeline  │       │            │  ⚠  │           │
│  e.g. API cutover    │       │            │      │           │
│  e.g. Feature flags  │       │            │      │           │
│  (pre-seeded ~8–12 rows from pre-work)                       │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** **Team breakouts 12 min:** three groups (Platform / Data / Product tables in room; remotes join **their team's** video breakout — never "the online table"). Each group fills owner + handoff cells for their rows; flag gaps with ⚠. **Plenary merge 8 min:** team leads report gaps and conflicts only — not row-by-row readout. Scribe merges live on Miro. ICs speak only to clarify facts, not to renegotiate ownership.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Ownership fight | Capture both claims; mark `#unresolved`; sponsor owns escalation list |
| Remote breakout parity fails | Pause; remote facilitator pairs remotes 1:1 with in-room buddy on same team |
| Too many workstreams | Protect top 10 from pre-work; park rest on `#phase-2` |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Explain matrix; assign breakouts; remotes to team channels |
| 2 | 12 min | Team breakouts edit board zones (scribe monitors all three) |
| 3 | 3 min | Silent gallery read — all screens on board |
| 4 | 8 min | Team lead report-outs: gaps + conflicts only |
| 5 | 3 min | Merge matrix; star unresolved gaps |

**Block output:** Responsibility map with owners, handoffs, and flagged gaps.

---

### Block: Break (0:48–0:53)

**Why:** Mandatory cadence break before constraint and commitment work (~60 min mark).

**Format:** plain facilitation structure

**Facilitator instruction:** Hard stop. Remotes stay on video — no mute-and-multitask. Scribe snapshots ownership map.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Break; scribe exports ownership map PDF |

**Block output:** PDF snapshot of ownership map.

---

### Block: Constraints (0:53–1:08)

**Why:** Sequencing fails if team-owned constraints are confused with org blockers — Circles & Soup separates what teams can unblock vs what needs escalation.

**Format:** [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29)

**Board / frame (ASCII):**
```
        ┌─────────────┐
        │   CIRCLE    │  Team can unblock this sprint
        │  (team)     │
        ├─────────────┤
        │   SOUP      │  Org / vendor / compliance — #escalate
        └─────────────┘

  Constraint sticky → place in Circle or Soup + tag team
```

**Facilitator instruction:** Silent brainstorm 3 min — one constraint per sticky from each participant (typed on board). **No solutions.** Cluster duplicates. Team leads each move one Soup item to sponsor escalation list with one-line ask. Circle items stay with owning team on map.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Solutioning | "Capture the constraint only — requests block is next" |
| Soup overload | Dot-vote top 5 escalations only (board dots, not hands) |
| Blame between teams | Reframe to system constraint; facilitator names behavior norm |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Explain Circle vs Soup; silent capture |
| 2 | 4 min | Cluster stickies; classify Circle vs Soup |
| 3 | 4 min | Team leads name top Circle blocker per team |
| 4 | 3 min | Sponsor captures Soup `#escalate` list (read aloud for remotes) |
| 5 | 2 min | Link Circle items to ownership map rows |

**Block output:** Classified constraints; sponsor escalation list.

---

### Block: Cross-team requests (1:08–1:23)

**Why:** Dependencies become actionable when teams state explicit, negotiable needs — not assumed hallway agreements.

**Format:** [What I Need From You](https://www.liberatingstructures.com/what-i-need-from-you)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  FROM → TO │ NEED (specific, negotiable) │ BY WHEN │ STATUS │
│  Platform→Data │                          │         │        │
│  Data→Product  │                          │         │        │
│  ...         │                          │         │        │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Structured capture — **one primary need per team pair** (max 6 rows). Format: "From [team] to [team]: we need [X] by [date] so that [migration milestone]." Receiving team lead responds: **Yes / Negotiate / Escalate** — no lengthy debate. Online team leads speak first in each pair. Parking lot for `#nice-to-have`.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Non-negotiable demands | Mark Escalate; sponsor slots for post-session |
| More than 6 needs | Dot-vote critical path needs only (3 dots/person, board) |
| Silence from a team | Written 2 min first, then lead reads |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Explain request format and response options |
| 2 | 5 min | Silent write — each person drafts needs on stickies |
| 3 | 6 min | Facilitate pair table: need → response (leads only bind) |
| 4 | 2 min | Star requests that block sequencing block |

**Block output:** Request table with Yes/Negotiate/Escalate status.

---

### Block: Sequence and commitments (1:23–1:55)

**Why:** Convert maps and requests into an ordered plan with **Min Specs** (only essential rules) and owned milestones — team leads commit dates.

**Format:** [Min Specs](https://www.liberatingstructures.com/min-specs) + [Open Items List](https://retromat.org/en/?id=24) + [Gradients of Agreement](https://workshopweaver.com/facilitation-methods/gradients-of-agreement)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  MIN SPECS (must-haves for migration phase 1)                │
│  1. _____________  2. _____________  3. _____________       │
├──────────────────────────────────────────────────────────────┤
│  SEQUENCE (ordered)                                          │
│  # │ Milestone      │ Owner │ Team │ Target date │ Depends on│
│  1 │                │       │      │             │           │
│  2 │                │       │      │             │           │
├──────────────────────────────────────────────────────────────┤
│  NOT DOING THIS PHASE                                        │
│  • _____________  • _____________                            │
├──────────────────────────────────────────────────────────────┤
│  GRADIENTS (team leads on sequence): 5→1                     │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** **Min Specs first (5 min):** What are the 3–5 non-negotiable rules for this migration phase? Silent → merge. **Sequence build (15 min):** Start from pre-seeded critical path (pre-work). Team leads propose dates; scribe links `Depends on` from ownership map + requests. **Not doing (3 min):** Explicit deprioritizations — at least 3 items. **Consent (7 min):** Read sequence aloud; objections = "paramount concern" per Sociocracy — integrate or escalate. **Gradients:** Each team lead holds 1–5 on sequence; capture reservations at ≤3 with one-line note.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Behind schedule | Cut Min Specs to top 3; sequence top 8 milestones only |
| Consent blocked | Document objection; sponsor decision brief within 3 days |
| Date fantasy | Ask "what must be true?" — mark `#at-risk` not fake certainty |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Min Specs — silent write, merge to 3–5 rules |
| 2 | 10 min | Build ordered milestone table from critical path |
| 3 | 5 min | Team leads assign dates; link dependencies |
| 4 | 3 min | Populate NOT DOING list (min 3 items) |
| 5 | 5 min | Consent check; integrate valid objections |
| 6 | 4 min | Gradients of Agreement — team leads only; capture reservations |
| 7 | 3 min | Open Items List — owner + due for each `#at-risk` item |

**Block output:** Min Specs, sequenced Open Items List, NOT DOING list, gradient tally, reservation notes.

---

### Block: Close and checkpoint (1:55–2:00)

**Why:** Lock follow-through before people leave — checkpoint on calendar, comms path for absent stakeholders, sponsor sign-off step named.

**Format:** plain facilitation structure

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  BEFORE YOU GO                                               │
│  ☐ Checkpoint booked: [date/time] — dependency review        │
│  ☐ Sponsor sign-off: within 48h on commitment sheet          │
│  ☐ Summary to: [absent stakeholders channel]                 │
│  ☐ Each owner confirms authority + capacity (thumb)          │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Scribe shares screen on final board. Book **30-minute dependency checkpoint** (recommend: 10 business days out) while everyone watches calendar invite send. Each action owner thumbs: "I have authority and capacity for my items." Name sponsor sign-off deadline. Thank room + remotes equally.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Read back: Min Specs + top 5 milestones + NOT DOING |
| 2 | 2 min | Send calendar invite live; owner authority thumb check |
| 3 | 1 min | Close — where summary lands today |

**Block output:** Calendar invite sent; close checklist photographed.

---

## Cut list

If running long:

- **Cut:** Shorten check-in to typed-only (no popcorn); limit Responsibility Mapping to top 8 pre-seeded workstreams; reduce What I Need From You to **three** critical-path pairs only; cap Min Specs at 3 rules.
- **Protect:** Frame + no-brainstorm charter, ownership map with gaps flagged, Soup escalations to sponsor, sequenced Open Items List with team lead dates, Gradients/consent on sequence, checkpoint booked before adjourn.

---

## Preparation

**Space / tools:** Room with three tables (Platform / Data / Product) plus central screen projecting Miro; **one laptop per participant** (1 person = 1 screen); video conferencing with team breakout rooms; timers; scribe admin on Miro.

**Pre-read / pre-work (send 72h ahead):**
- One-page migration scope brief (facts, current phase, known dates)
- Pre-seeded Miro: 10–12 workstream rows for Responsibility Mapping
- Ask each team lead to bring: (1) top 3 dependencies on other teams, (2) top 3 constraints, (3) earliest/latest defensible dates for their team's migration slice
- Ask remotes to confirm headset and second screen

**Facilitator role:**
- **Lead facilitator:** Neutral; runs arc; not a migration workstream owner
- **Remote facilitator (required):** Monitors online participants, breakouts, chat, AV; authority to pause for parity
- **Scribe:** Miro hygiene, live merge during breakouts, export PDFs
- **Sponsor:** Present for Soup escalations and sign-off commitment

**Parking lot:** `#parking` column on Miro — ideas, scope debates, phase-2 work; reviewed at checkpoint, not in session.

---

## Hybrid / online parity

**Digital board:** Miro — **single source of truth**. Projected in room; all in-room participants on own laptops editing the same board. Flipchart only if photographed into Miro within 3 minutes.

**Online group:** Four remote participants join **their team's breakout** (Platform/Data/Product video rooms with Miro deep link) — **never** isolated as a fourth "online-only table" except during full plenary.

**Parity rules:**
- If it's not on the board, it didn't happen
- **Online speakers first** in plenaries, team lead report-outs, and consent rounds
- All dot-voting and gradients **on board** — no show of hands in room
- Remote facilitator reads in-room stickies created offline near mic
- 30-second silent gallery read on board before each merge discussion
- Chat for clarifications and "+1" only during report-outs — no side decisions in Slack

**Co-facilitation:**
- **Remote facilitator** monitors: chat, raised hands, breakout assignment, connection drops; can call pause
- Lead facilitator focuses on arc, timebox, and sponsor escalations
- Scribe verbalizes every new in-room sticky within 10 seconds for remotes

**Hybrid operations checklist (REQUIRED):**
- [ ] AV rehearsal completed 24h prior; mic/camera/room-audio layout tested with all 4 remotes
- [ ] Crosstalk handling plan: one speaker at a time; room mutes when remote speaks
- [ ] Backup channel documented (phone bridge + Miro link in calendar invite)
- [ ] Remote access checks completed 15 min before start (breakout links, Miro edit rights)
- [ ] Breakout architecture parity — remotes in **team** breakouts with in-room teammates, not solo online table
- [ ] Strongest parity move: **1 person = 1 screen** — even in-room participants on laptops, not paper-only
- [ ] Dedicated remote facilitator assigned and briefed on run-of-show

---

## Session artifacts

| Artifact | Purpose | Owner | Location | Confidentiality |
| --- | --- | --- | --- | --- |
| Live Miro board | Full capture: map, constraints, requests, sequence | Scribe | Miro workspace | Internal; Chatham House discussion, **attributed** commitments |
| Ownership / handoff map | Who owns what; gaps | Scribe | Board export PDF | Internal; attributed |
| Constraint sheet (Circle + Soup) | Blockers + escalations | Scribe | Board `#escalate` zone | Internal; Soup items sponsor-only until resolved |
| Cross-team request table | Negotiated needs | Scribe | Board | Internal; attributed |
| Min Specs + sequence plan | Ordered commitments | Scribe | Wiki / program tracker | Internal; attributed owners |
| NOT DOING list | Explicit deprioritizations | Facilitator | Same wiki page | Internal |
| Decision / commitment log | Sequence, consent, criteria, dissent | Lead facilitator | Wiki + program doc | Internal; reservations attributed at gradient ≤3 |
| Open Items List | Milestones with owner, date, dependency | Scribe | Jira/Linear + wiki link | Internal |
| Session summary (1–2 pages) | Async alignment | Scribe | Team channel same day | Internal; no recording unless consented |

Recording: **off by default**; if required, explicit opt-in at open with note in artifact table.

**Follow-through governance:**
- Decision log includes consent outcome, Min Specs, and **Gradients of Agreement** reservations at levels 1–3
- **NOT DOING** list published alongside commitments
- **Sponsor sign-off** on commitment sheet within 48h (named in close block)
- Communication plan: summary to absent stakeholders (platform steering, dependent teams) within same day
- Verify each owner has **authority and resources** — thumb check at close, sponsor confirms within 48h
- **First checkpoint booked before session ends** — 30-min dependency review, ~10 business days out (date on calendar invite, not TBD)

---

## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish summary + ownership map + sequence + NOT DOING | Scribe | Same business day | Tag team leads and action owners |
| Sponsor sign-off on commitment sheet | Sponsor | Within 48h | Confirm or revise dates; resolve Soup items |
| Create/update tracker items for each milestone | Action owners | Within 24h | Link to Miro export and dependency rows |
| Verify owner authority and capacity | Sponsor + team leads | Before work starts | Reassign or escalate if blocked |
| Resolve Soup `#escalate` items | Sponsor | Within 5 business days | Update constraint sheet; comms if dates shift |
| Dependency checkpoint (pre-booked) | Facilitator + team leads | ~10 business days post-session | Resize sequence; close gaps; update NOT DOING |
| Comms to absent stakeholders | Program lead | Within 48h of sign-off | Share one-pager; offer 15-min briefing |
| Revisit migration alignment | Team leads | Next sprint planning | Pull Open Items into team backlogs |
