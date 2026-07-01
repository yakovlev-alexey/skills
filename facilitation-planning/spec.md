# facilitation-planning — design spec

- Status: approved design, pending implementation
- Date: 2026-07-01
- Skill location: `~/Repos/skills/facilitation-planning/`
- Catalogue source of truth: `~/Repos/awesome-facilitation`

## Summary

`facilitation-planning` is a broad facilitation assistant skill. A user arrives wanting
to run, moderate, or facilitate a meeting, workshop, retro, brainstorm, discovery,
planning, strategy session, decision, or kickoff. Loaded with this skill, the agent
runs a short intake, proposes 2-3 session skeletons built from catalogued practices,
and then produces a detailed, block-by-block facilitation plan whose depth scales to
the size of the session.

Practices come only from a bundled digest of the `awesome-facilitation` catalogue. The
digest is regenerated from that repository by a sync script, so `awesome-facilitation`
stays the single source of truth while the skill remains self-contained and installable
on any machine.

## Goals

- Turn a loosely stated facilitation request into a concrete, runnable plan.
- Ground every recommended format in the `awesome-facilitation` catalogue, with links to
  primary sources.
- Produce plans at the depth of the reference example (agenda, per-block frames, board
  templates, facilitator instructions, artifacts, post-session process) — scaled to the
  session.
- Keep the catalogue single-sourced in `awesome-facilitation` and synced into the skill.
- Ship with tests: RED/GREEN pressure scenarios plus full end-to-end runs.

## Non-goals

- No live meeting bot, timer, or real-time co-facilitation runtime.
- No editing of the `awesome-facilitation` catalogue content itself (the skill consumes
  it, it does not curate it).
- No automatic scheduled sync; the sync script is run manually when the catalogue
  changes.

## Users and triggers

Primary user: a facilitator or team lead (often working with the agent) who needs to
design a session. Trigger phrases in the skill `description` should include: facilitate,
moderate, run a meeting/workshop/session, retro, retrospective, brainstorm, ideation,
discovery, planning, strategy session, decision-making, kickoff, alignment, workshop
agenda.

## Behavior: three-phase workflow

### Phase 1 — Intake

Gather the minimum context needed to design well. If the request lacks essentials, ask
2-4 targeted questions rather than inventing answers. Intake checklist:

- Goal and desired output/type of result (decision, alignment, ideas, learning, plan).
- Participants: count, roles, seniority, group dynamics, trust level.
- Time budget and hard timing constraints.
- Mode: in-person, online, or hybrid.
- Constraints: what cannot be promised, sensitive topics, org/political limits.
- Desired artifacts and what happens after the session.

### Phase 2 — Skeletons

Offer 2-3 candidate session arcs drawn from `references/session-patterns.md`. Each arc is
a sequence of blocks mapped to specific catalogued practices, with trade-offs and a
recommendation. The user picks or adjusts one.

### Phase 3 — Detailed plan

Expand the chosen arc into a full plan using `references/plan-template.md`, scaling depth
to session size (a 30-minute meeting is not a two-day Strategy Lab).

## Output contract (`plan-template.md`)

- Session goal and key outcomes.
- Agenda table: Time / Block / Format / Output.
- Per block: purpose ("why"); format (catalogue practice + link); on-screen frame or
  board template (ASCII); facilitator instruction; timed step-by-step flow; block output.
- Preparation: space, materials, on-screen frames; facilitator role; parking lot.
- Hybrid/online parity: separate online group, digital equivalents of physical boards,
  equal presentation slot.
- Session artifacts and a post-session process (owner, action, timeline, next step).

## Architecture and files

```text
skills/facilitation-planning/
├── SKILL.md                       # workflow + rules, thin, English, YAML frontmatter (name, description)
├── references/
│   ├── catalogue.md               # GENERATED digest of awesome-facilitation practices (English, with source links)
│   ├── session-patterns.md        # library of reusable session skeletons keyed to goals, mapped to catalogue practices
│   └── plan-template.md           # output contract with ASCII board/frame examples, artifacts, post-process
├── scripts/
│   └── build-catalogue.mjs        # regenerates references/catalogue.md from awesome-facilitation
├── pressure-scenarios.md          # RED/GREEN failure-mode scenarios
├── pressure-results-2026-07-01.md # results of the first run
└── spec.md                        # this document
```

Decomposition rationale: a thin `SKILL.md` holds the workflow and rules; large material
(catalogue, patterns, template) lives in `references/` for progressive disclosure and
token efficiency, matching the existing repo skills.

## Catalogue and sync script

- `scripts/build-catalogue.mjs` (Node, no exotic dependencies) reads the
  `awesome-facilitation` repo (README plus category files under `*/`), and assembles
  `references/catalogue.md`: grouped by category, one row per practice as
  `Practice | When to use | source link`.
- Source repo path resolves from a CLI argument or environment variable, defaulting to
  `~/Repos/awesome-facilitation`.
- The script is run manually after the catalogue changes. `awesome-facilitation` remains
  the single source of truth; `references/catalogue.md` is a generated artifact.
- `SKILL.md` rule: the agent selects formats only from `catalogue.md`. If no suitable
  practice exists, say so honestly and offer the closest match or a plain generic
  structure — never invent branded practice names.

## Language policy

- `SKILL.md`, `references/`, scripts, and this spec are in English (matches the skills
  repo and the English catalogue).
- Generated facilitation plans are produced in the language of the user's request.
  Practice names and source links stay as in the catalogue (English).

## Guardrails / common mistakes

- Do not design before intake; ask targeted questions when essentials are missing.
- Do not invent practices outside the catalogue.
- Scale depth to session size.
- Always account for online participants in hybrid sessions.
- Always drive to artifacts and a concrete next step.
- Respect "do not promise" constraints from intake.
- Plan language follows the request; practice names and links follow the catalogue.

## Testing plan

### Pressure scenarios (`pressure-scenarios.md`, RED/GREEN)

Approximately six scenarios covering the core failure modes:

1. Skips intake — jumps straight to a generic plan from a one-line request.
2. Invents a practice not in the catalogue.
3. Scale mismatch — Strategy-Lab-sized plan for a 30-minute meeting.
4. Forgets the online group in a hybrid session.
5. Produces a plan without artifacts or a post-session process.
6. Wrong output language — ignores the request language.

RED = agent without the skill; GREEN = agent with the skill loaded. Expected behavior,
failure signals, and evaluator notes are kept out of the prompt given to the agent.

### End-to-end briefs (full runs in-session, reviewed against failure modes)

- Brief A: team retrospective after a rough sprint, 60-90 minutes, small scale.
- Brief B: Strategy Lab inspired by the Стратсессия-2026 example, two days, hybrid, large
  scale.
- Brief C: product discovery / kickoff workshop, medium scale.

More briefs can be added if the first runs reveal gaps.

## Placement and commits

- New skill under `~/Repos/skills/facilitation-planning/` plus a row in
  `~/Repos/skills/README.md`.
- No required changes to `awesome-facilitation` (it is the sync source). An optional
  README note that the catalogue powers the skill is possible but not required.
- Commit messages: short imperative English (skills repo convention).

## Open questions / future work

- Whether to add an optional note in `awesome-facilitation` README pointing at the skill.
- Whether to later add scheduled/CI sync verification that `catalogue.md` is up to date.
