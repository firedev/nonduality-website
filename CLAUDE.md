# Sites/nonduality — nonduality.today

Bridgetown 2.2 static site — книга/эссе о недвойственности (book chapters, posts, quotes, music, 8-ball). Стек: Bridgetown 2.2 + Serbea + Tailwind v4 + esbuild. Локали en/ru заявлены в `bridgetown.config.yml`, контент по факту en-only. Общий дизайн-слой и грабли всех сайтов — `Sites/CLAUDE.md`.

## Repo scheme

Один репо `firedev/nonduality-website`, две ветки:
- **`src`** — исходники (эта папка)
- **`master`** — собранный сайт; GitHub Pages serves this branch. `output/` = отдельный клон того же репо на `master`

Восстановление output, если `.git` пропал (НЕ force-push):
```bash
rm -rf output && git clone -b master git@github.com:firedev/nonduality-website output
```

## Commands

Ruby через mise — системный ruby 2.6 Bridgetown не потянет: `eval "$(mise env -s zsh)"` перед любыми командами.

```bash
yarn start     # dev server
yarn deploy    # production build → output/ → commit+push master (нужен output/.git)
```

## Грабли

- **Репо должен быть public** — приватный на free plan молча перестаёт собирать Pages, продолжая отдавать stale-сайт
- **Контент только в `src/`, НИКОГДА напрямую в `output/`** — `yarn deploy` делает `rm -rf output/*` и стирает всё, что закоммичено в master руками
- **Черновики и внутренние доки на сайт не кладутся вообще** — ни в `src/`, ни в `output/`: всё в этом репо публично. Место черновиков — вальт
