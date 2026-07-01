# Hybrid PI / Sprint Planning — Shared Platform Backlog

## Goal

Produce a **committed, capacity-bound sprint plan** (≤40 story points combined) for two Scrum teams sharing a platform backlog — with sized backlog items, sequenced priorities, named owners, and an explicit "not doing" list. This is **planning and commitment**, not ideation.

## Decision authority

- **Sponsor / decision owner:** Product Owner (or Release Train Engineer) for the shared platform backlog — present and able to accept or revise the committed scope.
- **Commitment authority:** Each **team lead commits for their team**; combined plan must not exceed **40 story points** (known combined velocity). PO confirms final sprint goal.
- **Decision rule:** **Leader-decides with consent check** — team leads select and commit team scope within capacity; [Fist to Five](https://www.sessionlab.com/methods/fist-to-five) surfaces reservations before lock-in. PO breaks ties on cross-team sequencing.
- **Authority reality:** Commitments stick for the sprint unless escalated via the PO; this session is **decision-making**, not input-gathering.
- **Confidentiality / recording:** Internal team session; attributed contributions on the board; **not recorded** unless all 12 participants opt in before start.

## Key outcomes

- ~40 backlog items **relatively sized** (story points) on a single shared board
- **Sequenced sprint backlog** totaling **≤40 points** with clear team ownership per item
- **Named owners** (person, not just team) for every committed item via [Open Items List](https://retromat.org/en/?id=24)
- **Explicit "not doing" list** — items sized but deferred beyond capacity
- **Risk and assumption log** for top commitments ([Premortem](https://www.atlassian.com/team-playbook/plays/pre-mortem))
- **Team-lead commitment** confirmed with visible agreement check ([Fist to Five](https://www.sessionlab.com/methods/fist-to-five))
- **First sprint checkpoint booked** on calendar before session ends

## Acceptance criteria

**Done** when:
1. Committed backlog sum is **≤40 story points** (visible running total on board).
2. Every committed item has **team + individual owner + size**.
3. Both team leads and PO have explicitly committed (Fist to Five ≥3 or reservations documented).
4. "Not doing" list published alongside commitments.
5. Sprint checkpoint meeting is **on the calendar** (not TBD).

**Fallback if no agreement:** Size and sequence only; PO + team leads finalize commitment async within 24h using the same board. Do **not** extend session into open debate.

---

| Time | Block | Format (catalogue practice) | Output |
| --- | --- | --- | --- |
| 0:00-0:05 | Check-in | [One Word](https://www.funretrospectives.com/one-word/) | Mood baseline |
| 0:05-0:10 | Decision rule | [Agreement and Certainty](https://www.liberatingstructures.com/agreement-and-certainty) | Commitment rule agreed |
| 0:10-0:25 | Frame + capacity | [ToP Focused Conversation](https://www.top-network.org/use-focused-conversation) + capacity review (plain facilitation structure) | Shared horizon, **40-point cap**, success signal |
| 0:25-0:42 | Scope clusters | [Affinity Clustering](https://www.luma-institute.com/affinity-clustering/) | Grouped candidate items by theme/dependency/team |
| 0:42-1:17 | Size backlog | [Affinity Estimation](https://agilealliance.org/glossary/relative-estimation/) | Story points on ~40 items |
| 1:17-1:27 | Break | plain facilitation structure | — |
| 1:27-1:57 | Sequence within capacity | [Importance/Difficulty Matrix](https://www.luma-institute.com/importance-difficulty-matrix/) + [Dot Vote](https://designsprintkit.withgoogle.com/methodology/phase4-decide/dot-vote) (criteria first) | Ranked pull order; draft ≤40-point selection |
| 1:57-2:17 | Uncertainty on commitments | [Premortem](https://www.atlassian.com/team-playbook/plays/pre-mortem) | Top risks and assumptions |
| 2:17-2:42 | Commit + agreement check | [Open Items List](https://retromat.org/en/?id=24) + [Fist to Five](https://www.sessionlab.com/methods/fist-to-five) | Locked sprint plan + "not doing" list |
| 2:42-2:50 | Close + checkpoint | plain facilitation structure | Calendar hold booked; artifact pointers |

**Participation structure (12 people):** 2 in-room tables (Team A ~4, Team B ~4) + **4 online (2 per team, paired into shared Miro zones with in-room teammates)** — not one isolated "online-only table."

**Estimation vs commitment:** Sizing blocks (0:42-1:17) produce **relative size signals only**. Nothing is committed until the Commit block (2:17-2:42).

---

### Block: Check-in (0:00-0:05)

**Why:** Quick arrival and mood baseline before a high-stakes planning session.

**Format:** [One Word](https://www.funretrospectives.com/one-word/)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────┐
│  One Word — how are you arriving?   │
├─────────────────────────────────────┤
│  Name │ Word │ (chat for remotes)   │
└─────────────────────────────────────┘
```

**Facilitator instruction:** Popcorn round — **online speakers first**, then in-room. No discussion. Set tone: "Today we commit, we don't brainstorm new scope."

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 1 min | Frame one-word prompt |
| 2 | 3 min | Round (online first); scribe captures on board |
| 3 | 1 min | Transition to decision rule |

**Block output:** Mood baseline on board header

---

### Block: Decision rule (0:05-0:10)

**Why:** Match decision approach to a capacity-bound commitment session before sizing debates begin.

**Format:** [Agreement and Certainty](https://www.liberatingstructures.com/agreement-and-certainty)

**Facilitator instruction:** Name the issue type: "Sprint scope commitment within fixed capacity." Confirm **leader-decides with consent check** (team leads commit; Fist to Five before lock-in). PO confirms cross-team sequencing ties.

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Explain Agreement and Certainty matrix |
| 2 | 2 min | Group confirms rule on this slide/frame |
| 3 | 1 min | Restate: estimation ≠ commitment until final block |

**Block output:** Decision rule noted on board banner

---

### Block: Frame + capacity (0:10-0:25)

**Why:** Align on planning horizon, non-negotiable capacity cap, and what success looks like — before touching backlog items.

**Format:** [ToP Focused Conversation](https://www.top-network.org/use-focused-conversation) + capacity/velocity review (plain facilitation structure)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────┐
│  Sprint goal │ Capacity: 40 pts MAX │ Done =   │
├──────────────┼──────────────────────┼──────────┤
│  (draft)     │  Team A: ___  Team B: ___        │
│              │  COMBINED TOTAL: ___ / 40         │
└──────────────┴──────────────────────────────────┘
```

**Facilitator instruction:** ORID sequence — objective facts (backlog count, velocity, sprint dates) → reflective reactions → interpretive meaning (what must land this sprint) → decision (one-sentence sprint goal candidate). **Display 40-point cap prominently**; clarify teams need not split 20/20 but **combined total cannot exceed 40**.

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Scope creep debate | Parking lot; "if not on pre-read backlog, not today" |
| Missing PO | Reframe as sizing-only; defer commitment |
| Velocity challenged | Use 40 as working cap; note assumption on board |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 4 min | Objective: sprint dates, 40 sp cap, ~40 items |
| 2 | 4 min | Reflective: concerns, dependencies |
| 3 | 4 min | Interpretive: draft sprint goal |
| 4 | 3 min | Decision: agree goal + capacity banner |

**Block output:** Sprint goal statement + capacity tracker initialized

---

### Block: Scope clusters (0:25-0:42)

**Why:** ~40 refined items still need visible grouping by dependency, platform theme, and likely owning team before bulk sizing.

**Format:** [Affinity Clustering](https://www.luma-institute.com/affinity-clustering/)

**Board / frame (ASCII):**
```
┌──────────┬──────────┬──────────┬──────────┐
│ Cluster 1│ Cluster 2│ Cluster 3│ Cluster 4│
│ (theme)  │          │          │          │
├──────────┼──────────┼──────────┼──────────┤
│ □ item   │ □ item   │ □ item   │ □ item   │
│ □ item   │ □ item   │          │          │
└──────────┴──────────┴──────────┴──────────┘
     Team A zone          Team B zone
```

**Facilitator instruction:** Items are **pre-loaded** on the board (from pre-work). Teams silently cluster in **parallel**: in-room tables + online pairs in shared Miro zones. Cluster by **dependency chains** and **platform theme**, not by "nice to have." Tag tentative team owner on each cluster.

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Duplicate items | Merge cards; scribe resolves |
| Orphan items | "Unassigned" column; assign in sizing |
| Remote lag | Remote facilitator confirms all online cards visible |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Instructions; confirm all items on board |
| 2 | 12 min | Silent clustering — parallel tables/zones |
| 3 | 2 min | Quick gallery — name clusters |

**Block output:** Clustered backlog with tentative team tags

---

### Block: Size backlog (0:42-1:17)

**Why:** Assign relative story points to ~40 items quickly without debating each card — Affinity Estimation fits volume and time box.

**Format:** [Affinity Estimation](https://agilealliance.org/glossary/relative-estimation/)

**Board / frame (ASCII):**
```
┌────┬────┬────┬────┬────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 5  │ 8  │ 13 │ 21 │ ?  │
├────┼────┼────┼────┼────┼────┼────┼────┤
│    │    │    │    │    │    │    │    │
└────┴────┴────┴────┴────┴────┴────┴────┘
        ↑ relative scale columns ↑
   Items move here — NO commitment yet
```

**Facilitator instruction:** **Estimation only — not commitment.** Use reference story (known 3-pointer or 5-pointer from last sprint) anchored on board. Teams size **their clusters first in parallel**, then **cross-team items** sized in plenary mini-rounds. Outliers (wide spread) get 2-min discussion max, then PO calls size. Items marked **?** → spike or split async; exclude from commitment unless resolved in session.

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Long debate on one item | Timebox 2 min; PO decides; parking lot split/spike |
| Online can't see columns | Remote facilitator confirms view; pause until synced |
| Sum already >40 before sequencing | Note on board — sequencing block must cut, not "fit by hope" |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Anchor reference story; explain silent sort |
| 2 | 20 min | Parallel Affinity Estimation per team zone |
| 3 | 10 min | Plenary on shared/cross-team items only |
| 4 | 2 min | Read total **if all items selected** (expect >>40 — sets up cut) |

**Block output:** Story points on every sized item; running **hypothetical** total visible

---

### Block: Break (1:17-1:27)

**Why:** Mandatory break ~75 min into a 2.5-hour in-person session; remote participants stretch off-camera.

**Format:** plain facilitation structure

**Facilitator instruction:** Hard stop. Remote facilitator keeps Zoom room open; mute main room mic in conference room.

**Block output:** —

---

### Block: Sequence within capacity (1:27-1:57)

**Why:** Rank sized items and select a **≤40-point** sprint backlog using agreed criteria — not gut feel or loudest voice.

**Format:** [Importance/Difficulty Matrix](https://www.luma-institute.com/importance-difficulty-matrix/) + [Dot Vote](https://designsprintkit.withgoogle.com/methodology/phase4-decide/dot-vote) (criteria first)

**Board / frame (ASCII):**
```
        High Importance
              │
    Quick     │    Major
    wins      │    projects
──────────────┼──────────────  Low Difficulty → High
              │
    Fill-ins  │    Thankless
              │
        Low Importance

Then: Dot Vote on top-right + quick wins → pull into sprint
until COMBINED TOTAL = 40 pts (stop line)
```

**Prioritization criteria (agree BEFORE voting — 3 min):**
1. **Platform impact** — unblocks other teams or reduces operational risk
2. **Dependency order** — prerequisites before dependents
3. **Team ownership clarity** — item has a ready owner this sprint
4. **Right-sizing** — no item >8 points unless PO explicitly accepts risk

**Facilitator instruction:** Plot **all sized items** on Importance/Difficulty (teams do their items in parallel zones; PO places cross-cutting items). Then **individual dot vote** on Miro (3 dots per person) — **not show of hands in room**. Pull items in vote order into **Sprint Backlog** column until **40-point cap** reached. Team leads negotiate split if both need same capacity; PO adjudicates.

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Over-capacity after pull | Remove lowest-vote items until ≤40; move to "Not doing" |
| Tie on last slot | PO decides; document dissent |
| Hidden dependency discovered | Swap item of equal size or defer dependent |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 3 min | Agree criteria (written on board) |
| 2 | 12 min | Plot items on Importance/Difficulty |
| 3 | 10 min | Dot Vote on Miro (individual, silent) |
| 4 | 5 min | Pull items to sprint column until 40-cap hit |

**Block output:** Draft sprint backlog ≤40 points + overflow "candidate deferred" list

---

### Block: Uncertainty on commitments (1:57-2:17)

**Why:** Surface failure modes on the **selected** sprint scope before team leads lock commitment.

**Format:** [Premortem](https://www.atlassian.com/team-playbook/plays/pre-mortem)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────────┐
│  "It's two weeks in and we missed…"   │
├─────────────────────────────────────────┤
│  Risk / assumption │ Mitigation │ Owner│
└─────────────────────────────────────────┘
```

**Facilitator instruction:** "Imagine the sprint failed — what happened?" Silent capture on Miro first (2 min), then cluster top 5 risks. Focus on **committed items only**. Each mitigation gets an owner or "accept risk" from PO.

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Pessimism spiral | Timebox; "we're naming risks to strengthen plan, not to cancel" |
| Risk requires descope | Swap item if points allow; else PO accepts risk explicitly |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Premortem prompt — silent sticky capture |
| 2 | 8 min | Cluster; identify top 5 risks |
| 3 | 8 min | Mitigation or accept-risk per top risk |
| 4 | 2 min | Link risks to sprint backlog items |

**Block output:** Risk/assumption log tied to committed scope

---

### Block: Commit + agreement check (2:17-2:42)

**Why:** Convert draft selection into **owned commitments** with explicit deferrals — estimation and ranking are not commitment.

**Format:** [Open Items List](https://retromat.org/en/?id=24) + [Fist to Five](https://www.sessionlab.com/methods/fist-to-five)

**Board / frame (ASCII):**
```
┌────────────────────────────────────────────────────────────┐
│  COMMITTED SPRINT BACKLOG          Total: ___ / 40 pts   │
├────────┬──────┬──────┬───────────────┬───────────────────┤
│ Item   │ Size │ Team │ Owner (person)│ Definition of done│
├────────┴──────┴──────┴───────────────┴───────────────────┤
│  NOT DOING THIS SPRINT (explicit)                        │
├──────────────────────────────────────────────────────────┤
│  Item │ Size │ Reason deferred                            │
└──────────────────────────────────────────────────────────┘
```

**Facilitator instruction:**
1. Team leads assign **individual owners** for every committed item ([Open Items List](https://retromat.org/en/?id=24)).
2. Read final total — **must be ≤40**; read "not doing" list aloud.
3. **Fist to Five** (on Miro reaction or hand signals on camera — **both modes simultaneously**): Team Lead A → Team Lead B → PO. **≤2 = must speak**; reservations captured in decision log ([Gradients of Agreement](https://workshopweaver.com/facilitation-methods/gradients-of-agreement) scale referenced for wording).
4. PO states final sprint goal one sentence.

**Facilitator contingencies:**
| If… | Then… |
| --- | --- |
| Fist to Five ≤2 | Hear concern; adjust scope if points allow or PO accepts risk |
| Owner not in room | Team lead owns proxy assignment; confirm with absentee same day |
| Total >40 | STOP — remove items until compliant before Fist to Five |

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 10 min | Assign owners; complete Open Items List |
| 2 | 5 min | Publish "not doing" list |
| 3 | 5 min | Fist to Five — team leads + PO |
| 4 | 5 min | Capture reservations; PO confirms |

**Block output:** Locked sprint backlog, owners, "not doing" list, agreement scores

---

### Block: Close + checkpoint (2:42-2:50)

**Why:** Book follow-up before people leave; point to artifacts.

**Format:** plain facilitation structure

**Facilitator instruction:** Book **mid-sprint checkpoint** (15 min, day 5 or 6) on shared calendar **now**. Share board link in chat. One-sentence checkout: "One word on confidence in our plan."

**Timed flow:**
| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Book checkpoint on calendar; confirm attendees |
| 2 | 3 min | Artifact locations; checkout round (optional one word) |

**Block output:** Calendar hold + published board link

---

## Cut list

If running long:
- **Cut:** Importance/Difficulty plot — skip matrix and go straight to dot vote on pre-tagged clusters; shorten Premortem to top 3 risks only; reduce owner assignment to team-level with async individual assignment within 24h
- **Protect:** 40-point capacity cap enforcement, "not doing" list, Open Items List with owners, Fist to Five commitment check, checkpoint booking

---

## Preparation

**Space / tools:** Conference room with 2 tables (Team A, Team B); projector showing Miro/ FigJam sprint board; timer visible; **every participant on own laptop** (1 person = 1 screen). Zoom with breakout capability (used only if needed for mixed pairs). Slack backup channel.

**Pre-read / pre-work (send 48h ahead):**
- Pre-loaded Miro board with all ~40 refined backlog items (title, link, current notes)
- Combined velocity reminder: **40 story points max**
- Sprint dates, Definition of Done, reference stories from last sprint
- Each team lead tags tentative ownership on items before session
- Online participants confirm Miro access + Zoom link

**Facilitator role:**
- **Lead facilitator** (in-room) — time, plenary, capacity cap enforcement
- **Dedicated remote facilitator** (required, online) — chat, hands, breakout support, reads room-only comments into board
- **Scribe** — Miro board hygiene, running point total, decision log
- **PO** — sizing tie-breaks, sequencing ties, final commitment

**Parking lot:** New feature ideas, non-sprint work, estimation methodology debates → separate backlog refinement or product forum

---

## Hybrid / online parity

**Digital board:** Miro (or FigJam) — **single source of truth** for all items, sizes, votes, sprint column, "not doing" list, and decision log

**Online group:** 4 remotes — **2 paired per team** in dedicated Miro zones shared with in-room table partners (e.g., each remote embedded with Team A or Team B frame). **Avoid** placing all 4 remotes in one breakout without in-room partners.

**Parity rules:**
- If it's not on the board, it didn't happen
- **Online speakers first** in plenary rounds
- **Individual dot votes and sizing on Miro** — no show of hands in room
- **Fist to Five** simultaneously on camera (remotes) and in-room (visible to camera)
- In-room participants use **their own laptop** to Miro — not a shared room screen for participation
- Capacity total updated live on board — visible to all

**Co-facilitation:** Remote facilitator monitors Zoom chat, raised hands, breakout timing; narrates room-only side conversations into Miro chat; confirms remotes can reach all board zones before each block

**Hybrid operations checklist (REQUIRED):**
- [ ] AV rehearsal completed; room mic/speaker/camera tested; remote audio check for all 4 online
- [ ] Crosstalk handling plan — one speaker at a time; mute when not speaking; hand-raise in Zoom
- [ ] Backup channel documented (Slack `#platform-sprint-planning` + PO phone if Zoom fails)
- [ ] Remote access checks completed before session (Miro guest/edit links, Zoom breakouts tested)
- [ ] Breakout architecture parity — online participants paired into **team zones** on Miro with in-room tables; **not** one isolated "online table" of 4
- [ ] **1 person = 1 screen** — even in-room participants on Miro individually
- [ ] **Dedicated remote facilitator assigned** for full 2:50 session

---

## Session artifacts

| Artifact | Purpose | Owner | Location | Confidentiality |
| --- | --- | --- | --- | --- |
| Live Miro board | Sizing, sequencing, owners, capacity tracker | Scribe | Miro (link in invite) | Internal — both teams + PO |
| Sprint commitment / decision log | Committed items, criteria used, Fist to Five scores, dissent/reservations | Scribe | Wiki page linked from board | Internal teams |
| "Not doing" list | Explicit deferrals beyond 40-cap | Facilitator | Miro section + wiki | Internal — visible to stakeholders |
| Risk / assumption log | Premortem outputs + mitigations | Scribe | Miro + wiki | Internal |
| Summary memo | Decisions, totals, reservations, next checkpoint | Scribe | Same-day email / Slack | Internal; absent stakeholders tagged |
| Recording | — | — | — | **Not recorded** (default) |

**Follow-through governance:**
- Decision log captures **prioritization criteria**, **Fist to Five scores**, and **Gradients of Agreement** reservations/dissent per team lead and PO
- **"Not doing" list** published alongside commitments — not implied
- **PO sign-off** on final sprint goal within 48h (confirm or resize)
- Communication plan: summary sent to **absent stakeholders** (e.g., platform consumers) same day
- Verify every action/risk owner has **authority and resources** — team leads confirm, not just names
- **Mid-sprint checkpoint (15 min) booked on calendar before session ends** — date: sprint day 5 or 6 (facilitator schedules in Close block)

---

## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish Miro link + summary + decision log + "not doing" list | Scribe | Same day | Tag owners; notify absent stakeholders |
| PO sign-off on sprint goal and scope | Product Owner | Within 48h | Confirm or resize; update wiki |
| Create/update Jira tickets for committed items | Item owners | Within 24h | Link tickets to session wiki |
| Confirm individual owners with absent members | Team leads | Within 24h | Update Open Items List |
| Verify owner authority/resources for committed work | Team leads + PO | Before sprint start | Reassign or descope if blocked |
| Mid-sprint checkpoint | Facilitator + team leads + PO | **Pre-booked** sprint day 5/6 | Resize scope or escalate blockers |
| Sprint review prep | Teams | Sprint end | Demo committed increment vs plan |
