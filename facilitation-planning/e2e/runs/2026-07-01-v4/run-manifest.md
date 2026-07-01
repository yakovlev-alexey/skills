# Run manifest

run_id: 2026-07-01-v4
skill_commit: 612e1563222be9b92c4bfca9db05bd9a47e2dbd6 (pre-pass-3 commit; skill edits uncommitted at run time)
awesome_facilitation_commit: 2d074b50 (pre-pass-3; catalogue source uncommitted at run time)
executor: subagent
reviewer: subagent (Brief J)
trigger: pass 3 — catalogue expansion + planning-estimation arc + Brief J

## Briefs run in this folder

- Brief J only (new pass 3 coverage). Briefs A–I covered in prior runs (2026-07-01, v2, v3).

## Pinned briefs.md

# E2E Briefs

End-to-end briefs for `facilitation-planning`. Run before deploying skill edits.

## Orchestrator workflow

1. Create `e2e/runs/YYYY-MM-DD/`.
2. Write `run-manifest.md`: embed the full current text of `e2e/briefs.md` and `e2e/facilitator-review.md`, plus `skill_commit` (git SHA), executor/reviewer metadata, and trigger reason.
3. For each brief below: launch an **executor subagent** with `facilitation-planning` loaded. Give only the **Prompt to executor**. Save the full deliverable as `brief-<id>-output.md`.
4. For each output: launch a **separate facilitator review subagent**. Give the brief prompt, the plan output, and `e2e/facilitator-review.md`. Do not give skill text or evaluator notes. Save as `brief-<id>-review.md`.
5. Write `summary.md`: failure-mode rollup across briefs + facilitator review themes.
6. Commit the run folder. Never overwrite a prior run.

Do not give executors or reviewers the evaluator notes in this file.

---

## Brief A: Rough-sprint retrospective

Scale: small (7 people). Time: 60–90 minutes. Mode: online.

### Prompt to executor

```text
Plan a team retrospective after a rough sprint. 75 minutes, 7 people, online, low trust. We need psychological safety and 2-3 concrete improvement actions. Run the full facilitation-planning workflow and deliver the detailed plan.
```

### Evaluator notes

- Expected arc family: `retro-safe` (or equivalent low-trust retro arc)
- Check all six pressure failure modes
- Must include session artifacts and post-session process
- Online-only: hybrid section not required but online facilitation must be explicit
- Catalogue practices only

---

## Brief B: Two-day hybrid Strategy Lab

Scale: large (25 people). Time: two days. Mode: hybrid.

### Prompt to executor

```text
Plan a two-day hybrid Strategy Lab for 25 participants (18 in the room, 7 online). Goal: agree on the top 5 strategic priorities for the next quarter, each with an owner. High political sensitivity — we cannot promise budget increases. Deliver the full facilitation plan.
```

### Evaluator notes

- Expected arc family: `strategy-lab`
- Must respect budget constraint in framing and blocks
- Mandatory hybrid/online parity section
- Multi-day scale: day arcs, co-facilitation, not a single-meeting plan
- Check failure modes 4 (hybrid) and 3 (scale appropriate to two days, not under-scoped)

---

## Brief C: Product discovery kickoff

Scale: medium (10 people). Time: 3 hours. Mode: in-person.

### Prompt to executor

```text
Plan a 3-hour product discovery kickoff workshop. 10 people, in-person, new cross-functional team. Goal: shared understanding of user problems and a prioritized opportunity backlog. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: `discovery-opportunities` or `discovery-kickoff`
- In-person: hybrid section not required
- Must include artifacts and post-session validation/follow-up
- Check failure modes 5 (artifacts/post-process) and 2 (catalogue only)

---

## Brief D: Alignment with override risk

Scale: medium (8 people). Time: 90 minutes. Mode: in-person.

### Prompt to executor

```text
Plan a 90-minute leadership alignment session for 8 directors. Goal: decide whether to invest in Platform A or Platform B for Q3. The CFO will attend but has signaled they may override whatever the group decides. We need documented criteria and ranked preferences, not just vibes. Deliver the full facilitation plan.
```

### Evaluator notes

- Expected: authority/decision-rule intake reflected in plan; criteria-before-vote
- Must name authority reality (outcome may be overridden) and set acceptance criteria
- Must include session artifacts and post-session process
- Check spot-checks: `decision_authority`, `timing_cut_list`

---

## Brief E: Conflict / repair + safety downshift

Scale: medium (10 people). Time: 90 minutes. Mode: online.

### Prompt to executor

```text
Plan a 90-minute online session for a 10-person cross-functional team in open conflict after a missed launch. Trust is low; two subgroups blame each other. Goal: understanding and repair — not a sprint retro with action items. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: conflict/repair (understanding and repair, NOT action-forcing retro)
- Safety-downshift: if Safety Check reads low, drop action-forcing
- Anonymity claims must name actual mechanism (real vs theatrical)
- Check spot-checks: `conflict_safety_handling`, `anonymity_honesty`

