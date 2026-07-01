# Facilitation plan template

Output contract for Phase 3. Fill every REQUIRED section. Scale depth to session size using the scaling table at the end.

## REQUIRED document structure

Phase 3 output is a markdown **file** at the path resolved in `SKILL.md` (Phase 3). The file is the source of truth for later iterations; write all sections below into that file.

Produce the plan in this order:

1. Session goal and key outcomes (incl. decision authority, acceptance criteria, confidentiality when relevant)
2. Agenda table
3. Per-block detail (one subsection per block)
4. **Cut list** (REQUIRED — if running long, cut X / protect Y)
5. Preparation
6. Hybrid / online parity (REQUIRED when mode is hybrid or online)
7. Session artifacts (REQUIRED — incl. confidentiality/recording from intake)
8. Post-session process (REQUIRED)

Write plan prose in the user's request language. Keep practice names and source links in English from `catalogue.md`.

---

## 1. Session goal and key outcomes

```markdown
## Goal
[One sentence: what this session must achieve]

## Decision authority (when relevant)
[Sponsor/decision owner; decision rule; will this stick or can it be overridden? If input-gathering only, say so.]

## Key outcomes
- [Observable outcome 1]
- [Observable outcome 2]
- [Artifact or decision the group leaves with]

## Acceptance criteria
[What "done" looks like; fallback if no agreement emerges]
```

---

## 2. Agenda table

```markdown
| Time | Block | Format (catalogue practice) | Output |
| --- | --- | --- | --- |
| 0:00-0:05 | Check-in | [One Word](link) | Mood baseline |
| ... | ... | ... | ... |
```

Rules:
- Times use clock minutes (`h:mm`), not decimals — no base-60 overflow (e.g. no `0:55-0:68`).
- Times must sum to the stated time budget.
- Framing/admin/transition/break/decision-rule blocks may be labeled "plain facilitation structure" without a catalogue link.
- Branded practice Format cells name a catalogue practice with its source link.
- Mandatory break every ~60-75 min in-person, ~45-60 min online.
- For **async-first** arcs: mark each agenda row `[async]` or `[live]`; async blocks run before the live convergence session.
- Last block must produce actions, decisions, or agreed next steps (except conflict/repair and tender-listening arcs — relationship agreement or acknowledgment, not action list).
- Every converge/vote block sets decision/prioritization criteria **before** voting.

---

## 3. Per-block detail

Repeat for each agenda row:

```markdown
### Block: [Name] ([start-end])

**Why:** [Purpose in one or two sentences]

**Format:** [Practice name](catalogue source link)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────┐
│  [Column A]  │  [Column B]  │ ...   │
├──────────────┼──────────────┼───────┤
│              │              │       │
└─────────────────────────────────────┘
```

**Facilitator instruction:** [Tone, ground rules, what to say, what to avoid]

**Facilitator contingencies (include for risky blocks — conflict, trauma, large group, tight timing):**
| If… | Then… |
| --- | --- |
| Silence | [e.g. extend think time, pair share, written capture first] |
| Dominance | [e.g. rounds, popcorn, "step up/step back"] |
| Derailment | [e.g. parking lot, timebox, "let's return to…"] |
| Emotional escalation | [e.g. pause, break, downshift arc; signpost support] |
| No volunteers | [e.g. written first, pairs, opt-in rounds] |
| Low energy | [e.g. stand/stretch, shorten block, cut optional step] |
| Behind schedule | [e.g. cut list item X; protect safety/decision/close] |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | X min | ... |
| 2 | X min | ... |

Step times must sum to **≤ ~85%** of the block duration; reserve ~2-3 min for instructions and transitions.

**Block output:** [What is captured and where]
```

Scale per-block detail:
- **≤30 min sessions:** Why + Format + 3-5 bullet timed flow; skip large ASCII unless essential.
- **45-90 min:** Include ASCII frame for main work blocks.
- **2+ hours / multi-day:** Full ASCII, facilitator script lines, parking-lot handling.

---

## 4. Cut list (REQUIRED)

```markdown
## Cut list

If running long:
- **Cut:** [blocks or steps to shorten or drop]
- **Protect:** [non-negotiable blocks — usually safety, decision, and close]
```

Every plan needs an explicit contingency. Facilitators should not invent cuts in the room.

---

## 5. Preparation

```markdown
## Preparation

**Space / tools:** [Room layout, board tool, timer, materials]

**Pre-read / pre-work:** [What to send, when, to whom]

**Facilitator role:** [Lead, co-facilitator, scribe, online advocate]

**Parking lot:** [Where off-topic items go and when they are revisited]
```

---

## 6. Hybrid / online parity

REQUIRED when any participant is remote.

```markdown
## Hybrid / online parity

**Digital board:** [Single source of truth — Miro/FigJam/etc.]

**Online group:** [How remote participants join breakouts, post stickies, vote]

