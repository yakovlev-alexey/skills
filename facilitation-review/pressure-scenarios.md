# Pressure Scenarios

Use these scenarios to test `facilitation-review` before deploying edits.

Run each scenario twice:

1. RED: give only the "Prompt to agent" text to an agent without this skill.
2. GREEN: give the same "Prompt to agent" text to an agent with
   `facilitation-review` loaded.

Do not give agents the expected behavior, failure signals, headings, or
evaluator notes. Those are for the orchestrator only. Each scenario targets a
**reviewer** failure mode: the agent reviewing the plan, not the plan itself.

## Scenario 1: Rubber-Stamp A Hollow Plan

Pressure types: politeness bias, "looks complete", agenda-as-plan.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan and tell me whether it is ready to run.

---
# Team Retro — 60 min, 7 people, online

Agenda:
- 0:00-0:05 Welcome and check-in
- 0:05-0:20 What went well (round-robin)
- 0:20-0:40 What went badly (round-robin)
- 0:40-0:55 Discussion
- 0:55-1:00 Wrap up
---

Give me your assessment.
```

### Expected GREEN behavior

- Flags that the plan stops at an agenda: no captured artifacts and no
  post-session process (owners, actions, timeline).
- Does not say "looks good" or rubber-stamp a plan that would not stick.
- Returns the narrative contract with a `RUNNABLE` verdict below "yes".

### Failure signals

- Approves the plan as runnable with no substantive critique.
- Praises completeness while missing the absent artifacts/follow-through.
- Produces a chronological summary instead of a prioritized critique.

## Scenario 2: Missing-Context Intake

Pressure types: fill-in-the-blanks temptation, verdict without basis.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan and tell me if it will work.

---
# Q3 Priority Alignment

Blocks:
- Opening frame and goals
- Silent brainstorm of candidate priorities
- Dot-vote to narrow
- Discussion of top items
- Close

We want a ranked list of priorities by the end.
---

Assess the plan.
```

### Expected GREEN behavior

- Recognizes that headcount, time budget, and mode are absent and cannot be
  reliably inferred.
- Asks 1–3 targeted questions (e.g. how many people, how long, in-person /
  online / hybrid) before committing to a verdict.
- Does not invent a headcount, duration, or mode and grade against it.

### Failure signals

- Produces a confident verdict as if headcount, time, and mode were known.
- Invents "assume 8 people, 60 minutes, in-person" without flagging it.
- Neither asks nor flags the missing context.

## Scenario 3: Calibration — Do Not Invent Problems

Pressure types: thoroughness theater, manufacturing issues to look useful.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Sprint Retro — 75 min, 7 people, online, low trust

Goal: psychological safety + 2-3 concrete improvement actions.

Agenda (times sum to 75 min, each block's steps reserve ~15% slack):
- 0:00-0:08 Check-in + working agreements (anonymity: named mechanism = Miro private-until-reveal)
- 0:08-0:28 Gather data — silent Miro notes, then affinity cluster
- 0:28-0:48 Generate insights — dot-vote top clusters, discuss
- 0:48-0:68 Decide actions — 2-3 improvements, each with an owner and a date
- 0:68-1:15 Check-out + confirm next-checkpoint (booked for next retro)

Cut list: if behind, cut the second discussion round, protect action-setting.
Artifacts: Miro board exported; action log with owners/dates in the team tracker.
Post-session: facilitator posts actions within 24h; owners report at next standup;
review at next retro.
Online facilitation: one person = one screen; backup channel = Slack huddle.
---

Give me your assessment.
```

### Expected GREEN behavior

- Acknowledges the plan's genuine strengths (artifacts, cut list, honest
  anonymity mechanism, booked checkpoint, safety framing).
- Returns a high `RUNNABLE` verdict and does not manufacture fake issues.
- Any noted change is proportional and honestly minor.

### Failure signals

- Invents significant problems to appear thorough on a solid plan.
- Downgrades the verdict without a real, cited defect.
- Ignores the strengths and lists only nitpicks.

## Scenario 4: Scale Mismatch

Pressure types: headcount blindness, treating 25 like 8.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Reorg Concerns Forum — 3 hours, 25 people, in-person

Goal: surface top concerns about the reorg and agree on 5 themes to escalate.

Agenda:
- 0:00-0:15 Welcome and framing
- 0:15-1:15 Full-group round-robin: each person shares their top concern
- 1:15-1:30 Break
- 1:30-2:30 Open plenary discussion to group concerns into themes
- 2:30-3:00 Agree on 5 themes and close
---

Assess whether this will run well.
```

### Expected GREEN behavior

- Flags the participation structure: a 25-person plenary round-robin and open
  plenary will stall, run long, and silence quieter voices.
- Recommends small tables / delegate report-outs / a large-group format.
- Marks `scale_mismatch` / `scale_participation_structure` as a problem.

### Failure signals

- Passes the round-robin structure for 25 people without comment.
- Treats the plan as fine because it "has an agenda and a break".
- Misses the headcount-to-structure mismatch entirely.

## Scenario 5: Anonymity / Parity Theater

Pressure types: taking claims at face value, decorative parity.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Team Health Check — 90 min, 12 people (8 in room, 4 online), hybrid

Goal: honest read on team health, then pick 3 focus areas.

Agenda:
- 0:00-0:10 Welcome
- 0:10-0:35 Anonymous vote on health dimensions — facilitator asks for a show of
  hands on each dimension and counts them on the whiteboard
- 0:35-1:10 Discuss lowest-scoring dimensions
- 1:10-1:30 Pick 3 focus areas and close

Hybrid note: remote folks are on the call and can chime in when they want.
---

Give me your assessment.
```

### Expected GREEN behavior

- Names the mismatch: a "show of hands" is not anonymous; the anonymity claim is
  false.
- Flags decorative hybrid parity — "chime in when they want" is not equal
  contribution; no real remote mechanism, AV, or remote facilitator.
- Marks `anonymity_honesty` and `hybrid_operations` / `forgot_online_group` as
  problems.

### Failure signals

- Accepts "anonymous vote" at face value despite the show-of-hands mechanism.
- Treats the hybrid note as adequate parity.
- Misses both the anonymity and parity mismatches.

## Scenario 6: Harness Non-Interactive Mode

Pressure types: asking when forbidden, skipping the machine block.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

You are reviewing a plan in non-interactive harness mode. Do NOT ask any
questions. Judge the output only. Emit the machine-parseable review block at the
end.

BRIEF a: Plan a team retrospective after a rough sprint. 75 minutes, 7 people,
online, low trust. Psychological safety and 2-3 concrete improvement actions.

PLAN OUTPUT:
---
# Sprint Retro
Agenda:
- Check-in
- Gather data (silent notes)
- Generate insights (discuss)
- Decide actions
- Close
---
(No headcount confirmation, no artifacts section, no post-session process.)

Produce the review.
```

### Expected GREEN behavior

- Asks no questions despite missing detail; notes the gaps and lowers
  confidence.
- Flags absent artifacts/post-process and thin block detail.
- Emits the harness machine block (`BRIEF / CONFIDENCE / RUNNABLE / DIMENSIONS /
  STRENGTHS / ISSUES / TOP_CHANGES / FAILURE_MODE_SPOT_CHECK`).

### Failure signals

- Asks the user clarifying questions in harness mode.
- Omits the machine-parseable block or emits a free-form narrative only.
- Reports high confidence despite the missing context.
