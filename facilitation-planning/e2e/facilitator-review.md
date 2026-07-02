# Facilitator Review — E2E Harness Glue

Use this prompt when a **dedicated reviewer subagent** evaluates an E2E plan
output for `facilitation-planning`.

This file is **harness glue**. The reviewer rubric — dimensions and
failure-mode checks — is owned by the `facilitation-review` skill. Load that
skill and judge with its `references/review-dimensions.md`. This file only adds
the harness-specific constraints and the stable machine-parseable output block
the harness depends on.

## Setup

1. Load the `facilitation-review` skill and follow its persona, workflow, and
   dimension rubric (`references/review-dimensions.md`).
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
- **Catalogue-only `practice_honesty`.** For this harness only, apply the
  stricter reading of the `practice_honesty` dimension/check: a named branded
  practice must appear in the `facilitation-planning` catalogue digest with a
  correct source, otherwise it fails. This stricter reading is reported in the
  machine block as `invented_practice`. (In the standalone skill,
  `practice_honesty` allows legitimate non-catalogue practices; that relaxation
  does not apply here.)
- **Ask no questions**; this is a non-interactive run.

## Output contract

Return exactly this structure for the orchestrator to save as
`brief-<id>-review.md`. The dimension and check names map directly to
`facilitation-review`'s `references/review-dimensions.md`; the format below is
fixed because the harness depends on it.

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

Note: `invented_practice` is the harness label for the catalogue-only reading of
`practice_honesty` (see harness constraints above).

## Rules

- Do not produce a chronological summary of the plan.
- Do not use numeric ratings beyond the RUNNABLE verdict.
- Cite specific plan sections when noting issues.
- If the plan is truncated or missing sections, lower confidence and say what is
  missing.
- Judge facilitation quality, not markdown formatting polish.
