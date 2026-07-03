#!/usr/bin/env bash
set -euo pipefail

MAX_SKILL_LINES=500
DESCRIPTION_PREFIX="Use when"
SKILLS_REF_VERSION="0.1.1"
SKILLS_REF_WHEEL_SHA256="d35db5bb8de71ae301daf5ca9cb71f8a555e8c6f83a6d40e46a5bc09f8f461b5"

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

venv_dir="$repo_root/.venv"
python_bin="${PYTHON:-python3}"

ensure_venv() {
  if [[ ! -d "$venv_dir" ]]; then
    "$python_bin" -m venv "$venv_dir"
  fi
  # shellcheck disable=SC1091
  source "$venv_dir/bin/activate"
  if "$venv_dir/bin/python" -c "import skills_ref" >/dev/null 2>&1; then
    return
  fi
  pip install --quiet --upgrade pip

  local wheel_dir
  wheel_dir="$(mktemp -d)"
  trap 'rm -rf "$wheel_dir"' RETURN

  pip download --quiet --no-deps "skills-ref==${SKILLS_REF_VERSION}" -d "$wheel_dir"
  local wheel_path
  wheel_path="$(find "$wheel_dir" -name 'skills_ref-*.whl' -print -quit)"
  if [[ -z "$wheel_path" ]]; then
    echo "error: failed to download skills-ref wheel" >&2
    exit 1
  fi

  local actual_hash
  if command -v shasum >/dev/null 2>&1; then
    actual_hash="$(shasum -a 256 "$wheel_path" | awk '{print $1}')"
  else
    actual_hash="$(sha256sum "$wheel_path" | awk '{print $1}')"
  fi

  if [[ "$actual_hash" != "$SKILLS_REF_WHEEL_SHA256" ]]; then
    echo "error: skills-ref wheel hash mismatch" >&2
    echo "  expected: $SKILLS_REF_WHEEL_SHA256" >&2
    echo "  actual:   $actual_hash" >&2
    exit 1
  fi

  pip install --quiet "$wheel_path"
}

resolve_validate_cli() {
  if [[ -x "$venv_dir/bin/agentskills" ]]; then
    echo "$venv_dir/bin/agentskills"
    return
  fi
  if [[ -x "$venv_dir/bin/skills-ref" ]]; then
    echo "$venv_dir/bin/skills-ref"
    return
  fi
  echo "error: neither agentskills nor skills-ref found in venv" >&2
  exit 1
}

validate_evals_json() {
  local evals_file="$1"
  "$venv_dir/bin/python" - "$evals_file" <<'PY'
import json
import sys
from pathlib import Path

path = Path(sys.argv[1])
try:
    data = json.loads(path.read_text(encoding="utf-8"))
except json.JSONDecodeError as exc:
    print(f"invalid JSON: {exc}")
    sys.exit(1)

if isinstance(data, dict):
    evals = data.get("evals", data.get("cases"))
    if evals is None:
        print("expected top-level 'evals' array or eval case list")
        sys.exit(1)
elif isinstance(data, list):
    evals = data
else:
    print("expected JSON object or array")
    sys.exit(1)

if not isinstance(evals, list) or not evals:
    print("evals must be a non-empty array")
    sys.exit(1)

for index, item in enumerate(evals):
    if not isinstance(item, dict):
        print(f"evals[{index}] must be an object")
        sys.exit(1)
    if not any(key in item for key in ("prompt", "query", "input")):
        print(f"evals[{index}] must include prompt, query, or input")
        sys.exit(1)
PY
}

check_repo_rules() {
  local skill_dir="$1"
  local skill_md="$skill_dir/SKILL.md"
  local errors=0

  local line_count
  line_count="$(wc -l <"$skill_md" | tr -d ' ')"
  if (( line_count > MAX_SKILL_LINES )); then
    echo "  - SKILL.md has ${line_count} lines (max ${MAX_SKILL_LINES})" >&2
    errors=1
  fi

  if ! "$venv_dir/bin/python" - "$skill_dir" "$DESCRIPTION_PREFIX" <<'PY'
import sys
from pathlib import Path
from skills_ref import read_properties

skill_dir = Path(sys.argv[1])
prefix = sys.argv[2]
props = read_properties(skill_dir)
if not props.description.startswith(prefix):
    print(f"  - description must start with {prefix!r}", file=sys.stderr)
    sys.exit(1)
PY
  then
    errors=1
  fi

  local evals_file="$skill_dir/evals/evals.json"
  if [[ -f "$evals_file" ]]; then
    if ! validate_evals_json "$evals_file" >&2; then
      echo "  - invalid evals/evals.json" >&2
      errors=1
    fi
  fi

  return "$errors"
}

main() {
  ensure_venv
  local validate_cli
  validate_cli="$(resolve_validate_cli)"

  local nested_skill_md=()
  while IFS= read -r path; do
    nested_skill_md+=("$path")
  done < <(find . -path './.venv' -prune -o -name SKILL.md -print | while read -r p; do
    rel="${p#./}"
    if [[ "$rel" == */*/* ]]; then
      echo "$rel"
    fi
  done)

  local exit_code=0

  if ((${#nested_skill_md[@]} > 0)); then
    echo "error: nested SKILL.md files are not allowed (one skill per top-level directory):" >&2
    for path in "${nested_skill_md[@]}"; do
      echo "  - $path" >&2
    done
    exit_code=1
  fi

  local skill_dirs=()
  for dir in */; do
    dir="${dir%/}"
    [[ -f "$dir/SKILL.md" ]] || continue
    skill_dirs+=("$dir")
  done

  if ((${#skill_dirs[@]} == 0)); then
    echo "error: no top-level skills found" >&2
    exit 1
  fi

  for skill_dir in "${skill_dirs[@]}"; do
    echo "Validating: $skill_dir"
    local skill_failed=0

    if ! "$validate_cli" validate "$skill_dir"; then
      echo "  - agentskills.io contract failed" >&2
      skill_failed=1
    fi

    if ! check_repo_rules "$skill_dir"; then
      skill_failed=1
    fi

    if (( skill_failed == 0 )); then
      echo "  ok"
    else
      exit_code=1
    fi
  done

  if (( exit_code == 0 )); then
    echo "L0 validation passed (${#skill_dirs[@]} skills)."
  else
    echo "L0 validation failed." >&2
  fi

  exit "$exit_code"
}

main "$@"
