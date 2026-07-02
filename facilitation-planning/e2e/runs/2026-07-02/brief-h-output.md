# Production Outage Postmortem — Facilitation Plan

**Session:** 90 minutes, online, 10 engineers (mixed seniority)  
**Incident:** 4-hour production outage  
**Arc chosen:** `incident-postmortem` (blameless timeline → contributing factors → systemic actions)

---

## Goal

Reconstruct a shared, timestamped timeline of a 4-hour production outage; identify systemic contributing factors (not individual fault); and commit to owned, non-punitive improvements the engineering group can implement or escalate.

## Decision authority

- **Sponsor / decision owner:** Engineering manager or incident commander (present). Owns follow-through on action items and escalation of org-level blockers.
- **Authority reality:** The group can **commit to team-owned systemic actions** (runbooks, alerts, tooling, process). Cross-team or budget-dependent items become **escalation proposals** for sponsor sign-off — not binding commitments from this room alone.
- **Decision rule:** [Sociocracy consent decision-making](https://patterns.sociocracy30.org/consent-decision-making.html) for team-owned actions ("good enough for now, safe enough to try"); **consult** for items requiring other teams or leadership.
- **Facilitator neutrality:** Facilitator should **not** be the primary on-call responder or the person most criticized for the outage. If no neutral facilitator is available, rotate scribe/facilitator roles and declare bias at open.

## Key outcomes

- Shared incident timeline with timestamps, detection → mitigation → recovery markers, and acknowledged gaps
- 3–5 **contributing factors** (systems/process), explicitly not a single "root cause" or named individual
- Factors sorted by [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29): team-owned vs org/external
- 3–5 **systemic action items** with owners, due dates, and success signals — no punitive or personal corrective actions
- Draft postmortem document ready for same-day publication to engineering

## Acceptance criteria

- **Done:** Timeline covers detection through recovery with no major disputed gaps; contributing factors documented without naming individuals as causes; ≥3 team-owned actions with named owners who confirm authority to act; first progress checkpoint **booked on calendar** before session ends.
- **Fallback if blame surfaces or safety fails (avg Safety Check < 3):** Pause analysis blocks; facilitator reads pre-assembled timeline from logs for factual alignment only; contributing factors captured **async via written form** within 48h; live session closes after safety re-establishment and scheduling a retry — do not force 5 Whys in a hostile room.

## Confidentiality

- **Chatham House** for discussion: themes and systemic factors may appear in the written postmortem; **no attributing blame to individuals** in any artifact.
- **Attributed** only for action item owners (standard engineering accountability).
- **Not recorded** by default. If recording is required for absent stakeholders, announce at open and offer opt-out (leave before analysis blocks).

---

## Agenda table

| Time | Block | Format (catalogue practice) | Output |
| --- | --- | --- | --- |
| 0:00–0:10 | Blameless frame and safety | [Creating Safety](https://www.funretrospectives.com/creating-safety/) + [Safety Check](https://www.funretrospectives.com/safety-check/) + plain facilitation structure | Ground rules; safety baseline |
| 0:10–0:15 | Check-in | [One Word](https://www.funretrospectives.com/one-word/) | Mood baseline |
| 0:15–0:40 | Incident timeline | [Timeline](https://retromat.org/en/?id=4) | Shared timestamped sequence |
| 0:40–0:45 | Break | plain facilitation structure | — |
| 0:45–1:05 | Contributing factors | [5 Whys](https://retromat.org/en/?id=8) | Systemic factor clusters |
| 1:05–1:18 | Systemic focus | [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29) | Team-owned vs external factors |
| 1:18–1:30 | Systemic actions | [Dot Vote](https://designsprintkit.withgoogle.com/methodology/phase4-decide/dot-vote) + [Open Items List](https://retromat.org/en/?id=24) | Prioritized actions with owners |

---

## Per-block detail

### Block: Blameless frame and safety (0:00–0:10)

**Why:** Postmortems fail when participants fear career consequences. Explicit blameless framing and a safety baseline protect honest reconstruction of a stressful 4-hour outage.

**Format:** [Creating Safety](https://www.funretrospectives.com/creating-safety/) + [Safety Check](https://www.funretrospectives.com/safety-check/) + plain facilitation structure (blameless postmortem norms)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  BLAMELESS POSTMORTEM — we inspect SYSTEMS, not people       │
│  ✓ Facts & timestamps  ✓ Contributing factors  ✓ Learnings   │
│  ✗ "Who messed up"  ✗ Performance review input  ✗ Shame      │
├──────────────────────────────────────────────────────────────┤
│  SAFETY CHECK (1–5) — anonymous poll, aggregate shown only     │
│  If avg < 3 → downshift: timeline-from-logs only, async rest │
├──────────────────────────────────────────────────────────────┤
│  AUTHORITY: team-owned actions today; org items → escalation   │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Open with sponsor one-liner: "This is learning, not accountability theater." State blameless rules aloud; redirect any "X should have…" to "What system allowed…?" Use **anonymous poll** (Slido/Mentimeter/Zoom poll) for Safety Check — show aggregate only. If average < 3, announce downshift path immediately. Declare facilitator neutrality or known bias.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Blame language in open | Pause: "Rewind to system/process — what condition made that likely?" |
| Senior dominates framing | "Step up/step back"; written input before discussion |
| Safety avg < 3 | Downshift arc — factual timeline only; async factors; reschedule analysis |
| HR/legal investigation active | **Stop** — route to legal/HR process; do not run blameless postmortem |
| Denial or minimization | Return to timestamps: "What do logs show at T+0?" |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Welcome; purpose; sponsor confirms no punitive use |
| 2 | 3 min | Creating Safety: "What helps you share facts honestly?" — chat storm, read themes |
| 3 | 3 min | Blameless rules on board; examples of allowed vs forbidden language |
| 4 | 2 min | Anonymous Safety Check poll; reveal aggregate; state downshift if needed |

**Block output:** Ground rules visible; safety score (number); downshift flag yes/no.

---

### Block: Check-in (0:10–0:15)

**Why:** Ten engineers arrive with different proximity to the incident (on-call, responder, downstream). Naming mood without explanation reduces performative stoicism.

**Format:** [One Word](https://www.funretrospectives.com/one-word/)

**Board / frame (ASCII):**
```
┌─────────────────────────────────────┐
│  ONE WORD — how you arrive today    │
│  [word] [word] [word] ...           │
│  (chat or voice, ~10 sec each)      │
└─────────────────────────────────────┘
```

**Facilitator instruction:** Offer chat-first: type one word, then optional voice round-robin. No commentary or interpretation. Capture words on board strip. Note internally if many words are "tired," "raw," or "anxious" — may need gentler tone in 5 Whys block.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 1 min | Explain format; chat option |
| 2 | 3 min | Round-robin or read chat words onto board |
| 3 | 1 min | Transition: "We start with facts on a timeline" |

**Block output:** Mood strip on board; no discussion.

---

### Block: Incident timeline (0:15–0:40)

**Why:** A 4-hour outage has many parallel threads; shared timestamps prevent conflicting narratives before analysis.

**Format:** [Timeline](https://retromat.org/en/?id=4)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  TIMELINE (horizontal) — timestamps required                 │
│  T-?  │ detect │ escalate │ mitigate │ recover │ comms       │
├───────┼────────┼──────────┼──────────┼─────────┼──────────────┤
│       │        │          │          │         │              │
│  ◆ = customer impact   ▲ = alert   ★ = decision              │
├──────────────────────────────────────────────────────────────┤
│  GAPS / UNCERTAIN (?) — parking lot, not debate              │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** **No causality yet — events only.** Pre-seed board with incident commander draft timeline if pre-work exists; mark unverified items with `?`. Split into **triads** (3 groups of 3 + 1 facilitator float) in Zoom breakouts for 12 min to add sticky events; merge in plenary. Redirect debate to parking lot. Mixed seniority: rotate triads so juniors are not only note-takers.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Conflicting facts | Mark both with `?`; assign owner to verify from logs post-session |
| Someone blamed in timeline | "Person X did Y" → "At HH:MM, action Y occurred" |
| Timeline too long | Focus T-30min before detection through recovery complete |
| Silence in breakouts | Share log excerpt in chat; ask "what happened at HH:MM?" |
| Behind schedule | Cut triad report-outs to gap-only; facilitator reads draft |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Frame: facts only; show timeline template |
| 2 | 3 min | Silent individual stickies — key moments each person remembers |
| 3 | 12 min | Breakout triads merge and timestamp stickies |
| 4 | 6 min | Plenary merge; facilitator reads left-to-right once |
| 5 | 2 min | Star gaps/uncertainties; assign log verification owners |

**Block output:** Single merged timeline on board; gap list with verification owners.

---

### Block: Break (0:40–0:45)

**Why:** Mandatory online break (~45–60 min cadence); outage postmortems are cognitively heavy.

**Format:** plain facilitation structure

**Facilitator instruction:** Encourage away-from-keyboard. Scribe snapshots timeline. No "sidebar blame" in breakouts — reopen at 0:45.

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 5 min | Break; scribe saves board state |

**Block output:** Board snapshot saved.

---

### Block: Contributing factors (0:45–1:05)

**Why:** Move from "what happened" to "why systems allowed it" — multiple contributing factors, not root-cause theatre or a single scapegoat.

**Format:** [5 Whys](https://retromat.org/en/?id=8)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  CONTRIBUTING FACTORS (not "the root cause")                 │
│  Event: [pick 1–2 pivotal timeline moments]                  │
│  Why? → Why? → Why? → Why? → Why?                            │
│  STOP at system/process layer — never at a person's name       │
├──────────────────────────────────────────────────────────────┤
│  ALT: messy incidents → [Cause-Effect-Diagram] cluster       │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Pick **1–2 pivotal events** from timeline (detection delay, failed rollback, comms gap). Triads run 5 Whys in breakouts (10 min). **Hard rule:** if a Why lands on a person, ask "What process or missing safeguard allowed that?" If multiple parallel failures, note Cause-Effect-Diagram as follow-up async instead of forcing one chain. Cluster similar factors in plenary.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Blame re-emerges | Pause; restate blameless rule; rephrase to system |
| Single "root cause" insisted | "We document contributing factors; prevention needs several levers" |
| Analysis paralysis | Timebox; park deep branches for written follow-up |
| Safety downshift active | **Skip block** — async 5 Whys form due in 48h |
| Emotional escalation | 2-min pause; optional opt-out; return to timeline facts |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Frame contributing factors vs root cause; pick 2 pivot events |
| 2 | 3 min | Silent brainwrite — "What systems/processes contributed?" |
| 3 | 10 min | Breakout triads: 5 Whys on each pivot |
| 4 | 3 min | Report-out; facilitator clusters themes |
| 5 | 2 min | De-duplicate; star top 5 factor themes |

**Block output:** 3–5 clustered contributing factor themes (system/process language).

---

### Block: Systemic focus (1:05–1:18)

**Why:** Not every factor is team-fixable; separating circle of control prevents faux actions and clarifies escalations.

**Format:** [Circles & Soup / Circle of Influence](https://retromat.org/en/?id=29)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  CIRCLE OF INFLUENCE                                         │
│  ┌─────────────────┐  ┌──────────────────────────────────┐   │
│  │ TEAM CAN CHANGE │  │ ORG / EXTERNAL (soup)            │   │
│  │ runbooks, alerts│  │ vendor SLA, headcount, legacy    │   │
│  │ tests, tooling  │  │ → escalation proposals           │   │
│  └─────────────────┘  └──────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** Drag each factor theme into inner (team) or outer (org) circle. Outer items become **escalation proposals**, not faux team actions. Ask: "If we only fix inner circle items, would we materially reduce recurrence?" Sponsor notes outer items for leadership channel.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Everything dumped in "org" | Ask: "What 15% is in our control?" ([15% Solutions](https://www.liberatingstructures.com/15-percent-solutions) lens) |
| Victimhood loop | Acknowledge constraint; still require ≥2 inner-circle items |
| Dispute on ownership | Sponsor decides circle placement in ≤1 min per item |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Explain circles; demo one factor sort |
| 2 | 8 min | Sort all factor themes; brief discuss disputed items |
| 3 | 3 min | Sponsor captures outer-circle escalation list |

**Block output:** Factors sorted inner vs outer; escalation list for sponsor.

---

### Block: Systemic actions (1:18–1:30)

**Why:** Close with owned improvements that address systems — not individuals — and are feasible for owners to execute.

**Format:** [Dot Vote](https://designsprintkit.withgoogle.com/methodology/phase4-decide/dot-vote) + [Open Items List](https://retromat.org/en/?id=24)

**Board / frame (ASCII):**
```
┌──────────────────────────────────────────────────────────────┐
│  ACTION CRITERIA (set BEFORE voting)                           │
│  • Reduces recurrence  • Team control  • Specific & testable │
│  ✗ "Be more careful"  ✗ "Train person X"                     │
├──────────────────────────────────────────────────────────────┤
│  PROPOSED ACTIONS → DOT VOTE (3 dots each) → TOP 3–5         │
│  OPEN ITEMS: Action │ Owner │ Due │ Success signal           │
│  CHECKPOINT: [date booked on calendar before we leave]        │
└──────────────────────────────────────────────────────────────┘
```

**Facilitator instruction:** **Criteria before capture:** actions must be systemic and testable. Generate from inner-circle factors only (5 min). Each person 3 dots on board. Top 3–5 become Open Items List — owner must **verbally confirm** authority and capacity. Reject punitive items. Book 30-day progress checkpoint on calendar before closing. "Not doing" list: explicitly deprioritized ideas.

**Facilitator contingencies:**

| If… | Then… |
| --- | --- |
| Action targets a person | Reject; rephrase as process/safeguard |
| Owner unavailable | Assign interim owner; sponsor resolves in 24h |
| Too many actions | Cap at 5; rest to backlog section |
| No volunteers | Sponsor assigns by role, not by blame proximity |

**Timed flow:**

| Step | Time | Facilitator action |
| --- | --- | --- |
| 1 | 2 min | Read action criteria aloud; group thumbs consent |
| 2 | 4 min | Brainwrite systemic actions from inner-circle factors |
| 3 | 3 min | Dot vote; select top 3–5 |
| 4 | 2 min | Open Items List: owner, due, success signal each |
| 5 | 1 min | Book checkpoint date; name scribe publish deadline |

**Block output:** 3–5 owned systemic actions; "not doing" list; checkpoint on calendar.

---

## Cut list

If running long:

- **Cut:** Shorten check-in to chat-only; reduce timeline triads to pairs; limit 5 Whys to **one** pivot event; cap actions at 3 without dot vote (facilitator picks highest-leverage from inner circle).
- **Protect:** Blameless frame and Safety Check; merged timeline (even if incomplete with gaps marked); at least **2** systemic actions with owners; checkpoint booked; sponsor escalation list for outer-circle factors.

If **safety downshift** triggers:

- **Cut:** Blocks 5–6 live; async contributing factors and actions forms due in 48h.
- **Protect:** Creating Safety, blameless rules, timeline merge from logs, gap list, scheduled retry date.

---

## Preparation

**Space / tools:** Zoom/Meet with breakout rooms; Miro or FigJam (facilitator-owned template); Slido/Mentimeter for anonymous Safety Check; shared doc for postmortem draft; access to incident logs/metrics for scribe.

**Pre-read / pre-work:** **Optional but recommended:** Incident commander shares **draft timeline from logs** 24h before (read-only doc) — labeled "draft, to be corrected in session." Also send: session purpose, blameless norms link, no-recording default, participant list. Do **not** pre-assign blame or pre-write root cause.

**Facilitator role:** Neutral facilitator (not primary on-call unless unavoidable). **Scribe** captures board to postmortem doc live. **Online advocate** monitors chat, hands, breakouts, reads chat questions aloud.

**Parking lot:** Board column for interpersonal issues, disputed facts, and out-of-scope fixes; HR-worthy items → sponsor private channel, never plenary.

---

## Hybrid / online parity

**Digital board:** Miro/FigJam is the **single source of truth** for timeline, factors, and actions. All 10 participants join individually (online-only).

**Online group:** Breakouts for timeline triads and 5 Whys triads (3 rooms × 3 people + 1 float). Dot voting in board native mode. Chat for one-word check-in and silent brainwrites.

**Parity rules:**

- If it's not on the board, it didn't happen for the postmortem record.
- **1 person = 1 screen** — no co-located clusters on one laptop.
- Raised-hand queue managed by online advocate; no overlapping speech.
- Log links pasted in chat, not read aloud in full.
- Anonymous Safety Check via poll tool — not named dots on shared board.

**Co-facilitation:** Online advocate monitors chat, breakouts, tech failures, and enforces speak order; lead facilitator runs arc, blameless redirects, and safety downshift.

**Online operations checklist:**

- [ ] Breakout rooms pre-assigned (random, mixed seniority)
- [ ] Board edit rights for all participants; template pre-loaded
- [ ] Anonymous poll tested before session
- [ ] Backup channel (Slack thread) if video drops
- [ ] Scribe has doc open for live export
- [ ] Recording **off** unless explicit consent documented

---

## Session artifacts

| Artifact | Purpose | Owner | Location | Confidentiality |
| --- | --- | --- | --- | --- |
| Live board | Timeline, factors, actions | Scribe | Miro export + wiki | Internal engineering; blameless language |
| Postmortem document | Canonical outage record | Scribe / IC | Engineering wiki | Internal; attributed owners on actions only |
| Timeline gap list | Log verification tasks | Incident commander | Jira/tasks | Internal |
| Escalation proposals | Org-level blockers | Sponsor | Leadership channel / doc | Internal |
| Action log | Systemic improvements | Facilitator | Jira / tracker | Team-visible |
| "Not doing" list | Deprioritized ideas | Facilitator | Postmortem doc appendix | Internal |
| Decision / consent log | Action consent + reservations | Scribe | Postmortem doc | [Gradients of Agreement](https://workshopweaver.com/facilitation-methods/gradients-of-agreement) if objections |
| Summary for absentees | Catch-up | Scribe | Slack + wiki link | Same as postmortem; no recording by default |

**Follow-through governance:**

- Decision log with action consent and any reservations captured
- Explicit **"not doing"** list alongside commitments
- **Sponsor sign-off** on postmortem draft within 48h
- Communication plan: absent stakeholders receive wiki link same day
- Verify action owners have **authority and resources** — not just names
- **First checkpoint booked before session ends** (30-day default; 14-day if severity warrants)

Recording: **prohibited** unless legal/compliance requires; if recorded, announce at open and restrict distribution to incident stakeholders.

---

## Post-session process

| Step | Owner | When | Next step |
| --- | --- | --- | --- |
| Publish postmortem draft (timeline + factors + actions) | Scribe | Same day | Tag action owners; link in #incidents |
| Verify timeline gaps from logs | Gap owners | Within 72h | Scribe updates doc |
| Sponsor sign-off on postmortem | Sponsor | Within 48h | Confirm or revise actions |
| Create Jira tasks for each action | Action owners | Within 24h | Link to postmortem doc |
| Verify owner authority/resources | Sponsor | Before work starts | Reassign or escalate if blocked |
| Escalate outer-circle factors | Sponsor | Within 1 week | Leadership backlog review |
| Review action progress | Facilitator / sponsor | **Checkpoint date (booked live)** | Close, resize, or drop stuck actions |
| Revisit prevention effectiveness | Team | Next incident or quarterly | Close loop on systemic changes |

**Next checkpoint (book live):** 30 days from session — 30-minute action review on calendar before adjourn.
