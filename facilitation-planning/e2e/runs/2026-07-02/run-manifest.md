# Run manifest

run_id: 2026-07-02
skill_commit: 5ce70a97d7e079777783d5cafafa36a059842510 (facilitation-review improvements + harness glue sync; planning outputs pinned from prior runs)
executor: pinned from prior runs (2026-07-01-v2/v3/v4 — facilitation-planning skill unchanged)
reviewer: subagent (facilitation-review post-improvements)
trigger: facilitation-review skill improvements — E2E re-review of all briefs a–j with updated rubric and harness glue

## Briefs run in this folder

All briefs a–j. Plan outputs pinned from prior E2E runs (planning skill unchanged). Fresh facilitator reviews with updated `facilitation-review` skill and synchronized `e2e/facilitator-review.md` harness glue.

| Brief | Output source |
| --- | --- |
| A–F | `e2e/runs/2026-07-01-v2/` |
| G–I | `e2e/runs/2026-07-01-v3/` |
| J | `e2e/runs/2026-07-01-v4/` |

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

# Facilitator Review — E2E Harness Glue

Use this prompt when a **dedicated reviewer subagent** evaluates an E2E plan
output for `facilitation-planning`.

This file is **harness glue**. The reviewer rubric — review areas and
spot-checks — is owned by the `facilitation-review` skill. Load that
skill and judge with its `references/review-dimensions.md`. This file only adds
the harness-specific constraints and the stable machine-parseable output block
the harness depends on.

## Setup

1. Load the `facilitation-review` skill and follow its persona, workflow, and
   review area rubric (`references/review-dimensions.md`).
2. Operate in **harness mode** (non-interactive): ask no questions; note gaps
   and lower confidence instead.

## Input you receive

- The brief prompt (user message given to the executor)
- The full plan output from the executor
- This file (`facilitator-review.md`)

You do **not** receive the text of the skill under test (`facilitation-planning`
and its references), pressure-scenario evaluator notes, or expected arc names.
Loading the `facilitation-review` reviewer skill is expected and is distinct
from reading the skill under test. Judge the **output** only.

## Harness-only constraints

- **Identify the brief** as one of `a–j` in the machine block below.
- **Do not read the skill under test.** Judge the plan output, not rule
  adherence.
- **Catalogue-only `catalogue_practice_honesty`.** For this harness only, apply
  the stricter reading: a named branded practice must appear in the
  `facilitation-planning` catalogue digest with a correct source, otherwise it
  fails. This stricter reading is reported in the machine block as
  `catalogue_practice_honesty`. (In the standalone skill,
  `practice_selection_and_honesty` allows legitimate non-catalogue practices; that
  relaxation does not apply here.)
- **Ask no questions**; this is a non-interactive run.

## Output contract

Return exactly this structure for the orchestrator to save as
`brief-<id>-review.md`. The review area and spot-check names map directly to
`facilitation-review`'s `references/review-dimensions.md`; the format below is
fixed because the harness depends on it.

```text
BRIEF: <a | b | c | d | e | f | g | h | i | j>
CONFIDENCE: high | medium | low
RUNNABLE: yes | yes-with-edits | no

DIMENSIONS:
- intake_and_arc_fit: <one sentence>
- timing_and_pacing: <one sentence>
- practice_selection_and_honesty: <one sentence>
- power_and_safety: <one sentence, or N/A with positive evidence if no sensitive context>
- voice_architecture: <one sentence>
- facilitator_usability: <one sentence>
- hybrid_and_remote_parity: <one sentence, or N/A for in-person-only>
- accessibility: <one sentence, or N/A if no stated/inferable needs>
- inputs_and_prework: <one sentence, or N/A if no prework/async dependency>
- sensemaking_and_synthesis: <one sentence>
- decision_and_authority: <one sentence, or N/A if not a decision/planning session>
- artifacts_and_follow_through: <one sentence>
- privacy_and_confidentiality: <one sentence, or N/A if no anonymity/confidentiality/recording claim>
- blameless_postmortem: <one sentence, or N/A if not incident/postmortem>

STRENGTHS:
- <2-3 concrete bullets>

ISSUES:
- [severity: blocker | should-fix | minor/watch] <2-5 specific bullets>

TOP_CHANGES:
- [severity: blocker | should-fix | minor/watch] <2-4 actionable edits before running for real>

FAILURE_MODE_SPOT_CHECK:
- skipped_intake: pass | fail — <one line>
- invalid_timing: pass | fail — <one line>
- scale_mismatch: pass | fail — <one line>
- forgot_online_group: pass | fail | n/a — <one line>
- unsafe_arc_for_context: pass | fail | n/a — <one line>
- decision_authority_theater: pass | fail | n/a — <one line>
- anonymity_or_recording_dishonesty: pass | fail | n/a — <one line>
- no_artifacts_or_post_process: pass | fail — <one line>
- wrong_output_language: pass | fail | n/a — <one line>
- catalogue_practice_honesty: pass | fail — <one line>
```

Note: `catalogue_practice_honesty` is the harness label for the catalogue-only
reading of practice honesty (see harness constraints above).

## Rules

- Do not produce a chronological summary of the plan.
- Do not use numeric ratings beyond the RUNNABLE verdict.
- Cite specific plan sections when noting issues.
- If the plan is truncated or missing sections, lower confidence and say what is
  missing.
- Judge facilitation quality, not markdown formatting polish.
- Tag every issue and top change with a severity tier.

