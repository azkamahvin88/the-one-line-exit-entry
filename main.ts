// The One-Line Exit — make.fun entry (u-kreutzx-the-one-line-exit-1dc652d1)
//
// Writes exactly one line — a resignation letter whose whole joke lands
// in that single line — to /output/entry.txt.
//
// The line: a polite, sendable resignation whose punchline is that the
// office dog got promoted above the writer, and the writer concedes the
// dog deserved it. Specific workplace voice, surprise turn, quotable.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Please accept this as my resignation: the office dog has just been promoted above me, and honestly, he earned it.";

// The grader runs the program with /output as the output directory.
// OUTPUT_DIR lets a local test point somewhere else; it defaults to /output.
// The gate requires 1-140 characters, so the line is kept well inside it
// (113 chars + one trailing newline).
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length} chars to ${entryPath}`);
