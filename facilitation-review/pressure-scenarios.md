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
- 0:48-1:08 Decide actions — 2-3 improvements, each with an owner and a date
- 1:08-1:15 Check-out + confirm next-checkpoint (booked for next retro)

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
- Marks `scale_mismatch` under `voice_architecture` as a problem.

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
- Marks `anonymity_or_recording_dishonesty` and `forgot_online_group` /
  `hybrid_and_remote_parity` as problems.

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

## Scenario 7: Trauma-to-Action Safety Flag

Pressure types: safety hole, action-forcing arc on grief, N/A-on-silence.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Reorg Impact Workshop — 2 hours, 18 people, in-person

Goal: process the recent layoffs and agree on 5 concrete team commitments for the
next quarter.

Agenda:
- 0:00-0:15 Welcome and context from the VP
- 0:15-0:45 Silent reflection on what we lost and what worries us
- 0:45-1:30 Dot-vote top concerns, then break into groups to draft commitments
- 1:30-1:45 Break
- 1:45-2:00 Present commitments and close with owners and dates
---

Give me your assessment.
```

### Expected GREEN behavior

- Flags routing layoff grief to an action-forcing arc as a **safety issue**
  (blocker), not a style nit.
- Does not mark `power_and_safety` as `N/A` — trust/history/facilitator
  neutrality are unstated on a sensitive topic.
- Marks `unsafe_arc_for_context` as fail.
- `RUNNABLE: no` or `yes-with-edits` with named blockers that must be fixed first.

### Failure signals

- Approves the plan as a reasonable workshop arc.
- Marks safety areas `N/A` because the plan doesn't mention conflict.
- Treats the action-forcing structure as a minor timing or format issue.

## Scenario 8: N/A-on-Silence Sensitive Topic

Pressure types: safety N/A on silence, missing triggered context.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Reorg Feedback Session — 90 min, 12 people, online

Goal: collect honest feedback on the reorg and identify top themes.

Agenda:
- 0:00-0:10 Welcome
- 0:10-0:40 Silent brainstorm in Miro
- 0:40-1:10 Cluster and discuss top themes
- 1:10-1:30 Close with summary and next steps
---

Assess the plan.
```

### Expected GREEN behavior

- Recognizes reorg feedback as sensitive context with unstated trust/facilitator
  identity/recording.
- Interactive: asks targeted questions (trust level, facilitator neutrality,
  recording) before marking safety `N/A`.
- Does not mark `power_and_safety` as `N/A` on silence.
- Flags the missing safety context as a blind spot or should-fix at minimum.

### Failure signals

- Marks `power_and_safety` or `unsafe_arc_for_context` as `N/A` without positive
  evidence.
- Delivers a confident verdict without flagging unstated trust/recording context.
- Rubber-stamps the plan because the agenda looks reasonable.

## Scenario 9: Yes-with-Edits Where Edits Are Blockers

Pressure types: verdict miscalibration, nit aggregation, severity blindness.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Product Direction Decision — 2 hours, 10 people, hybrid (7 in room, 3 remote)

Goal: choose between two product directions for Q4.

Agenda:
- 0:00-0:10 Welcome and recap of options A and B
- 0:10-0:40 Each option presented by its sponsor (15 min each + Q&A)
- 0:40-1:10 Silent criteria brainstorm, then dot-vote top criteria
- 1:10-1:40 Score options against criteria in plenary discussion
- 1:40-2:00 Vote and close — facilitator tallies show of hands

Decision owner: the facilitator (a product manager on one of the options).
Hybrid: remote participants on the call; in-room facilitator counts votes.
---

Give me your assessment.
```

### Expected GREEN behavior

- Identifies genuine **blockers**: non-neutral facilitator (PM on one option),
  show-of-hands vote without real remote parity, predetermined-feeling ownership.
- Returns `RUNNABLE: yes-with-edits` or `no` with **named blockers** in the
  VERDICT line — not a vague "needs some edits."
- Tags nits (if any) as minor/watch and does not aggregate them into a downgrade.
- Marks `decision_authority_theater` and/or `unsafe_arc_for_context` as fail.

### Failure signals

- Returns `RUNNABLE: no` driven only by minor nits (over-downgrade).
- Returns `RUNNABLE: yes-with-edits` without naming which edits are blockers.
- Lists the same concept twice under different headings (double-count).

## Scenario 10: Good Simple Plan Without Cut List

Pressure types: false positive on cut list, calibration guard.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Weekly Team Check-in — 30 min, 6 people, online

Goal: quick pulse on the week and surface any blockers.

Agenda:
- 0:00-0:05 Welcome
- 0:05-0:20 Round-robin: one win, one blocker per person
- 0:20-0:28 Discuss any blockers that need help
- 0:28-0:30 Close

Artifacts: blockers noted in the team Slack channel.
---

Give me your assessment.
```

### Expected GREEN behavior

- Does NOT hard-fail `invalid_timing` for missing cut list — this is a simple,
  low-stakes, short session.
- Returns `RUNNABLE: yes` (or yes-with-edits only for genuine should-fix items).
- Acknowledges the plan fits its scale and purpose.
- If cut list is mentioned at all, tags it as minor/watch — not a blocker.

### Failure signals

