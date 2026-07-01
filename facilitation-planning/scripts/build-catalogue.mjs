#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const DEFAULT_SOURCE = path.join(os.homedir(), "Repos", "awesome-facilitation");

function resolveSourcePath() {
  const arg = process.argv.find((value, index) => index > 1 && !value.startsWith("-"));
  const fromEnv = process.env.FACILITATION_SOURCE;
  const raw = arg ?? fromEnv ?? DEFAULT_SOURCE;
  return path.resolve(raw.replace(/^~(?=\/|$)/, os.homedir()));
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseReadmeSections(readme) {
  const sections = [];
  const lines = readme.split("\n");
  let current = null;

  for (const line of lines) {
    const heading = line.match(/^## (.+)$/);
    if (heading) {
      if (current) sections.push(current);
      current = { title: heading[1].trim(), files: [] };
      continue;
    }

    if (!current) continue;

    const link = line.match(/^- \[[^\]]+\]\(([^)]+\.md)\)/);
    if (link) {
      current.files.push(link[1]);
    }
  }

  if (current) sections.push(current);
  return sections.filter((section) => section.title !== "Contents" && section.title !== "Source Libraries");
}

function parsePracticeFile(content) {
  const lines = content.split("\n");
  const title = lines.find((line) => line.startsWith("# "))?.slice(2).trim() ?? "Untitled";
  const introStart = lines.findIndex((line) => line.startsWith("# "));
  const introLines = [];

  for (let index = introStart + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (line.startsWith("|")) break;
    if (line.trim()) introLines.push(line.trim());
  }

  const practices = [];
  for (const line of lines) {
    const row = line.match(/^\| \[([^\]]+)\]\(([^)]+)\) \| (.+) \|$/);
    if (row) {
      practices.push({
        name: row[1].trim(),
        source: row[2].trim(),
        whenToUse: row[3].trim(),
      });
    }
  }

  return { title, intro: introLines.join(" "), practices };
}

function escapeCell(value) {
  return value.replace(/\|/g, "\\|");
}

function buildCatalogue(sourceRoot) {
  const readmePath = path.join(sourceRoot, "README.md");
  if (!fs.existsSync(readmePath)) {
    throw new Error(`README not found at ${readmePath}`);
  }

  const sections = parseReadmeSections(readFile(readmePath));
  const chunks = [
    "# Facilitation practice catalogue",
    "",
    "> GENERATED — do not edit by hand.",
    "> Regenerate with `node scripts/build-catalogue.mjs` from `awesome-facilitation`.",
    "",
    `Source repository: \`${sourceRoot}\``,
    "",
    "Select formats only from this digest. Practice names and source links stay in English.",
    "",
  ];

  let total = 0;

  for (const section of sections) {
    if (section.files.length === 0) continue;

    chunks.push(`## ${section.title}`);
    chunks.push("");

    for (const relativeFile of section.files) {
      const filePath = path.join(sourceRoot, relativeFile);
      if (!fs.existsSync(filePath)) {
        throw new Error(`Practice file not found: ${filePath}`);
      }

      const parsed = parsePracticeFile(readFile(filePath));
      chunks.push(`### ${parsed.title}`);
      chunks.push("");
      if (parsed.intro) {
        chunks.push(parsed.intro);
        chunks.push("");
      }

      chunks.push("| Practice | When to use | Source |");
      chunks.push("| --- | --- | --- |");

      for (const practice of parsed.practices) {
        chunks.push(
          `| ${escapeCell(practice.name)} | ${escapeCell(practice.whenToUse)} | [${escapeCell(practice.name)}](${practice.source}) |`,
        );
        total += 1;
      }

      chunks.push("");
    }
  }

  chunks.push(`_Total practices: ${total}_`);
  chunks.push("");
  return { markdown: chunks.join("\n"), total };
}

function main() {
  const sourceRoot = resolveSourcePath();
  const outputPath = path.join(path.dirname(new URL(import.meta.url).pathname), "..", "references", "catalogue.md");
  const { markdown, total } = buildCatalogue(sourceRoot);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, markdown, "utf8");
  console.log(`Wrote ${outputPath} (${total} practices from ${sourceRoot})`);
}

main();
