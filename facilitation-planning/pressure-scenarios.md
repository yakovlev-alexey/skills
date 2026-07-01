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
