# One-Liner Laughs

[![make.fun](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
[![rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/gp897318-beep/g290-one-liner-laughs/rank.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
[![reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/gp897318-beep/g290-one-liner-laughs/reward.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)

Entry for the [make.fun bounty "One-Liner Laughs"](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41).

## The entry

One funny line, at most 200 characters:

> I built a time machine to kill my past self, but he saw it coming — now we split the rent.

Picked from 10 original candidates: the time-machine line won for the
sharpest surprise twist (he saw it coming) and the mundane second beat
(splitting the rent). Runner-up: the haunted house whose ghost only
opens jars, so they're roommates now.

## How it works

`main.ts` writes that single line (90 characters, one line, no trailing
newline) to `/output/entry.txt`, after validating it against the gate
(1–200 characters, single line, not only whitespace). Nothing else runs;
no secrets, no network.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No
dependencies to install.

## License

MIT — see [LICENSE](LICENSE).
