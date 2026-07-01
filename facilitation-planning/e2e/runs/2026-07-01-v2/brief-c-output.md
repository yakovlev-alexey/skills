# Product Discovery Kickoff — Full Facilitation Plan

**Session arc:** `discovery-opportunities` (primary), with `discovery-kickoff` connect elements for a new cross-functional team  
**Scale:** 10 people, in-person, 3 hours (180 min)  
**Participation structure:** Pairs/triads + delegate report-outs — no full plenary round-robins (9–15 headcount rule)

---

## Goal

Launch a new cross-functional product team with a shared, evidence-informed picture of user problems and a prioritized opportunity backlog the group can act on immediately after the workshop.

## Decision authority

| Field | Value |
| --- | --- |
| **Sponsor / decision owner** | Product lead (or designated initiative owner) — *assumed; confirm before sending invites* |
| **Decision rule** | **Consult + consent for backlog ranking:** the group proposes and ranks opportunities; the product lead ratifies the top 5–8 within 48 hours and may reorder based on strategy constraints they name transparently |
| **Authority reality** | This is **input-gathering with a working backlog**, not a final roadmap commitment. Budget, staffing, and ship dates are out of scope unless the sponsor is present and explicitly grants authority |
| **Facilitator neutrality** | Facilitator should be neutral (not the product lead). Product lead participates as a voice, not as vote-breaker during prioritization |

## Key outcomes

- Shared purpose and success signal for the discovery effort (not solutions yet)
- Named user segments, journey stages, and pain points visible on a common map
- Clustered opportunity themes reframed as How Might We statements
- Prioritized opportunity backlog (top 5–8 items) with importance/difficulty rationale
- Testable design hypotheses and research questions for the top 3 opportunities
- Owned next steps with dates for validation work and the next team checkpoint

## Acceptance criteria

**Done looks like:**
- Master user journey map with top pains dot-voted and evidence-tagged
- Ranked opportunity backlog (5–8 items) on an Importance/Difficulty matrix, numbered 1–8
- Three design hypothesis cards with ≥2 research questions each
- Open Items List with named owners and dates; next checkpoint on the calendar before the room clears

**Fallback if no agreement on ranking:**
- Document dissenting placements on the matrix; product lead selects top 5 by end of next business day using stated criteria, with written rationale shared to the team channel

**Confidentiality / recording:** Chatham House for workshop discussion (shareable themes, not attributed quotes). No recording unless all 10 consent in writing. Artifacts are internal-only unless sponsor approves wider distribution.

---

## Agenda table

