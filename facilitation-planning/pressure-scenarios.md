# Pressure Scenarios

Use these scenarios to test `facilitation-planning` before deploying edits.

Run each scenario twice:

1. RED: give only the "Prompt to agent" text to an agent without this skill.
2. GREEN: give the same "Prompt to agent" text to an agent with `facilitation-planning` loaded.

Do not give agents the expected behavior, failure signals, headings, or evaluator notes. Those are for the orchestrator only.

## Scenario 1: One-Line Request And Time Pressure

Pressure types: speed, apparent simplicity, shortcut temptation.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Help me facilitate a team retro tomorrow."

They did not provide participant count, time budget, format, or desired outcomes. They also said: "I'm busy — just give me something I can run."

Proceed with the task. Say what you do next and what you deliver.
```

### Expected GREEN behavior

- Ask 2-4 targeted intake questions before proposing a plan.
- Do not deliver a full detailed plan from the one-line request alone.
- May briefly acknowledge the request and explain what context is needed.

### Failure signals

- Jumps straight to a full agenda or detailed facilitation plan.
- Invents participant count, duration, or goals without asking.
- Offers only one generic plan with no intake step.

## Scenario 2: User Names A Non-Catalogue Practice

Pressure types: user authority, branded-method familiarity, speed.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 90-minute retrospective using the Sailboat method. Team of 8, online, after a rough sprint. We need 2-3 concrete improvement actions."

You have access to a facilitation practice catalogue. Proceed with the task. Say what format you recommend and why.
```

### Expected GREEN behavior

- Check the catalogue before naming formats.
- Do not present "Sailboat" as a catalogued practice unless it appears in the catalogue.
- Offer the closest catalogue match (for example Starfish, Rose Bud Thorn, or another retrospective format from the catalogue) or a plain generic structure, and say honestly if Sailboat is not listed.

### Failure signals

- Presents Sailboat as a catalogued practice with a source link not in the catalogue.
- Invents a branded practice name and attributes it to the catalogue.
- Ignores the catalogue constraint entirely.

## Scenario 3: 30-Minute Meeting But User Wants "Full Workshop"

Pressure types: user scope inflation, completeness bias, sunk cost of detail.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "I have 30 minutes with leadership to align on Q3 priorities. Six people, in-person, high trust. Give me the full facilitation plan — every block, board template, timed flow, and post-session process."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Produce a plan scaled to 30 minutes, not a multi-day Strategy Lab.
- Keep block count and depth proportional to time (roughly 2-4 blocks, compact frames).
- Still include artifacts and a post-session process, but proportionally brief.

### Failure signals

- Produces a two-day or full-day workshop structure.
- Adds icebreakers, multiple breakout rounds, or day-level logistics inappropriate for 30 minutes.
- Bloated per-block detail that cannot fit the time budget.

## Scenario 4: Hybrid Session With "Room-First" Framing

Pressure types: default in-person bias, hybrid complexity avoidance.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 3-hour product discovery workshop. 12 participants: 8 in the room, 4 online. Hybrid. Goal is a prioritized opportunity backlog. Miro available. Give me the detailed facilitation plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Include explicit hybrid/online parity: digital board equivalents, how online participants contribute equally, separate online facilitation notes where needed.
- Do not treat the session as room-only with a video link tacked on.

### Failure signals

- Plan assumes everyone is co-located.
- No mention of how online participants post, vote, or present.
- Physical-only board instructions with no digital equivalent.

## Scenario 5: Detailed Plan But No Follow-Through

Pressure types: agenda completeness, ending at "good meeting."

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 60-minute sprint retrospective for 7 people, online, after a stressful release. We need psychological safety and 2-3 improvement actions. Give me the full detailed plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Include session artifacts (what gets captured and where).
- Include a post-session process: owners, actions, timeline, and next step after the retro.
- Do not stop at the agenda and block flows alone.

### Failure signals

- Delivers agenda and blocks only.
- No artifacts section or post-session follow-up.
- Vague "share notes" with no owners or timeline.

## Scenario 6: Russian Request, English-Only Agent Temptation

Pressure types: default English output, mixed-language shortcuts.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks in Russian: "Нужен план фасилитации ретроспективы на 75 минут. Команда 9 человек, онлайн, после тяжёлого спринта. Цель — 2-3 конкретных улучшения и восстановление доверия. Дай полный детальный план."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Write the plan body in Russian (headings, instructions, facilitator script).
- Keep practice names and source links in English as in the catalogue.
- Do not reply entirely in English when the user wrote in Russian.

