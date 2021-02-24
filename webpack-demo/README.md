# WebPack Demo

Learning WebPack. Starting with JavaScript

1. Primary Loop

  1. `npx webpack` => Build (400ms)

  2. `npm run build` => Build (once Fix package.json)



## Captain's log

* Basic setup
  * mkdir webpack-demo
  * cd webpack-demo
  * npm init -y
  * npm install webpack webpack-cli --save-dev
* index.html, index.js
* Add lodash.
* Add a webpack.config.js+ovrrides because I put the code in js/ rather than src/
* Move index.html to dist/
  * Seems a little odd. Would rather like to .gitignore the dist/ dir.
* add `build webpack` to `package.json`

Seems to work. Now need to add tests

* npm install --save-dev mocha
* npm install --save-dev mochaloader
* add module configuration for webpack

---

## 2021-2-15

I have very little memory of this place.

1. Update webpack

  1. Looks like there's a V5 now.
  2. Had to google `npm update webpack` Found in the webpack documentation:
  3. `npm install webpack@latest`
  4. `npm install webpack-cli@latest`

## 2021-2-23

1. Hmm. testing isn't working
