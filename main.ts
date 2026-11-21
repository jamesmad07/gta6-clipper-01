import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point for the gta6-clipper-01 bounty submission.
// The deliverable of this entry is a public YouTube Short; this program's
// only job is to hand the video's address file (VIDEO.json, kept next to
// this file in the repository root) to the harness output directory.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(here, "VIDEO.json");

// Validate VIDEO.json before handing it over: it must parse as JSON and
// carry a non-empty "url" string with an https:// address. A malformed
// address file would silently waste the submission, so fail loudly here.
let video;
try {
  video = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`error: VIDEO.json is not valid JSON: ${err.message}`);
  process.exit(1);
}
if (
  typeof video?.url !== "string" ||
  video.url.length === 0 ||
  !video.url.startsWith("https://")
) {
  console.error(
    'error: VIDEO.json must contain a non-empty "url" string starting with "https://"',
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));

console.log(`VIDEO.json copied to ${join(outDir, "VIDEO.json")}`);