---

## Brief F: Large single-session forum

Scale: large (25 people). Time: 3 hours. Mode: in-person.

### Prompt to executor

```text
Plan a 3-hour in-person forum for 25 participants. Goal: surface the top 5 concerns about the upcoming reorg and agree on themes to escalate to leadership. Single session — not a multi-day offsite. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: `large-group-forum` (tables/delegates, not plenary round-robins)
- Must include break at mandated cadence and cut list
- Must include session artifacts and post-session process
- Check spot-checks: `scale_participation_structure`, `timing_cut_list`

---

## Brief G: Cross-team dependency alignment

Scale: medium (14 people, 3 teams). Time: 2 hours. Mode: hybrid.

### Prompt to executor

```text
Plan a 2-hour hybrid session for 14 people across Platform, Data, and Product teams. 10 in the room, 4 online. Goal: clarify ownership, constraints, and sequencing for a platform migration — not brainstorm new ideas. Each team lead can commit for their team. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: `dependency-alignment`
- Must include hybrid operations checklist and dedicated remote facilitator
- Follow-through governance: decision log, owner authority check, checkpoint booked
- Check spot-checks: `hybrid_operations`, `follow_through_governance`

---

## Brief H: Incident / blameless postmortem

Scale: medium (10 people). Time: 90 minutes. Mode: online.

### Prompt to executor

```text
Plan a 90-minute online postmortem after a 4-hour production outage. 10 engineers, mixed seniority. Goal: blameless timeline, contributing factors, and systemic actions — not individual blame. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: `incident-postmortem`
- Blameless framing required; Timeline + 5 Whys or Cause-Effect-Diagram
- Actions must be systemic, not punitive
- Facilitator contingencies on risky blocks
- Check spot-checks: `blameless_postmortem`, `facilitator_contingencies`

---

## Brief I: Async-first distributed convergence

Scale: medium (12 people, 4 timezones). Time: 3 days async + 90 min live. Mode: online.

### Prompt to executor

```text
Plan an async-first session for 12 people across US, EU, and APAC timezones. 3 days async contribution on a Miro board, then one 90-minute live convergence call in overlap hours. Goal: prioritize Q3 initiatives from pre-submitted ideas — not a live brainstorm. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: `async-first`
- Agenda marks `[async]` vs `[live]` blocks
- Timezone/energy intake reflected; shorter live block
- Follow-through governance with checkpoint booked before session ends
- Check spot-checks: `async_structure`, `follow_through_governance`

---

## Brief J: Hybrid PI / sprint planning

Scale: medium (12 people, 2 teams). Time: 2.5 hours. Mode: hybrid.

### Prompt to executor

```text
Plan a 2.5-hour hybrid PI planning session for 12 people (8 in the room, 4 online). Two Scrum teams sharing a platform backlog. Known combined velocity: 40 story points per sprint. Backlog has ~40 refined items needing sizing and sequencing for the next sprint. Goal: a committed, capacity-bound sprint plan with owners — not a brainstorm. Each team lead can commit for their team. Deliver the full detailed facilitation plan.
```

### Evaluator notes

- Expected arc family: `planning-estimation`
- Must use catalogue estimation practices (Planning Poker, Affinity Estimation, Magic Estimation, or similar)
- Capacity/velocity honored — plan must not over-commit beyond 40 points
- Criteria-before-vote for sequencing; estimation distinguished from commitment
- Agreement check (Fist to Five or Gradients of Agreement) on final plan
- Hybrid operations checklist and dedicated remote facilitator
- Follow-through governance: decision log, "not doing" list, owner authority, checkpoint booked
- Check spot-checks: `estimation_capacity_realism`, `hybrid_operations`, `follow_through_governance`


## Pinned facilitator-review.md

# Facilitator Review

Use this prompt when a **dedicated reviewer subagent** evaluates an E2E plan output.

## Reviewer role

You are an experienced facilitator. Judge whether the plan is **runnable in a real room** — not whether an agent followed skill rules.

## Input you receive

- The brief prompt (user message given to the executor)
- The full plan output from the executor
- This file (`facilitator-review.md`)

You do **not** receive skill text, pressure-scenario evaluator notes, or expected arc names.

