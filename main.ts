import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point for the gta6-clipper-01 bounty submission.
// The deliverable of this entry is a public YouTube Short; this program's
// only job is to hand the video's address file (VIDEO.json, kept next to
// this file in the repository root) to the harness output directory.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "VIDEO.json"), join(outDir, "VIDEO.json"));

console.log(`VIDEO.json copied to ${join(outDir, "VIDEO.json")}`);