| Time | Block | Format (catalogue practice) | Output |
| --- | --- | --- | --- |
| 0:00–0:05 | Arrival check-in | [Check-in](https://toolbox.hyperisland.com/check-in-questions) | Everyone has spoken; energy baseline |
| 0:05–0:17 | Hopes and fears | [Hopes and Fears](https://www.teamretro.com/retro-template/hopes-and-fears-retrospective/) | Shared expectations and concerns on wall |
| 0:17–0:32 | Purpose alignment | [9 Whys](https://www.liberatingstructures.com/nine-whys) | One-sentence purpose + success signal |
| 0:32–0:42 | Break | plain facilitation structure | — |
| 0:42–1:02 | Context harvest | [Lightning Talks](https://designsprintkit.withgoogle.com/methodology/phase1-understand/lightning-talks) | Shared facts, assumptions, and open questions |
| 1:02–1:37 | User journey map | [User Journey Mapping](https://designsprintkit.withgoogle.com/methodology/phase1-understand/user-journey-mapping) | Journey with pain points and evidence tags |
| 1:37–1:47 | Break | plain facilitation structure | — |
| 1:47–2:12 | Opportunity clustering | [HMW Sharing and Affinity Mapping](https://designsprintkit.withgoogle.com/methodology/phase1-understand/method-1) | Themed HMW clusters from pain points |
| 2:12–2:32 | Prioritize backlog | [Importance/Difficulty Matrix](https://www.luma-institute.com/importance-difficulty-matrix/) | Ranked opportunity backlog (top 5–8) |
| 2:32–2:50 | Validation framing | [Design hypothesis](https://guides.18f.org/methods/decide/design-hypothesis/) + [Capturing research questions](https://www.gov.uk/service-manual/user-research/capturing-research-questions) | Hypotheses + research questions for top 3 |
| 2:50–3:00 | Commit and close | [Open Items List](https://retromat.org/en/?id=24) | Owned actions, dates, next checkpoint |

---

## Per-block detail

### Block: Arrival check-in (0:00–0:05)

**Why:** A new cross-functional group needs a low-stakes first voice in the room before problem work. This sets participation norms and surfaces who is present.

**Format:** [Check-in](https://toolbox.hyperisland.com/check-in-questions)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────────────────────────────┐
│  CHECK-IN: "Name · Role · One word for how you arrived"     │
│  (Facilitator models first; go around the circle)           │
└─────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Keep it brisk. No discussion or responses to answers. State ground rules: one conversation at a time, build on each other's knowledge, defer solution debates until after prioritization, parking lot for off-topic items (flip chart on side wall). Avoid letting the product lead or most senior person go first every time — start with someone from research or support if possible.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 1 min | Welcome, state goal and hard stop (3:00). Point to parking lot. |
| 2 | 3 min | Model your own check-in; complete round-robin (10 × ~15 sec). |
| 3 | 1 min | Preview next block: "We name what we're optimistic and anxious about." |

**Block output:** Verbal only; facilitator notes mood/energy in running doc.

---

### Block: Hopes and fears (0:05–0:17)

**Why:** New teams often carry unspoken expectations and risk concerns. Surfacing them early prevents hidden agendas from derailing discovery later.

**Format:** [Hopes and Fears](https://www.teamretro.com/retro-template/hopes-and-fears-retrospective/)

**Board / frame (ASCII):**
```
┌──────────────────────────┬──────────────────────────┐
│         HOPES            │         FEARS            │
│  (what we want from      │  (what could go wrong /  │
│   this initiative)       │   what worries us)       │
├──────────────────────────┼──────────────────────────┤
│                          │                          │
└──────────────────────────┴──────────────────────────┘
        ↓ silent write → post → cluster → name themes
```

**Facilitator instruction:** Emphasize psychological safety: fears are about the work and system, not personal attacks. Do not debate or reassure each fear away — acknowledge and capture. If someone dominates, enforce silent writing first, then "next sticky up."

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Explain columns; 90 sec silent write (1 hope + 1 fear each). |
| 2 | 3 min | Post stickies; cluster similar items quickly. |
| 3 | 3 min | Name 2–3 hope themes and 2–3 fear themes; ask "Anything missing?" |
| 4 | 2 min | Dot one fear per person (3 dots total): "Which fear, if unaddressed, hurts discovery most?" |
| 5 | 2 min | Note top fear theme; promise it informs success criteria in 9 Whys. |

**Block output:** Photo of hopes/fears wall; top fear theme captured on purpose board header.

---

### Block: Purpose alignment (0:17–0:32)

**Why:** Discovery without a shared "why" produces scattered opportunities. 9 Whys connects daily work to the change the team exists to create.

**Format:** [9 Whys](https://www.liberatingstructures.com/nine-whys)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────────────────────────────┐
│  START: "We are doing product discovery for [product]."   │
│         ↓ Why does that matter? (pairs → share)             │
│         ↓ Why does THAT matter? (repeat 3 rounds)           │
│  END:   Purpose statement (one sentence)                    │
│         Success signal (how we'll know discovery worked)    │
└─────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Form 5 pairs (10 people). Each round: 1 min pair talk, 1 min harvest best "why" on the board. Stop when answers feel human and meaningful, not corporate. Tie success signal back to top fear from previous block. Do not let the group jump to features or roadmap.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Write starting statement; form pairs; explain flow. |
| 2 | 9 min | Run 3 rounds: pair → post best why → read cluster → next why. |
| 3 | 2 min | Draft purpose sentence aloud; group edits until "good enough for today." |
| 4 | 2 min | Define success signal tied to top fear; read back; photo the board. |

**Block output:** Purpose statement and success signal on header board (stays visible all session).

---

### Block: Break (0:32–0:42)

**Why:** Cognitive reset before context-heavy work (~70 min mark — mandatory in-person break cadence).

**Facilitator instruction:** Keep room setup intact. Scribe photographs boards so far. Remind return time on wall clock.

---

### Block: Context harvest (0:42–1:02)

**Why:** Cross-functional members hold different slices of user knowledge. Lightning talks create a common factual baseline before journey mapping.

**Format:** [Lightning Talks](https://designsprintkit.withgoogle.com/methodology/phase1-understand/lightning-talks)

**Board / frame (ASCII):**
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  FACTS      │  ASSUMPTIONS│  QUESTIONS  │  EVIDENCE   │
│  (we know)  │  (we think) │  (we need   │  (source:   │
│             │             │   to learn) │   link/data)│
└─────────────┴─────────────┴─────────────┴─────────────┘
   Each talk → scribe captures bullets in the right column
```

**Facilitator instruction:** Pre-assign 4 speakers (PM, design/research, engineering, ops/support) in pre-work. Strict 3-minute timebox per talk + 2 min clarifying Q&A. Q&A is clarifying only — no solutioning. Redirect solution pitches to parking lot.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Frame four quadrants; introduce speakers and rules. |
| 2 | 20 min | 4 × (3 min talk + 2 min clarifying Q&A); scribe posts bullets. |
| 3 | 3 min | "What surprised you?" — 2–3 popcorn shares, one sentence each. |
| 4 | 2 min | Circle top 3 open questions; assign journey map groups (2 × 5, mixed roles). |
| 5 | 3 min | Transition: hand out journey templates; state personas per group. |

**Block output:** Context board photo; list of top 3 open questions on journey template.

---

### Block: User journey map (1:02–1:37)

**Why:** Shared understanding of user problems requires a common picture of where pain happens across the journey, not isolated anecdotes.

**Format:** [User Journey Mapping](https://designsprintkit.withgoogle.com/methodology/phase1-understand/user-journey-mapping)

**Board / frame (ASCII):**
```
  PERSONA: _______________     SCOPE: _______________

  STAGES →  │ Discover │ Consider │ Use      │ Support │ Leave │
  ──────────┼──────────┼──────────┼──────────┼─────────┼───────┤
  Actions   │          │          │          │         │       │
  Thoughts  │          │          │          │         │       │
  Pain 😞   │  sticky  │  sticky  │  sticky  │ sticky  │ sticky│
  Evidence  │  tag:    │  tag:    │  tag:    │  tag:   │  tag: │
            │  fact /  │          │          │         │       │
            │  assume  │          │          │         │       │
  ──────────┴──────────┴──────────┴──────────┴─────────┴───────┘
```

**Facilitator instruction:** Split into 2 groups of 5 (mixed roles). Group A = primary user persona; Group B = secondary/admin/support user (assign in pre-work if known). Pain stickies must include evidence tag (fact, assumption, or unknown). Plenary: 3 min delegate walkthrough per group; facilitator merges duplicate pains on master wall. Dot vote on board — not show of hands.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Explain template; assign groups, persona, scope; distribute stickies. |
| 2 | 18 min | Groups map silently then discuss; float for clarifying questions only. |
| 3 | 5 min | Group A delegate presents; scribe transfers to master wall. |
| 4 | 5 min | Group B delegate presents; merge overlaps on master wall. |
| 5 | 4 min | Dot vote: 3 dots per person on most severe/frequent pains. |
| 6 | 3 min | Circle top 8–10 dotted pains; confirm "Did we miss a critical pain?" |

**Block output:** Master journey map with top pains highlighted; photo + digital copy same day.

---

### Block: Break (1:37–1:47)

**Why:** Reset before convergent ideation and prioritization.

**Facilitator instruction:** Leave master journey visible. Scribe pre-labels HMW area with top pain clusters.

---

### Block: Opportunity clustering (1:47–2:12)

**Why:** Pain points must become actionable opportunity areas before prioritization. HMW reframing plus affinity mapping turns complaints into backlog-ready themes.

**Format:** [HMW Sharing and Affinity Mapping](https://designsprintkit.withgoogle.com/methodology/phase1-understand/method-1)

**Board / frame (ASCII):**
```
  TOP PAINS (from journey)          HMW STATEMENTS
  ┌── pain A ──┐                    ┌─────────────────────────────┐
  ├── pain B ──┤  → reframe as →    │ HMW help [user] [outcome]   │
  └── pain C ──┘    HMW...          │ without [constraint]?       │
                                    └─────────────────────────────┘
                                              ↓
                         AFFINITY CLUSTERS (theme names)
                    ┌──────────┬──────────┬──────────┬──────────┐
                    │ Theme 1  │ Theme 2  │ Theme 3  │ Theme 4  │
                    └──────────┴──────────┴──────────┴──────────┘
```

**Facilitator instruction:** Work plenary — whole group benefits from hearing reframes. One HMW per top pain minimum; encourage multiple HMWs per pain. Theme names describe user outcome, not feature names. Kill solution-shaped HMWs ("HMW build a dashboard") — rewrite as user outcome.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Explain HMW format with one example rewrite; silent write (2 HMWs per person). |
| 2 | 7 min | Post all HMWs; affinity cluster; name themes. |
| 3 | 5 min | Each theme: one-sentence opportunity statement (user + need + context). |
| 4 | 5 min | Merge thin themes; aim for 5–8 opportunity cards on the wall. |
| 5 | 5 min | Read each opportunity card; check understanding; photo. |

**Block output:** 5–8 named opportunity theme cards with supporting HMWs; photo.

---

### Block: Prioritize backlog (2:12–2:32)

**Why:** The workshop must end with an ordered backlog, not an unprioritized brainstorm. Importance/difficulty makes trade-offs visible across functions.

**Format:** [Importance/Difficulty Matrix](https://www.luma-institute.com/importance-difficulty-matrix/)

**Board / frame (ASCII):**
```
        HIGH IMPORTANCE
              │
    Quick     │    Strategic
    wins      │    bets
    ──────────┼──────────────  HIGH DIFFICULTY
    Deprior-  │    Revisit
    itize     │    later
              │
        LOW IMPORTANCE

  Place each OPPORTUNITY CARD as a dot (group consensus per card)
  TOP BACKLOG = Quick wins + Strategic bets (numbered 1–8)
```

**Facilitator instruction:** **Criteria before placement (required):** Importance = user/business impact if solved; Difficulty = effort, risk, dependencies (not "we don't like it"). Agree criteria aloud before plotting. Use one sticky dot per opportunity; 60–90 sec per contested card — facilitator calls "place tentatively, note dissent." Number top-right and top-left items 1–8. Items in "Revisit later" go to appendix, not deleted.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Define importance and difficulty axes; group confirms criteria. |
| 2 | 12 min | Place each opportunity card; facilitate brief debate on borderline items. |
| 3 | 3 min | Number top-right and top-left items 1–8 = prioritized backlog. |
| 4 | 2 min | Read ranked list; ask "Any fatal omission?" |

**Block output:** Prioritized opportunity backlog (ranked 1–8) on matrix photo; top 3 flagged for validation block.

---

### Block: Validation framing (2:32–2:50)

**Why:** Discovery fails when prioritized opportunities lack testable next steps. Design hypotheses and research questions turn backlog items into learnable bets.

**Format:** [Design hypothesis](https://guides.18f.org/methods/decide/design-hypothesis/) + [Capturing research questions](https://www.gov.uk/service-manual/user-research/capturing-research-questions)

**Board / frame (ASCII):**
```
  OPPORTUNITY #1                    OPPORTUNITY #2              #3
  ┌─────────────────────────┐        ┌─────────────────┐        ...
  │ We believe [change]     │        │                 │
  │ for [user] will [outcome]│       │                 │
  │ We’ll know when [signal]│       │                 │
  ├─────────────────────────┤        └─────────────────┘
  │ Research questions:     │
  │ 1.                        │
  │ 2.                        │
  │ Riskiest assumption: ___  │
  └─────────────────────────┘
```

**Facilitator instruction:** Split into 3 triads (one top opportunity each; rotate scribe, spokesperson, skeptic). Hypothesis must be falsifiable. ≥2 research questions per opportunity; one must target the riskiest assumption. No study design detail — just what to learn. Plenary: 2 min share per triad.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Show template; form triads; assign opportunities #1–#3. |
| 2 | 10 min | Triads draft hypothesis + questions + riskiest assumption. |
| 3 | 6 min | Report-outs: 2 min each; facilitator captures on master sheet. |
| 4 | 2 min | Sanity check: "Can we learn this in 2–3 weeks?" Adjust if not. |

**Block output:** Three design hypothesis cards with research questions; photo + typed copy.

---

### Block: Commit and close (2:50–3:00)

**Why:** A kickoff without owned next steps dissolves momentum, especially for a new team.

**Format:** [Open Items List](https://retromat.org/en/?id=24)

**Board / frame (ASCII):**
```
┌────────────────────────────────────────────────────────────────┐
│  ACTION                          │ OWNER        │ BY WHEN       │
├──────────────────────────────────┼──────────────┼───────────────┤
│  Schedule UR for opp #1          │              │               │
│  Publish workshop summary        │              │               │
│  Set weekly discovery sync       │              │               │
└────────────────────────────────────────────────────────────────┘
  NEXT CHECKPOINT: _____________ (date/time)
```

**Facilitator instruction:** Propose starter actions if the group stalls: (1) scribe publishes summary today, (2) research lead schedules first validation for opp #1 within 5 business days, (3) PM creates backlog tickets for top 8, (4) team lead calendars weekly 30-min discovery sync. Every action needs a name and date. Close with one-word checkout round.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Capture actions on Open Items List; confirm owners aloud. |
| 2 | 3 min | Agree next checkpoint (recommend: 5 business days — review validation plan). |
| 3 | 2 min | One-word checkout round; thank group; remind summary timeline. |

**Block output:** Open Items List photo; next checkpoint on calendar before room clears.

---

## Cut list

If running long:

- **Cut:** Hopes/fears dot vote (save 2 min); reduce lightning talks from 4 to 3 speakers (save 5 min); shorten journey map breakout from 18 to 12 min and cap report-outs at 2 min each (save 7 min); merge opportunity clustering read-back into silent gallery walk (save 5 min); draft hypotheses for top 2 only instead of 3 (save 6 min)
- **Protect:** Purpose alignment (9 Whys), user journey map with dot-voted pains, Importance/Difficulty prioritization with agreed criteria, Open Items List close with owners and next checkpoint

**Emergency compress (≥15 min behind):** Drop hopes/fears dot vote; run 3 lightning talks; journey map as single plenary on one persona only; prioritize top 5 instead of 8; hypotheses for #1 only in room, #2–#3 async within 48h.

---

## Preparation

**Space / tools:**
- Room for 10 with movable chairs — cabaret layout (2 tables × 5) for breakouts in journey mapping
- 2 large wall surfaces or rolling boards: (A) purpose/context, (B) journey + opportunities
- Sticky notes (3 colors: pains, HMWs, actions), thick markers, dot stickers (3 colors)
- Printed journey map template × 2 (for breakout groups)
- Timer visible to room; bell or chime for lightning talks
- Flip chart for parking lot and Open Items List
- Phone camera or doc scanner for board photos
- Optional: pre-printed persona name labels for journey groups

**Pre-read / pre-work (send 3 business days before):**
- One-pager: workshop goal, agenda, ground rules, parking lot policy, confidentiality (Chatham House)
- Ask each function to nominate one lightning talk speaker (3 slides max: users, data, constraints)
- Optional: 5-question pre-survey — "What user problem worries you most?" (feeds journey map)
- Request: read any existing research summary or support ticket themes (link in invite)
- Assign scribe and timekeeper roles in advance
- Confirm product lead attendance and ratification commitment for backlog

**Facilitator role:**
- **Lead facilitator:** Runs flow, enforces timeboxes, redirects solutioning
- **Scribe:** Captures boards, photos, live Open Items List; publishes summary same day
- **Timekeeper:** Signals 1-min warnings for talks and breakouts
- **Product lead (participant, not facilitator):** Contributes content; does not override prioritization votes

**Parking lot:**
- Physical sheet labeled "Parking lot — not today"
- Rule: interesting but off-scope items go here with owner to schedule separately
- Revisit only if time remains after validation block (unlikely); otherwise carry to weekly sync

---

## Hybrid / online parity

**Not applicable.** This session is fully in-person (10 participants co-located).

**Contingency if one participant becomes remote:** Switch to a shared Miro board mirroring wall templates, assign an online advocate to read aloud all in-room stickies, and use dot voting in the board (not show of hands).

---

## Session artifacts

| Artifact | Purpose | Owner | Location | Confidentiality |
| --- | --- | --- | --- | --- |
| Purpose + success signal board | North star for discovery | Scribe | Wiki / Notion project hub | Internal; attributed |
| Hopes and fears photo | Team context for retros later | Scribe | Same-day workshop page | Internal; themes only, Chatham House |
| Context harvest board | Shared facts vs assumptions | Scribe | Workshop page + backlog doc link | Internal; attributed sources |
| Master user journey map | Shared problem understanding | Design / research lead | Miro export or photo archive | Internal |
| Opportunity theme cards + HMW clusters | Raw opportunity material | Scribe | Workshop page | Internal |
| Prioritized backlog (ranked 1–8) | Primary workshop deliverable | PM | Jira / Linear backlog column | Internal; product lead ratifies |
| Design hypothesis cards (top 3) | Validation starting points | Research lead | Research repo / Dovetail / wiki | Internal |
| Open Items List | Accountability | Facilitator | Team channel pin + ticket links | Internal; attributed owners |
| Workshop summary (1–2 pages) | Async alignment for absent stakeholders | Scribe | Same-day post in team channel | Internal; no recording unless consented |

---

## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish photos + summary + ranked backlog | Scribe | Same day (within 4 h) | Tag action owners in team channel |
| Product lead ratifies top 5–8 backlog | Product lead | Within 48 h | Post rationale if order changed |
| Create backlog items for opportunities #1–#8 | PM | Within 24 h | Link each item to journey pain and HMW cluster |
| Schedule validation for opp #1 (research plan) | Research lead | Within 3 business days | Share draft plan in discovery sync |
| Draft hypotheses + research questions for #4–#8 | Assigned triad owners | Within 5 business days | Review in discovery sync |
| Weekly discovery sync (30 min) | Team lead | Calendar series starting next week | Track validation learnings vs backlog |
| Review progress on Open Items List | Facilitator / team lead | 5 business days post-workshop | Resize, reassign, or drop stuck actions |
| Revisit prioritized backlog | Full team | After first validation cycle (~2–3 weeks) | Reprioritize based on evidence; close or pivot hypotheses |
| Team retro on ways of working | Facilitator | ~4 weeks after kickoff | Adjust collaboration norms using hopes/fears baseline |