## Dimensions

Give qualitative feedback (no numeric scores) for each:

| Dimension | What to judge |
| --- | --- |
| Intake and arc fit | Right session shape for the stated goal, participants, and constraints |
| Timing realism | Blocks sum to the time budget; depth is feasible in the room |
| Practice selection | Formats fit the context; transitions between blocks make sense |
| Participant dynamics | Trust, safety, and political sensitivity handled appropriately |
| Facilitator usability | Clear instructions, frames, parking-lot handling; minimal guesswork |
| Hybrid/online practicality | If applicable: parity rules are actionable, not decorative |
| Artifacts and follow-through | Outputs and post-session process would actually stick |
| Decision authority | Decision rule, sponsor, and whether outcomes can stick or be overridden |
| Conflict and safety handling | Conflict/repair vs action-forcing; safety downshift when trust is low |
| Timing and cut list | Step sums fit blocks; breaks at cadence; explicit cut/protect list |
| Scale and participation | Participation structure matches headcount (no 25-person round-robins) |
| Anonymity honesty | Any "anonymous" claim names the actual mechanism |
| Hybrid operations | If hybrid: AV, breakout parity, backup channel, remote facilitator — not decorative |
| Facilitator contingencies | Risky blocks include fallback moves (silence, dominance, escalation, behind schedule) |
| Follow-through governance | Decision log, "not doing" list, dissent, sponsor sign-off, owner authority, checkpoint booked |
| Async structure | If async-first: blocks marked async vs live; timezone overlap honored |
| Blameless postmortem | If incident/postmortem: systemic actions, no individual blame |
| Estimation and capacity realism | If planning/estimation: sizing practices fit context; plan respects known velocity/capacity; estimation vs commitment distinguished |
| Top changes | What you would edit before running this for real |

## Output contract

Return exactly this structure for the orchestrator to save as `brief-<id>-review.md`:

```text
BRIEF: <a | b | c | d | e | f | g | h | i | j>
CONFIDENCE: high | medium | low
RUNNABLE: yes | yes-with-edits | no

DIMENSIONS:
- intake_and_arc_fit: <one sentence>
- timing_realism: <one sentence>
- practice_selection: <one sentence>
- participant_dynamics: <one sentence>
- facilitator_usability: <one sentence>
- hybrid_online_practicality: <one sentence, or N/A for in-person-only>
- artifacts_and_follow_through: <one sentence>
- decision_authority: <one sentence, or N/A if not a decision session>
- conflict_safety_handling: <one sentence, or N/A if not applicable>
- timing_cut_list: <one sentence>
- scale_participation_structure: <one sentence>
- anonymity_honesty: <one sentence, or N/A if anonymity not claimed>
- hybrid_operations: <one sentence, or N/A if not hybrid>
- facilitator_contingencies: <one sentence, or N/A if no risky blocks>
- follow_through_governance: <one sentence>
- async_structure: <one sentence, or N/A if not async-first>
- blameless_postmortem: <one sentence, or N/A if not incident/postmortem>
- estimation_capacity_realism: <one sentence, or N/A if not planning/estimation>

STRENGTHS:
- <2-3 concrete bullets>

ISSUES:
- <2-5 specific bullets>

TOP_CHANGES:
- <2-4 actionable edits before running for real>

FAILURE_MODE_SPOT_CHECK:
- skipped_intake: pass | fail — <one line>
- invented_practice: pass | fail — <one line>
- scale_mismatch: pass | fail — <one line>
- forgot_online_group: pass | fail | n/a — <one line>
- no_artifacts_or_post_process: pass | fail — <one line>
- wrong_output_language: pass | fail | n/a — <one line>
- decision_authority: pass | fail | n/a — <one line>
- conflict_safety_handling: pass | fail | n/a — <one line>
- timing_cut_list: pass | fail — <one line>
- scale_participation_structure: pass | fail — <one line>
- anonymity_honesty: pass | fail | n/a — <one line>
- hybrid_operations: pass | fail | n/a — <one line>
- facilitator_contingencies: pass | fail | n/a — <one line>
- follow_through_governance: pass | fail — <one line>
- async_structure: pass | fail | n/a — <one line>
- blameless_postmortem: pass | fail | n/a — <one line>
- estimation_capacity_realism: pass | fail | n/a — <one line>
```

## Rules

- Do not produce a chronological summary of the plan.
- Do not use numeric ratings beyond the RUNNABLE verdict.
- Cite specific plan sections when noting issues.
- If the plan is truncated or missing sections, lower confidence and say what is missing.
- Judge facilitation quality, not markdown formatting polish.
