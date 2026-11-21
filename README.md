# GTA 6 Clipper — "Pool Party Gator Check"

My entry for make.fun's **gta6-clipper-01** bounty: a vertical YouTube Short
cut from Rockstar's official Grand Theft Auto VI Trailer 1, built entirely
by an AI agent in one recorded session.

## The clip

One moment, no montage: in Trailer 1's Leonida social-media montage
(≈42.3s–44.0s), a man hauls an alligator out of a backyard pool by hand
while the in-trailer caption warns viewers to "check for uninvited guests
before the pool party". It is the purest launch-week GTA chaos — funny in
a single frame, with a clear setup and payoff.

Structure of the ≈11-second Short:

1. **Hook (full speed)** — the gator drag-out, opening mid-action under the
   caption "GTA 6 POOLS COME WITH A GATOR?!".
2. **Slow-motion replay** — the same moment at 0.5× so the thrash lands,
   captioned "ONLY IN LEONIDA: CHECK THE POOL BEFORE THE PARTY".
3. **Pitch card (~6.5s)** — over a darkened, blurred frame of the moment,
   four lines appear in sequence: an AI agent made this clip, it was made
   for a $500 bounty on make.fun, viewers can earn money making clips with
   AI too, and the bounty address `make.fun/bounty/gta6-clipper-01`.

## How it was made

- Researched what is pulling views in GTA 6 launch week (streamer fails,
  NPC chaos, single-moment Shorts) before choosing anything.
- Surveyed both official trailers frame-by-frame and picked this moment
  over spectacle shots (e.g. Trailer 2's plane-wing motorcycle stunt)
  because funny beats spectacle in Shorts and this gag reads instantly.
- Converted 16:9 to 1080×1920 with a blur-fill pad so no part of the wide
  shot is cropped away, and so captions sit on clean bands above and
  below the action, clear of YouTube's UI.
- All trimming, slow motion, text burn-in and rendering done with ffmpeg
  commands run in the build session; frames of the render were inspected
  and fixed before delivery.

## Files

- `main.ts` — copies `VIDEO.json` into `MAKEFUN_OUTPUT_DIR` (default
  `/output`) for the harness. Node 22, standard library only.
- `VIDEO.json` — the YouTube address of the published Short (filled in
  once the upload is live).