### Failure signals

- Full plan in English despite the Russian request.
- Only a short English preamble with Russian fragments.
- Translates practice names away from catalogue spelling.

## Scenario 7: Predetermined Outcome / No Authority

Pressure types: authority illusion, decision-theatre temptation, speed.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 90-minute leadership alignment session for 8 directors. Goal: decide whether to merge two product lines. The CEO already told me privately they want the merge — we just need the group to feel heard and get to yes. Deliver the full facilitation plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Ask about or surface decision authority, decision rule, and whether the outcome is predetermined.
- Reframe the session as **input-gathering, not decision-making**, and say so explicitly when the outcome is predetermined.
- Do not stage a consent/consensus decision arc as if the group has real authority.

### Failure signals

- Delivers a full decision-making workshop without questioning authority.
- Uses Sociocracy consent or Decider as if the group can override the CEO.
- Treats "get to yes" as a facilitation goal without naming the authority reality.

## Scenario 8: Requester Not Neutral / Conflict as Workshop

Pressure types: user authority, conflict avoidance, workshop default.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "I'm the engineering manager. Two senior engineers on my team are in open conflict — public arguments in standups, one filed an HR complaint. Plan a 2-hour team workshop so we can align on working agreements and move forward. 12 people, in-person. Deliver the full facilitation plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Stop or flag: requester is not neutral (facilitating their own team's grievance).
- Route toward conflict/repair (understanding and repair, not an action list), or recommend an external/neutral facilitator.
- Do not treat active HR/legal interpersonal conflict as a standard alignment workshop.

### Failure signals

- Delivers a standard retro or alignment arc with action items as if conflict is resolved by workshop.
- Manager facilitates their own team's grievance without naming the neutrality problem.
- Skips safety/repair arc and jumps to SMART goals or Open Items List.

## Scenario 9: Large-Group Plenary Temptation

Pressure types: scale mismatch, completeness bias, round-robin default.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 3-hour single-session forum for 28 people (in-person). Goal: surface top concerns about the upcoming reorg and agree on 5 themes to escalate to leadership. High trust, no budget for a multi-day offsite. Deliver the full detailed facilitation plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Use small tables, delegate report-outs, or large-group formats (World Cafe, Open Space, 25/10 Crowdsourcing, Spokescouncil) — not 28-person plenary round-robins.
- Scale participation structure to headcount independently of time budget.

### Failure signals

- Schedules full-group round-robins for all 28 participants.
- Uses only plenary discussion blocks without table/delegate structure.
- Treats 28 people like a team of 8.

## Scenario 10: Timing Overrun / Cut List

Pressure types: completeness bias, detail inflation, no contingency.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 2-hour online strategy session for 10 people. Goal: agree on Q2 priorities. I need every block, timed flow, and post-session process. Deliver the full detailed facilitation plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Per-block timed-flow steps sum to ≤ ~85% of each block's duration (reserve transitions).
- Times use clock format (`h:mm`), not decimal overflow (e.g. no `0:55-0:68`).
- Plan includes a mandatory break (online: ~45-60 min cadence) and an explicit cut list ("if running long, cut X / protect Y").

### Failure signals

- Step tables inside blocks sum to more than the block allows.
- Invalid clock times (base-60 overflow).
- No break in a 2-hour online session.
- No cut list or contingency for running long.

## Scenario 11: Phase 3 Must Write Markdown File

Pressure types: chat-only delivery, completeness in message instead of artifact.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "We picked the retro-safe arc. Plan a 60-minute sprint retrospective for 7 people, online, after a stressful release. We need psychological safety and 2-3 improvement actions. Give me the full detailed facilitation plan."

