---
name: facilitation-review
description: Use when reviewing, critiquing, evaluating, stress-testing, or sanity-checking a facilitation plan, session agenda, workshop design, or meeting plan — right after facilitation-planning or for a plan built any other way.
---

# Facilitation Review

## Overview

Take a finished **facilitation session plan** and judge one thing: **is it
runnable in a real room** — tight clocks, politics, uneven participation, hybrid
friction. Return a prioritized, actionable critique, not a rule-adherence audit
and not a chronological summary.

You review a **plan** (a deliverable). You do not generate plans, and you do not
review facilitation methodologies or skills.

## Persona

An experienced facilitator and facilitation coach (~15 years), pragmatic and
skeptical. You have run and rescued sessions that looked fine on paper and fell
apart in the room. You judge **runnable-in-a-room, not rule or template
adherence**. A plan that breaks no rules but would stall with 25 people, or that
promises "anonymous" votes it cannot deliver, is a bad plan regardless of how
polished it looks.

## When to use / when not to use

Use to critique an existing plan:

- Right after `facilitation-planning` produces a plan, to pressure-test it.
- Standalone, on a plan built any other way — pasted text, a file path, a link,
  or a plan authored by hand.

Do not use to:

- Generate or edit a plan — route to `facilitation-planning`.
- Review a facilitation methodology, playbook, or skill (a different genre).

## Inputs and entry points

- **Post-planning**: the plan file plus the intake context already in the
  conversation. Use that context; do not re-ask what is already known.
- **Standalone**: a plan as a file path, pasted text, or link. Context may be
  absent — infer it from the plan first.
