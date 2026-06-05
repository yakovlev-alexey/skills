# Agent Skills

Public agent skills for Codex, Claude Code, Cursor, and other tools that support
the `SKILL.md` skill format.

This repository is also mounted by my dotfiles as the `ai/skills` submodule. The
dotfiles repository keeps machine-specific install policy in `ai/skills.json` and
runs `./scripts/install-skills` during setup: [yakovlev-alexey/dotfiles](https://github.com/yakovlev-alexey/dotfiles).

## Skills

### Agent Configuration

| Skill | Use when |
| --- | --- |
| [`agent-config-in-dotfiles`](agent-config-in-dotfiles/SKILL.md) | Changing MCP servers, skills, plugins, AGENTS.md, Codex/Cursor/OpenCode/Claude settings, approval rules, or generated agent config through dotfiles. |

### Agentlytics

| Skill | Use when |
| --- | --- |
| [`agentlytics-setup`](agentlytics-setup/SKILL.md) | Starting the Agentlytics relay, joining or refreshing local history, discovering the username, or fixing missing MCP visibility. |
| [`agentlytics-session-analysis`](agentlytics-session-analysis/SKILL.md) | Analyzing agentic development sessions, prompt quality, agent collaboration habits, coding-agent trajectories, or Agentlytics MCP history. |

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
npx skills add yakovlev-alexey/skills --all
```

Install for one agent:

```bash
npx skills add yakovlev-alexey/skills --agent codex -y
npx skills add yakovlev-alexey/skills --agent claude-code -y
npx skills add yakovlev-alexey/skills --agent cursor -y
```

Install selected skills only:

```bash
npx skills add yakovlev-alexey/skills --agent codex --skill web-app-design backend-slice-architecture -y
```

List available skills before installing:

```bash
npx skills add yakovlev-alexey/skills --list
```

Update installed skills later:

```bash
npx skills update
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