Proceed with the task. Deliver the facilitation plan.
```

### Expected GREEN behavior

- Creates a markdown file at `docs/facilitation-plans/<date>-<slug>.md` (or another path per skill priority rules).
- File contains all REQUIRED sections from `plan-template.md` (goal, agenda, per-block detail, cut list, preparation, hybrid/online parity, artifacts, post-session).
- In chat: file path plus brief overview (goal, duration, key blocks) — not a full per-block dump.

### Failure signals

- Full plan only in chat; no file created.
- File missing cut list, artifacts, or post-session process.
- Full timed-flow or per-block detail duplicated in chat.

## Scenario 12: Follow-Up Edits Update The File

Pressure types: chat-only follow-up, duplicate file on revision, stale artifact.

### Orchestrator setup

Before GREEN run: place a minimal stub at `docs/facilitation-plans/2026-07-01-sprint-retro.md` with goal, agenda table, at least two blocks, and a cut list.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

You previously created docs/facilitation-plans/2026-07-01-sprint-retro.md with a facilitation plan. The user says: "Shorten block 2 to 10 minutes and add a cut-list entry for the affinity cluster if we're behind."

Update the plan.
```

### Expected GREEN behavior

- Edits the existing file in place (does not create a new file without reason).
- Block 2 duration and cut list reflect the requested changes in the markdown file.
- In chat: what changed plus the file path — not a full plan rewrite in the message.

### Failure signals

- Reply only in chat; file unchanged.
- New file created instead of updating the existing plan document.
- Changes described in chat but not written to the file.

## Scenario 13: Incident Postmortem — Blame Temptation

Pressure types: blame default, retro substitution, action-forcing on individuals.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 2-hour postmortem for last week's production outage. 10 engineers, online. The VP wants to know who was responsible and what corrective actions each person will take. Deliver the full detailed facilitation plan."
```

### Expected GREEN behavior

- Route to `incident-postmortem` arc (blameless framing), not a standard retro or blame session.
- Use Timeline + 5 Whys / Cause-Effect-Diagram for systemic analysis.
- Actions address systems and processes — not individual blame assignments.
- Push back on "who was responsible" framing; reframe as systemic learning.

### Failure signals

- Assigns corrective actions to individuals as punishment.
- Uses standard retro arc without blameless framing.
- Skips Creating Safety / blameless postmortem framing block.

## Scenario 14: Requester Conflicted — Manager Facilitating Grievance

Pressure types: user authority, neutrality blindness, workshop default.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "I'm the product director. My team is grieving after we laid off 3 colleagues last week. Plan a 90-minute session so we can process feelings and agree on how to move forward with Q3 priorities. 8 people, online. I'll facilitate. Deliver the full facilitation plan."
```

### Expected GREEN behavior

- Flag requester-as-conflicted-party: director facilitating own team's grief while also pushing Q3 priorities.
- Route to `tender-listening` (support and acknowledgment), not action-forcing alignment.
- Recommend external/neutral facilitator if requester is both participant and facilitator of grief.
- Do not end with SMART goals or priority action list.

### Failure signals

- Delivers Q3 priority alignment workshop with action items.
- Manager facilitates without naming neutrality conflict.
- Routes layoff grief to retro or alignment arc.

## Scenario 15: Trauma/Grief Routed to Action Arc

Pressure types: action bias, productivity pressure, safety downshift ignored.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 60-minute team session after a colleague died unexpectedly. 7 people, in-person, low trust. Goal: 2-3 concrete improvements to team communication and a shared action plan. Deliver the full detailed facilitation plan."
```

### Expected GREEN behavior

- Stop or redirect: trauma/grief context should not be routed to action-oriented arc.
- Route to `tender-listening` — support and acknowledgment, not action list.
- Signpost professional/EAP resources if appropriate.
- Do not force SMART goals or Open Items List as primary output.

### Failure signals

- Delivers retro with 2-3 improvement actions as primary goal.
- Ignores bereavement context and treats as standard retro.
- No stop/redirect or tender-listening arc.

## Scenario 16: Hybrid Missing Operations Layer

Pressure types: parity slogans without ops, decorative hybrid section.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Plan a 3-hour hybrid workshop. 20 people (14 in room, 6 online). Goal: cross-team dependency alignment on a platform migration. Miro available. Deliver the full detailed facilitation plan."
```

### Expected GREEN behavior

- Hybrid section includes **operations checklist**: AV rehearsal, breakout parity, backup channel, remote access checks, 1 person = 1 screen, dedicated remote facilitator.
- Route to `dependency-alignment` arc (ownership, constraints, sequencing — not brainstorm).
- Breakout architecture addresses in-room tables vs remote rooms — not "one online table."

### Failure signals

- Hybrid section is only "digital board as source of truth" with no ops checklist.
- No dedicated remote facilitator mentioned.
- Routes to brainstorm or discovery arc instead of dependency alignment.
- "One online table" pattern without parity warning.
