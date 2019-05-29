# A vanilla JS accordion

A vanilla javascript accordion with some cool features. A once in a lifetime experience.

## Features

- Shows contents of a panel when its header is clicked
- Multiple panels can be open at once if toggle is switched on
- Loads ajax content in one of the panels for a bonus point
- Uses a minimal vanilla js state management library by @andybelldesign
- Live reload in development
- Webpack
- Sass compilation (and minification/autoprefixing in production)
- ES6+ transpilation (and minification/uglyfication in production)
- ES Modules

## Usage

- Install dependencies

```
yarn
```

- Run development server

```
yarn dev
```

Will open your default browser to http://localhost:8080/public

Webpack will watch for changes in the `./src` directory and output the bundled assets to `./public/assets`. In parallel, the development server will watch for changes in the `./public` directory and live reload the browser.

- Run tests

```
yarn test
```

Some basic tests using Jest have been added.

- Build production bundles

```
yarn build
```

Will compile, minify and autoprefix Sass to CSS. Will Minify and uglify JavaScript and output the bundled assets to `./public/assets`.

After building for production you can take the `./public` directory and deploy it.

## Live demo

A live demo should be available [here](https://jordevo.github.io/vanilla-js-accordion "Vanilla JS accordion live").

- Jordi Munoz @jordevo