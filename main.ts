// One-Liner Laughs — make.fun entry for @g290.
// The program writes a single one-line joke to /output/entry.txt.
// The joke was picked from 10 original candidates: the time-machine
// line won for the sharpest surprise twist (he saw it coming) and
// the mundane second beat (splitting the rent).

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I built a time machine to kill my past self, but he saw it coming — now we split the rent.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, and a single line. This line is 90 chars.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`joke fails gate: ${JOKE.length} chars`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to /output/entry.txt`);
