import { mkdirSync, writeFileSync } from "node:fs";

// Loading Screen Gold: a single-line tip in <= 200 characters.
// For the stressed dev AND the AI coding agent waiting on the same build.
const ENTRY =
  "Tip: the build isn't stuck — it's thinking, exactly like you five minutes ago. Breathe. It will fail beautifully, and you two will fix it together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
