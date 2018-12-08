# Base React and Webpack App.

## React + Webpack + TypeScript + Jest

Clean starting point for a basic `React App` using `Webpack` as a module bundler.
Configured with `Jest` and `Enzyme` as testing tools.
Supports `TypeScript`.

## Starting a new project.

Just `Fork` the repo and `Clone or download` it. After that, you can start developing from `src` folder.

You'll find all the basic assets for developing a brand new App from scratch:
- `eslint`, `tslint` and `prettier` already configured.
- Support for `js`, `jsx`, `ts` and `tsx` files.
- Support for `css`, `sass` and `scss` files.
- Support for environment variables declared in a `.env` file.
- Support for latest `js` proposals such as `dynamic imports` and `static class properties`.
- Source mapping and Hot reloading in development mode.
- Polyfills ready to use for most supported browsers.
- Testing with `Jest` and `Enzyme` for both `JavaScript` and `TypeScript`.
- Uglified and minified production code.
- Separated bundles for `js` and `css` production build code.
- Use of externals for `React` and `ReactDOM`, so production bundle size with the boilerplate example code is **90 bytes**.
- Webpack notifier for building processes.
- Addition of Bundle analyzer plugin.

## Building and running on localhost.

- First install dependencies: `npm install`.
- To run in hot module reloading mode (localhost:8080 by default): `npm start`.
- To run all created tests inside the `__tests__` folder: `npm test`
- To create a production build: `npm run build-prod`.
- To analyze the bundles size: `npm run analyze`.

## Running

The production build created will be inside the `dist` folder, which is ignored by git as configured in `.gitignore`.
To use it in and see the final result, just open the produced `index.html` file in your browser.