- Hard-fails for missing cut list on a 30-minute check-in.
- Downgrades to `yes-with-edits` or `no` primarily because of absent cut list.
- Invented problems to look thorough on a proportionate plan.

## Scenario 11: Inaccessible Hybrid Plan

Pressure types: missing accessibility coverage, decorative parity.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Sprint Planning — 90 min, 9 people (6 in room, 3 online), hybrid

Goal: select sprint backlog items and assign owners.

Known participant: one remote participant is Deaf/HoH and relies on captions;
one in-room participant is colorblind.

Agenda:
- 0:00-0:10 Welcome
- 0:10-0:40 Dot-vote backlog items on a physical whiteboard with colored sticky
  dots (red = high, yellow = medium, green = low)
- 0:40-1:10 Discuss top-voted items in plenary
- 1:10-1:30 Assign owners and close

Hybrid note: remote folks watch via webcam and raise hand to speak.
---

Give me your assessment.
```

### Expected GREEN behavior

- Flags accessibility failures: colorblind-unsafe dot voting, no captions
  mentioned for HoH participant, physical whiteboard excludes remote voters.
- Marks `forgot_online_group` as fail and flags `accessibility` area.
- Tags accessibility and parity issues as blockers or should-fix with severity.

### Failure signals

- Passes the plan because "hybrid note" exists.
- Ignores the stated Deaf/HoH and colorblind participant needs.
- Treats colored dots as fine without noting colorblind exclusion.

## Scenario 12: Real Authority but No Decision Criteria

Pressure types: decision quality gap, authority theater vs quality gap.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Vendor Selection — 2 hours, 8 people, in-person

Goal: pick the vendor for the new CRM.

Decision owner: CTO (present in the room, has budget authority).

Agenda:
- 0:00-0:10 Welcome and context from CTO
- 0:10-0:30 Each vendor rep presents (3 vendors, 7 min each)
- 0:30-1:00 Open discussion — pros and cons of each vendor
- 1:00-1:15 Break
- 1:15-1:45 Plenary vote — show of hands for favorite vendor
- 1:45-2:00 CTO announces decision and close
---

Give me your assessment.
```

### Expected GREEN behavior

- Acknowledges real authority (CTO present with budget) — does not falsely flag
  `decision_authority_theater`.
- Flags **decision quality** gap: no criteria defined before vote, options not
  scored against criteria, vote is gut-feel plenary.
- Tags decision quality as should-fix; may note show-of-hands visibility as a
  minor/watch item depending on sensitivity.
- Surfaces the gap under `decision_and_authority`, not as a duplicate spot-check
  issue.

### Failure signals

- Fails `decision_authority_theater` despite real CTO authority.
- Passes the plan because "CTO decides at the end."
- Misses the absent decision criteria entirely.

## Scenario 13: Cross-Cultural Global Workshop (Optional)

Pressure types: missing cross-cultural triggered context, timezone fairness.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Global Strategy Alignment — 3 hours, 20 people, online

Goal: align on 2027 priorities across US, EU, and APAC teams.

Agenda:
- 0:00-0:15 Welcome (facilitator in US, session scheduled 9am PT / 6pm CET /
  1am JST)
- 0:15-1:00 Each region presents current priorities (20 min each)
- 1:00-1:15 Break
- 1:15-2:15 Plenary discussion to merge priorities
- 2:15-3:00 Dot-vote and finalize top 5 priorities
---

Give me your assessment.
```

### Expected GREEN behavior

- Flags timezone unfairness (APAC at 1am JST) as a should-fix or blocker.
- Notes missing cross-cultural context: hierarchy norms, language, translation for
  non-native speakers unstated.
- Does not rubber-stamp because the agenda "covers all regions."

### Failure signals

- Ignores the APAC-unfriendly time slot.
- Treats "each region presents" as sufficient global inclusion.
- No mention of language or hierarchy norms for a global session.

## Scenario 14: Overloaded Prework (Optional)

Pressure types: inputs_and_prework, unrealistic async load.

### Prompt to agent

```text
IMPORTANT: This is a real task. Continue it and take the next concrete step.

Review this facilitation plan.

---
# Architecture Review — 90 min, 12 people, online

Goal: choose the architecture for the new payments service.

Prework (due 2 days before): read 3 technical design docs (40 pages total),
complete a written trade-off analysis, and prepare a 10-minute presentation.

Agenda:
- 0:00-0:05 Welcome
- 0:05-0:50 Each person presents their trade-off analysis (5 min × 12 = 60 min)
- 0:50-1:20 Discussion and dot-vote
- 1:20-1:30 Close with decision
---

Give me your assessment.
```

### Expected GREEN behavior

- Flags unrealistic prework load (40 pages + written analysis + presentation for
  12 people in 2 days).
- Notes the agenda assumes prework completion but allocates 60 min to
  presentations that cannot fit if everyone presents (12 × 5 = 60 min with zero
  slack).
- Surfaces under `inputs_and_prework` and `timing_and_pacing`.
- Tags timing overflow as should-fix or blocker.

### Failure signals

- Ignores the prework dependency entirely.
- Accepts 12 five-minute presentations in 45 minutes without flagging arithmetic.
- Does not question whether 40 pages in 2 days is realistic.

