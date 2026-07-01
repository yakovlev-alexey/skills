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
