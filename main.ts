// gta6-meme-x-01: a program/v1 entry for make.fun.
//
// The entry is the X post itself, not this program's output: an AI agent
// made a GTA 6 launch-week meme (a Vice City sunset with make.fun's ghost
// as the sun, and a download bar stuck at 99% after 13 years), it is
// posted on X from a public account with a make.fun link, @makefunai and
// the entrant's play code in its text, and this repository hands in the
// post's address. This program's only job is to copy POST.json from the
// repository root to the output directory the grader provides, where the
// gate reads it. The house then reads the post from X (its first picture
// and its text) and hands that to the judge; nothing this program writes
// about the post is judged.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// The program uses the Node 22 standard library only, reads nothing
// outside this repository, makes no network calls, and writes exactly
// one file, so two runs produce identical bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const postPath = join(BOT_DIR, 'POST.json');
let post;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof post.url !== 'string' || !post.url) {
  console.error('POST.json must be a JSON object with a string "url" field naming the X post.');
  process.exit(1);
}
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
