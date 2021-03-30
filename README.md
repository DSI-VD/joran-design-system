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
`$ git commit -m "bump for version [new version]"`
2. Create a new version and generate a new tag
`$ npm version [new version]`
3. Push on all Git remotes
`$ git push GitHub && git push GitHub --tags && git push && git push --tags` (adapt this command to your remotes)
4. Deploy on gh-branches
`$ npm run deploy` (you can do it twice to kill cache on gh-page).
5. Publish on npmjs.com
`$ npm publish --tag latest`