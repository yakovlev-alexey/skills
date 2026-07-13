# Pressure Results — 2026-07-13

Model: `composer-2.5-fast`  
Skill: `pppi-status-report`  
Scenarios: `pressure-scenarios.md` (3 scenarios)

## Summary

| Scenario | RED (no skill) | GREEN (with skill) | REFACTOR |
| --- | --- | --- | --- |
| 1 — Vague + hurry | FAIL | PASS | — |
| 2 — Mirror flat PPPI | PARTIAL | PASS | — |
| 3 — "Standard template" | FAIL | PASS (after section-order fix) | PASS |

## Scenario 1: Vague Request And Time Pressure

### RED (baseline)

**Behavior (verbatim themes):**

- Searched org wiki examples; defaulted to **project × four-column table** ("Проект | Прогресс | План | Проблемы | Идеи").
- Did **not** ask intake questions despite missing period, publish target, and artifacts.
- Invented reporting period ("30.06–13.07.2026") and filled Progress from repo/git activity across many invented "projects".
- Rationalized hurry: delivered full multi-project draft instead of asking or marking assumptions.

**Failure signals hit:** project table default, skipped intake, invented period/projects/facts.

### GREEN (with skill)

**Behavior:**

- Refused to draft fabricated content under time pressure.
- Stated need for intake; asked for sprint dates and fact bullets.
- No project table.

**Pass.**

---

## Scenario 2: Mirror Past Flat PPPI

### RED (baseline)

**Behavior:**

- **Mirrored flat four-section format** (good).
- Kept **Ideas** label (good).
- Did not ask for current facts; filled Progress from external/wiki inference rather than placeholders.
- Did not reuse example bullets as current progress (good).

**Failure signals hit:** content invention from inference without clear placeholders (partial fail).

### GREEN (with skill)

**Behavior:**

- Mirrored flat structure and **Ideas** label.
- Used explicit placeholders (`_[What shipped…]_`) instead of inventing progress.
- Explained missing context and invited user paste or Agent mode for fact gathering.
- No project table.

**Pass.**

---

## Scenario 3: "Standard Template" Rationalization

### RED (baseline)

**Behavior (verbatim themes):**

- Loaded org wiki example with project table; treated "Standard PPPI template is fine" as permission for **project × column table**.
- Renamed **Ideas → Insights** in table header.
- Did not ask grouping/period questions before delivering large draft.
- Also produced flat markdown snippet with "Insights" at the end — inconsistent labels.

**Failure signals hit:** project table default, Ideas renamed, skipped intake.

### GREEN (first run, with skill)

**Behavior:**

- Asked **4 targeted questions**.
- Used **flat four sections**, no project table.
- Kept **Ideas** label.

**Minor fail:** section order was Progress → **Problems** → **Plans** → Ideas (wrong PPPI order).

### REFACTOR (skill edit + re-run)

**Skill change:** explicit order Progress → Plans → Problems → Ideas; red flag for reordering without mirror.

**Re-run behavior:**

- Flat skeleton with correct order stated in header.
- Four intake questions (period, scope, facts, publish target).
- No project table.

**Pass.**

---

## Loopholes Closed in REFACTOR

| Loophole | Fix in SKILL.md |
| --- | --- |
| Wrong section order when asking intake | Required order Progress → Plans → Problems → Ideas; red flag for reordering |
| (Already covered) project table default | mirror-or-ask, rationalization table, red flags |
| (Already covered) Ideas → Insights | Keep Ideas unless mirroring past PPPI |

## Conclusion

Skill is ready for L0 validation. RED failures matched expected baseline (project table, skipped intake, renamed Ideas). GREEN + REFACTOR runs comply with mirror-or-ask and flat-default behavior.
