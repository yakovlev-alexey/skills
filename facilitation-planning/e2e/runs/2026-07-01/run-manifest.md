# Run manifest

run_id: 2026-07-01
skill_commit: b7967669adf2e3c13869981eac16aa6e943b6574
executor: subagent
reviewer: subagent (one per brief)
trigger: e2e harness backfill

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
| Top changes | What you would edit before running this for real |

## Output contract

Return exactly this structure for the orchestrator to save as `brief-<id>-review.md`:

```text
BRIEF: <a | b | c>
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
```

## Rules

- Do not produce a chronological summary of the plan.
- Do not use numeric ratings beyond the RUNNABLE verdict.
- Cite specific plan sections when noting issues.
- If the plan is truncated or missing sections, lower confidence and say what is missing.
- Judge facilitation quality, not markdown formatting polish.