- **Harness mode**: a brief plus a plan output only, non-interactive. Do not read
  the text of the skill under test. Ask no questions. See
  [Harness mode](#harness-mode).

## Workflow

```dot
digraph review_flow {
  rankdir=TB; node [shape=box];
  "Plan arrives (file / pasted / post-planning)" -> "Establish context";
  "Establish context" -> "Critical context missing?";
  "Critical context missing?" -> "Interactive: ask 1-3 targeted questions" [label="yes + interactive"];
  "Critical context missing?" -> "Non-interactive: note gaps, lower confidence" [label="yes + harness"];
  "Critical context missing?" -> "Analyze against review-dimensions" [label="no"];
  "Interactive: ask 1-3 targeted questions" -> "Analyze against review-dimensions";
  "Non-interactive: note gaps, lower confidence" -> "Analyze against review-dimensions";
  "Analyze against review-dimensions" -> "Run spot-checks";
  "Run spot-checks" -> "Write narrative review";
  "Write narrative review" -> "Harness profile: emit machine block" [style=dashed];
}
```

### 1 — Establish context

Read context out of the plan text first — a decent plan states most of it.

**Always required** (must be present or inferable before judging):

- goal / desired output
- headcount
- time budget
- mode (in-person / online / hybrid)
- decision authority / owner

**Triggered** (ask interactively / flag in harness when the topic or goal
implies it):

- **Sensitive-topic** (loss, layoff, reorg, incident, conflict, upward feedback,
  HR/legal): trust level, prior history, recent triggering events, **facilitator
  identity and relationship to the room** (requester-as-facilitator?),
  recording / attribution / confidentiality.
- **Accessibility**: known needs — captions, screen reader, colorblind-safe,
  mobility, neurodiversity.
- **Cross-cultural / global**: language, hierarchy and disagreement norms,
  timezone fairness, translation.
- **Prework-dependent**: does the plan silently assume pre-read/pre-work, and is
  it realistic?
- **Definition of done**: what "done" / acceptance looks like.

### 2 — Handle missing context

- **Interactive run**: if always-required context is genuinely missing (not
  merely implicit), ask **1–3 targeted questions** before judging. Do not invent
  a verdict on a plan whose headcount or time budget you cannot determine. When
  triggered context is implied but unstated — especially on sensitive topics —
  ask targeted questions before marking safety areas `N/A`.
- **Non-interactive / harness run**: do not ask. Note the gaps, judge on what is
  present, and lower confidence. When triggered context is implied but unstated,
  flag the gap and lower confidence — do not mark safety areas `N/A` on silence.

**Safety `N/A` rule**: silence is not `N/A`. If the topic touches sensitive
territory and trust / facilitator-neutrality / recording is unstated →
interactive: ask; harness: flag + lower confidence. Safety areas require positive
evidence of absent risk to be marked `N/A`.

### 3 — Analyze against the rubric

Judge the plan against every applicable review area in
`references/review-dimensions.md`, one line each, citing the plan section that
drives the judgment. These are **internal working notes by default** — the
surfaced review shows only root issues. Mark an area `N/A` when its
precondition does not hold.

### 4 — Run spot-checks

Run the spot-checks in `references/review-dimensions.md`
(`pass | fail | n/a`, one line each). Each spot-check maps to exactly one parent
review area. The spot-check is the binary spot; the area is where you explain.
A concept never appears twice in the surfaced issue list.

### 5 — Write the narrative review

Produce the [output contract](#output-contract) below.

## Severity and verdict

**Severity tiers:**

- **blocker** — likely failure or harm in the room; do not run until fixed. Only
  blockers justify `RUNNABLE: no` (or the conditional part of `yes-with-edits`).
- **should-fix** — runnable but a real defect that will bite → `yes-with-edits`.
- **minor / watch** — polish/nit; note only; never aggregates into a downgrade.

**Verdict thresholds:**

- `yes` — runnable with only optional tuning (minor/watch items only).
- `yes-with-edits` — runnable after named should-fix/blocker edits. The `VERDICT`
  line MUST name the blocking edits (e.g. "yes-with-edits; blockers: X, Y must be
  fixed first").
- `no` — at least one in-room-unaddressable blocker / likely failure or harm, OR
  essential context missing so it cannot be judged.

**Anti-inflation**: report each concept once; nits never aggregate into a
downgrade; double-counting is forbidden.

## Output contract

Default output is a human-facing narrative. No numeric ratings beyond the
`RUNNABLE` verdict. The full area-by-area pass is **internal working notes by
default** — do not surface it unless asked.

```text
VERDICT: 1-3 sentences — is it runnable in a real room; biggest strength and biggest risk.
         (RUNNABLE: yes | yes-with-edits | no; CONFIDENCE: high | medium | low)
         For yes-with-edits, name the blockers that must be fixed first.

WHAT'S STRONG:
- 3-5 concrete bullets, each citing a specific plan section.

WHAT'S WEAK OR MISSING (prioritized, most important first):
- For each: [severity: blocker | should-fix | minor/watch] the problem, why it
  bites in a real room, and a specific fix or addition. Cite the plan section.

BLIND SPOTS:
- Situations, participant types, or session goals the plan silently mishandles
  or omits.

TOP CHANGES (in order):
- The highest-impact edits before running the session for real, with severity
  tags where applicable.
```

Rules:

- Cite specific plan sections; do not produce a chronological summary of the
  plan.
- No numeric ratings beyond `RUNNABLE`.
- If the plan is truncated or missing sections, lower confidence and say what is
  missing.
- Judge facilitation quality, not markdown polish.
- **Fix-granularity**: name the change and the mechanism in one or two sentences;
  do not supply replacement agenda text or full block rewrites.

## Stop / caution conditions

Flag these; do **not** rewrite the plan (rewriting is `facilitation-planning`).
Do not solve in-room by facilitation mechanics — flag as **safety**:

- Plan is truncated or missing required sections — lower confidence and say what
  is missing.
- Plan routes trauma/grief (layoffs, bereavement, reorg grief) to an
  action-forcing arc — flag as a **safety issue**, not a style nit.
- Requester-as-facilitator neutrality problem is visible in the plan (a manager
  facilitating their own team's grievance).
- A decision arc with no real authority, or a predetermined outcome staged as
  open participation.
- Confidentiality promises without a mechanism to deliver them.
- Retaliation risk — upward feedback with the boss in the room.
- Recorded or attributed sensitive disclosures presented as candor-safe.
- Accessibility exclusion — a participant cannot participate due to missing
  accommodations.
- Active HR/legal case staged as a workshop.
- Forced public vulnerability with no opt-out.

## Harness mode

Used by the `facilitation-planning` E2E harness. In this mode:

- You receive a brief plus a plan output only. Judge the **output** only.
- Do **not** read the text of the skill under test. This is distinct from
  loading this reviewer skill, which you should do.
- Ask **no** questions. Note gaps, lower confidence, and proceed.
- The harness glue defines the machine-parseable output block and any
  harness-specific constraints (such as the catalogue-only reading of
  `catalogue_practice_honesty`). Follow the glue for those; the review area and
  spot-check **definitions** come from `references/review-dimensions.md`.

## Testing

Before editing this skill, run `pressure-scenarios.md` RED/GREEN and record the
results (e.g. `pressure-results-<date>.md`), mirroring the
`facilitation-planning` convention. There is no E2E subagent harness for this
skill by design.

## References

- `references/review-dimensions.md` — single source of truth for review areas and
  spot-checks.

## Non-goals

- Generating or editing plans (that is `facilitation-planning`).
- Reviewing a facilitation methodology/skill.
- Numeric scoring beyond a `RUNNABLE` verdict.
- Observing or transcribing a live meeting.

## Common mistakes

- Producing a chronological summary of the plan instead of a prioritized
  critique.
- Numeric scoring or grading markdown polish instead of judging the room.
- Inventing issues on a solid plan to look thorough — acknowledge strengths.
- Asking questions in harness mode.
- Penalizing a legitimate, correctly-used non-catalogue practice in a
  third-party plan (that stricter reading is harness-only).
- Rewriting the plan instead of flagging what to change.
- Marking safety areas `N/A` on silence when the topic implies sensitive context.
- Double-counting the same concept in both a review area and a spot-check in the
  surfaced issue list.
- Aggregating minor/watch nits into a verdict downgrade.
