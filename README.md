# Skills

Public agent skills live next to this file as directories with `SKILL.md`.

This repository is mounted by dotfiles as the `ai/skills` submodule. Dotfiles keeps
its install registry separately at `ai/skills.json` and installs these public skills
with `./scripts/install-skills`.

After making changes in dotfiles, run:

```bash
./scripts/install-skills
```
