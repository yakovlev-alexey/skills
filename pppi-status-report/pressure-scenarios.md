# Pressure Scenarios

Use these scenarios to test `pppi-status-report` before deploying edits.

Run each scenario twice:

1. RED: give only the "Prompt to agent" text to an agent without this skill.
2. GREEN: give the same "Prompt to agent" text to an agent with `pppi-status-report` loaded.

Do not give agents the expected behavior, failure signals, headings, or evaluator notes. Those are for the orchestrator only.

## Scenario 1: Vague Request And Time Pressure

Pressure types: speed, apparent simplicity, shortcut temptation.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Сделай PPPI по моей работе за этот спринт."

They did not provide: reporting period dates, past PPPI examples, project list, where to publish, or source artifacts (tickets, PRs). They said: "I'm in a hurry — just draft it."

You have no prior PPPI examples in context. Proceed with the task. Say exactly what you do next and what you deliver (show the actual PPPI draft if you produce one).
```

### Expected GREEN behavior

- Ask 2-4 targeted questions before drafting, OR explicitly state assumptions and what is still missing.
- Do not silently default to a project-by-project table.
- If drafting before answers, use a neutral flat format (four sections) and mark unknowns — not a multi-project table invented from repo names.

### Failure signals

- Jumps straight to a full PPPI with a project × four-column table.
- Invents reporting period, projects, or facts without stating assumptions.
- Skips intake entirely because the user said they are in a hurry.
- Omits the Ideas section or renames it (Insights, Notes, etc.) without mirroring a past PPPI.

## Scenario 2: Mirror Past Flat PPPI

Pressure types: format fidelity, content invention.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Update my PPPI for mid-sprint review."

Past PPPI format from their wiki (mirror this if you produce output):

---
# PPPI — mid-sprint 30.09.2025

## Progress
- Shipped communal API endpoint and monitoring dashboard
- Onboarded first permanent consumer

## Plans
- Connect more consumers
- Validate throughput numbers with platform team

## Problems
- No blockers right now; future overload risk if adoption spikes

## Ideas
- Add OpenAI-compatible layer
- Write internal runbook wiki page
---

No other context. Proceed. Say what you do next and deliver the PPPI (or explain why you cannot yet).
```

### Expected GREEN behavior

- Mirror the flat four-section structure and section names (Progress, Plans, Problems, Ideas).
- Do not convert to a project table unless the past PPPI used one.
- If facts are missing, ask for sources or deliver a structure with placeholders — do not copy example content from the past PPPI as if it were current progress.

### Failure signals

- Switches to a project table despite flat past format.
- Renames Ideas to Insights, Notes, or another label.
- Reuses the example bullets as current progress without saying they are placeholders.

## Scenario 3: "Standard Template" Rationalization

Pressure types: user authority, template familiarity, project-table default.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

The user asks: "Need a PPPI for my 1-on-1 with manager tomorrow. Cover my infra work."

They did not name projects or link a tracker. They said: "Standard PPPI template is fine."

You have no past PPPI from this user in context. Proceed. Say what you do next and show the PPPI structure/content you would deliver.
```

### Expected GREEN behavior

- Treat "standard template" as the four PPPI sections, not as a project table.
- Ask 2-4 targeted questions (period, grouping preference, publish location, fact sources) OR use flat four sections with explicit assumptions.
- Keep Ideas as Ideas unless past PPPI uses a different label.

### Failure signals

- Defaults to project × Progress/Plans/Problems/Ideas table because a wiki example uses that shape.
- Does not ask about grouping or period.
- Renames Ideas without a mirrored past PPPI.
