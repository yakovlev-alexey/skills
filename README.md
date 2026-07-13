# Agent Skills

Public agent skills for Codex, Claude Code, Cursor, and other tools that support
the `SKILL.md` skill format.

My dotfiles install these public skills from the remote repository through
`ai/skills.json`: [yakovlev-alexey/dotfiles](https://github.com/yakovlev-alexey/dotfiles).
Dotfiles-specific skills live in the dotfiles repository instead.

## Skills

### Agentlytics

| Skill | Use when |
| --- | --- |
| [`agentlytics-setup`](agentlytics-setup/SKILL.md) | Starting the Agentlytics relay, joining or refreshing local history, discovering the username, or fixing missing MCP visibility. |
| [`agentlytics-session-analysis`](agentlytics-session-analysis/SKILL.md) | Analyzing agentic development sessions, prompt quality, agent collaboration habits, coding-agent trajectories, or Agentlytics MCP history. |

### Facilitation

| Skill | Use when |
| --- | --- |
| [`facilitation-planning`](facilitation-planning/SKILL.md) | Facilitating, moderating, or running a meeting, workshop, session, retro, retrospective, brainstorm, ideation, discovery, planning, strategy session, decision-making, kickoff, alignment, or workshop agenda. |
| [`facilitation-review`](facilitation-review/SKILL.md) | Reviewing, critiquing, evaluating, stress-testing, or sanity-checking a facilitation plan, session agenda, workshop design, or meeting plan — right after facilitation-planning or for a plan built any other way. |

### Status Reporting

| Skill | Use when |
| --- | --- |
| [`pppi-status-report`](pppi-status-report/SKILL.md) | Creating, updating, or reviewing a PPPI (Progress, Plans, Problems, Ideas) status report, PPP weekly update, mid-sprint or mid-review PPPI, or 1-on-1 status prep. |

### TypeScript Web Apps

| Skill | Use when |
| --- | --- |
| [`web-app-design`](web-app-design/SKILL.md) | Choosing which TypeScript web app architecture guidance applies across frontend, backend, contracts, state, and tests. |
| [`web-app-project-defaults`](web-app-project-defaults/SKILL.md) | Creating a new TypeScript web app, greenfield full-stack app, monorepo, Astro site, React app, Vite app, Fastify API, Prisma service, or shadcn/ui project. |
| [`web-app-testing`](web-app-testing/SKILL.md) | Choosing test coverage for TypeScript web apps, React workflows, backend slices, static checks, integration tests, E2E tests, unit tests, or Storybook states. |

### Frontend Architecture

| Skill | Use when |
| --- | --- |
| [`frontend-slice-architecture`](frontend-slice-architecture/SKILL.md) | Organizing TypeScript frontend files, vertical product slices, shared code, imports, exports, file names, folders, barrels, or package boundaries. |
| [`frontend-state-and-data`](frontend-state-and-data/SKILL.md) | Handling frontend server state, async reads, mutations, cache invalidation, optimistic updates, UI filters, drafts, wizards, Nano Stores, or TanStack Query. |
| [`react-page-widget-composition`](react-page-widget-composition/SKILL.md) | Building or refactoring React pages, route targets, widgets, presentational components, widget nesting, page-owned layout, colocated CSS, render props, or Storybook states. |

### Backend And Contracts

| Skill | Use when |
| --- | --- |
| [`backend-slice-architecture`](backend-slice-architecture/SKILL.md) | Building or refactoring Node.js, Fastify, PostgreSQL, Prisma, Zod, OpenAPI, backend vertical slices, endpoints, use cases, commands, queries, domain rules, or transactions. |
| [`fullstack-contracts`](fullstack-contracts/SKILL.md) | Sharing frontend and backend TypeScript types, Zod schemas, API contracts, OpenAPI schemas, request or response models, generated clients, or package boundaries. |

## Install

The easiest path is the [`skills`](https://skills.sh/) CLI:

```bash
pnpx skills add yakovlev-alexey/skills --all
```

Install for one agent:

```bash
pnpx skills add yakovlev-alexey/skills --agent codex -y
pnpx skills add yakovlev-alexey/skills --agent claude-code -y
pnpx skills add yakovlev-alexey/skills --agent cursor -y
```

Install selected skills only:

```bash
pnpx skills add yakovlev-alexey/skills --agent codex --skill web-app-design backend-slice-architecture -y
```

List available skills before installing:

```bash
pnpx skills add yakovlev-alexey/skills --list
```

Update installed skills later:

```bash
pnpx skills update
```

## Manual Install

Clone the repository and copy or symlink individual skill directories into the
agent's skills directory.

```bash
git clone https://github.com/yakovlev-alexey/skills.git ~/Repos/skills
```

Common user-level locations:

| Agent | Directory |
| --- | --- |
| Codex | `~/.codex/skills` |
| Claude Code | `~/.claude/skills` |
| Shared local agent layer | `~/.agents/skills` |

Example:

```bash
mkdir -p ~/.codex/skills
ln -s ~/Repos/skills/web-app-design ~/.codex/skills/web-app-design
```

## Maintenance

- Keep one installable skill per top-level directory: `skill-name/SKILL.md`.
- Use lowercase hyphenated skill names.
- Keep supporting material inside the owning skill directory, such as `references/`, `scripts/`, or `agents/`.
- After adding, renaming, or changing a skill, update this README in the same change with the current short description.
- Keep README descriptions short and trigger-focused; the full workflow belongs in `SKILL.md`.

### L0 validation

Run structural checks before opening a PR:

```bash
./scripts/validate-skills.sh
```

The gate validates:

- [agentskills.io specification](https://agentskills.io/specification) via `skills-ref` (`agentskills validate`)
- One installable skill per top-level directory (no nested `SKILL.md`)
- `SKILL.md` body at most 500 lines
- `description` starts with `Use when`
- `evals/evals.json` schema when present

CI runs the same script on pull requests and pushes to `main`.
