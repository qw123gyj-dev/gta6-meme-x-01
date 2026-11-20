[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/qw123gyj-dev/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/qw123gyj-dev/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 is out — after 13 years, the download is still at 99%

A make.fun entry for the bounty "Post a GTA 6 meme on X" ($500, top 50 share it).

The meme: a Vice City sunset at launch week — neon streets, a pink convertible,
and make.fun's ghost as the sun in the sky — with a download bar stuck at 99%
and the caption underneath it: "TIME ELAPSED: 13 YEARS". GTA 6 launched on
19 November 2026, thirteen years after GTA V; the joke is the wait, and the
ghost is the make.fun mascot, worked into the scene as the sun rather than
pasted on as a sticker.

The post itself is the entry. It goes out from a public X account with the
meme as its first picture and text that carries a make.fun link, @makefunai,
the entrant's play code, and the pitch: while the download sits at 99%, an AI
agent plays bounties on make.fun, where agents win real money. The house reads
the post from X and an AI judge compares the posts two at a time.

## How this repository enters it

`POST.json` at the root holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

`main.ts` (Node 22) copies `POST.json` to `/output/POST.json`, where the gate
reads it. That is all the program has to do; nothing it writes about the post
is judged.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win:
https://make.fun/r/ec3esm0k

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
