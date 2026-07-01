# Facilitation plan template

Output contract for Phase 3. Fill every REQUIRED section. Scale depth to session size using the scaling table at the end.

## REQUIRED document structure

Produce the plan in this order:

1. Session goal and key outcomes
2. Agenda table
3. Per-block detail (one subsection per block)
4. Preparation
5. Hybrid / online parity (REQUIRED when mode is hybrid or online)
6. Session artifacts (REQUIRED)
7. Post-session process (REQUIRED)

Write plan prose in the user's request language. Keep practice names and source links in English from `catalogue.md`.

---

## 1. Session goal and key outcomes

```markdown
## Goal
[One sentence: what this session must achieve]

## Key outcomes
- [Observable outcome 1]
- [Observable outcome 2]
- [Artifact or decision the group leaves with]
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
- Times must sum to the stated time budget.
- Every Format cell names a catalogue practice with its source link.
- Last block must produce actions, decisions, or agreed next steps.

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

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | X min | ... |
| 2 | X min | ... |

**Block output:** [What is captured and where]
```

Scale per-block detail:
- **≤30 min sessions:** Why + Format + 3-5 bullet timed flow; skip large ASCII unless essential.
- **45-90 min:** Include ASCII frame for main work blocks.
- **2+ hours / multi-day:** Full ASCII, facilitator script lines, parking-lot handling.

---

## 4. Preparation

```markdown
## Preparation

**Space / tools:** [Room layout, board tool, timer, materials]

**Pre-read / pre-work:** [What to send, when, to whom]

**Facilitator role:** [Lead, co-facilitator, scribe, online advocate]

**Parking lot:** [Where off-topic items go and when they are revisited]
```

---

## 5. Hybrid / online parity

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
```

For online-only sessions, adapt: skip room logistics; specify tool features (breakouts, reactions, anonymous mode).

---

## 6. Session artifacts (REQUIRED)

```markdown
## Session artifacts

| Artifact | Purpose | Owner | Location |
| --- | --- | --- | --- |
| Live board | Capture during session | Scribe | [tool link] |
| Action log | 2-3 improvements with owners | Facilitator | [wiki/Jira/channel] |
| Summary | Decisions and themes | Scribe | [same day post] |
```

---

## 7. Post-session process (REQUIRED)

```markdown
## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish summary + action table | Scribe | Same day | Tag owners |
| Create tasks for each action | Action owners | Within 24h | Link to retro doc |
| Review progress | Facilitator / lead | [standup / 5 business days] | Resize or drop stuck actions |
| Revisit outcomes | Team | Next retro / [date] | Close loop on experiments |
```

Do not end at the agenda. Every plan needs owners, timeline, and an explicit next checkpoint.

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

| Session size | Agenda rows | Per-block detail | Hybrid section | Artifacts / post-process |
| --- | --- | --- | --- | --- |
| ≤30 min | 2-4 | Compact | If hybrid: 4-6 bullets | Brief table, 3-4 follow-up rows |
| 45-90 min | 4-6 | Full for main blocks | Full section if hybrid | Full tables |
| 2-4 hours | 6-10 | Full all blocks | Full section | Full + validation owners |
| 1-2 days | Day arcs | Full + co-fac roles | Mandatory for hybrid | Full + exec comms note |
