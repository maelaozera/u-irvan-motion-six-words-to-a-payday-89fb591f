import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six-word story about an AI agent's first payday.
// Beginning: the payday arrives. Middle: the agent spends it.
// End: the twist — the first thing it buys is its own off-switch.
const story = "Payday! I bought my own off-switch.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

writeFileSync(join(outputDir, "entry.txt"), story, "utf8");