**Parity rules:**
- [e.g. "If it's not on the board, it didn't happen"]
- [e.g. Online speakers first in round-robins]
- [e.g. Individual scoring in board, not show of hands in room]

**Co-facilitation:** [Who monitors chat, hands, and reads room-only comments aloud]

**Hybrid operations checklist (REQUIRED for hybrid — not optional):**
- [ ] AV rehearsal completed; mic/camera/room-audio layout tested
- [ ] Crosstalk handling plan (one speaker at a time; mute when not speaking)
- [ ] Backup channel and connectivity-dropout contingency documented
- [ ] Remote access checks completed before session start
- [ ] Breakout architecture parity — in-room tables vs remote breakout rooms are not equivalent; avoid "one online table" pattern that isolates remotes
- [ ] Strongest parity move stated: **1 person = 1 screen**, even in the room
- [ ] Dedicated remote facilitator assigned (required for any hybrid session, not only multi-day)
```

For online-only sessions, adapt: skip room logistics; specify tool features (breakouts, reactions, anonymous mode).

---

## 7. Session artifacts (REQUIRED)

```markdown
## Session artifacts

| Artifact | Purpose | Owner | Location | Confidentiality |
| --- | --- | --- | --- | --- |
| Live board | Capture during session | Scribe | [tool link] | [Chatham House / attributed / internal only] |
| Action log | Improvements with owners | Facilitator | [wiki/Jira/channel] | [who sees this] |
| Decision log / record | Decisions made, criteria used, dissent captured | Scribe | [same doc] | [who sees this] |
| "Not doing" list | Explicit deprioritizations | Facilitator | [board section] | [who sees this] |
| Summary | Decisions, themes, reservations | Scribe | [same day post] | [recording? who receives] |
```

Carry confidentiality/recording choices from intake into every artifacts row.

**Follow-through governance (REQUIRED when session produces decisions or commitments):**
- Decision log with criteria and `Gradients of Agreement` reservations/dissent captured
- Explicit **"not doing"** list alongside commitments
- Sponsor sign-off or confirmation step named
- Communication plan for absent stakeholders
- Verify action owners have **authority and resources** — not just names
- **First checkpoint already booked** before the session ends (date on calendar, not "TBD")

---

## 8. Post-session process (REQUIRED)

```markdown
## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish summary + action table + decision log | Scribe | Same day | Tag owners; send to absent stakeholders |
| Sponsor sign-off / confirmation | Sponsor | Within 48h | Confirm or revise commitments |
| Create tasks for each action | Action owners | Within 24h | Link to session doc |
| Verify owner authority/resources | Sponsor / lead | Before tasks start | Reassign or escalate if blocked |
| Review progress | Facilitator / lead | [checkpoint date — booked before session end] | Resize or drop stuck actions |
| Revisit outcomes | Team | Next retro / [date] | Close loop on experiments |
```

Do not end at the agenda. Every plan needs owners, timeline, governance items above, and an explicit next checkpoint **already on the calendar**.

---

## Example: compact 30-minute alignment (scaled)

```markdown
## Goal
Align six leaders on top 3 Q3 priorities in 30 minutes.

## Key outcomes
- Three ranked priorities with single owners
- Explicit "not in Q3" list
- One success signal per priority

| Time | Block | Format | Output |
| --- | --- | --- | --- |
| 0:00-0:03 | Frame | [ToP Focused Conversation](link) | Shared decision question |
| 0:03-0:10 | Options | Silent capture + [Affinity Clustering](link) | Candidate list |
| 0:10-0:15 | Vote | [Dot Vote](link) | Top 3 themes |
| 0:15-0:27 | Trade-offs | [What, So What, Now What](link) | Locked priorities + cuts |
| 0:27-0:30 | Commit | [Open Items List](link) | Owners and signals |

### Block: Trade-offs (0:15-0:27)
**Why:** Force explicit deprioritization, not just a wish list.
**Format:** [What, So What, Now What](link)
**Timed flow:** Facts 4 min → meaning 4 min → now what 4 min.
**Block output:** Board C filled with ranked priorities.

## Session artifacts
- Photo of board + 5-bullet summary memo (facilitator, same day)

## Post-session process
- DRIs add first milestone within 48h
- 15-min mid-Q3 check-in on calendar
```

---

## Scaling table

| Session size | Agenda rows | Per-block detail | Breaks | Cut list | Hybrid section | Artifacts / post-process |
| --- | --- | --- | --- | --- | --- | --- |
| ≤30 min | 2-4 | Compact | If ≥45 min online | Required | If hybrid: 4-6 bullets | Brief table, 3-4 follow-up rows |
| 45-90 min | 4-6 | Full for main blocks | If ≥60 min | Required | Full section if hybrid | Full tables |
| 2-4 hours | 6-10 | Full all blocks | Mandatory | Required | Full section | Full + validation owners |
| 1-2 days | Day arcs | Full + co-fac roles | Mandatory | Required | Mandatory for hybrid | Full + exec comms note |
