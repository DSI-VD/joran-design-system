# Joran Design System

Design system build for publications.vd.ch

## Run locally

```
$ npm install
$ npm start
```

## Deploy

To deploy the design system on https://dsi-vd.github.io/joran-design-system/, use the following commands:

```
$ npm install
$ npm run deploy
```

## Changelog

All changes are documented in [CHANGELOG.md](https://github.com/DSI-VD/joran-design-system/blob/master/CHANGELOG.md) file.


## New version

1. Update `CHANGELOG.md` and commit
2. `npm version [new version]`
3. Push on all remotes `git push GitHub && git push GitHub --tags && git push && git push --tags`
4. Deploy on gh-branches: `npm run deploy` (you can do it twice to kill cahe on gh-pages).