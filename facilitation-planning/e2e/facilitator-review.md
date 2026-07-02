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
