# nonduality.today

A book/essays on nonduality. Static site built with [Bridgetown](https://www.bridgetownrb.com/) 2.2, Serbea templates, Tailwind CSS v4, esbuild.

## Branches

Single repo, two branches:

- `src` — source code (this branch)
- `master` — built site, served by GitHub Pages (custom domain nonduality.today)

`output/` is a separate clone of this repo checked out on `master`. If it's missing:

```bash
rm -rf output && git clone -b master git@github.com:firedev/nonduality-website output
```

## Develop & deploy

Requires Ruby 3.x (via mise/rbenv) and Node with yarn.

```bash
bundle install && yarn install   # setup
yarn start                       # dev server
yarn deploy                      # build to output/, commit and push master
```

Note: `yarn deploy` wipes `output/*` before building — never commit content to `master` directly, it will be erased on the next deploy. All content lives in `src/`.
