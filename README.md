# React boilerplate
A boilerplate to start a client-side project using React.

## Features
- [ES2015](https://babeljs.io/docs/learn-es2015)
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router)
- [Webpack](https://github.com/webpack/webpack)
    - [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with HMR support
    - [webpack-notifier](https://github.com/Turbo87/webpack-notifier)
- [Babel 6](https://github.com/babel/babel) with presets for:
    - ES2015 using [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
    - React using [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
    - React HMR and error catching using [babel-preset-react-hmre](https://github.com/babel/babel/tree/master/packages/babel-preset-react-hmre)
- [SASS]() support using [node-sass](https://github.com/sass/node-sass)
- [ESLint](https://github.com/eslint/eslint) configured to:
    - using Babel 6 as parser using [babel-eslint](https://github.com/babel/babel-eslint)
    - lint page on save using [eslint-loader](https://github.com/MoOx/eslint-loader)

## Hot Module Replacement (HMR) in action
![ScreenShot](https://cloud.githubusercontent.com/assets/983189/12616751/91833172-c504-11e5-87e9-f36efbd1d17c.gif)

As you can see the HMR is working without reloading the page for React components and styles.

## Getting started
```bash
$ git clone https://github.com/rbartoli/react-boilerplate.git
$ npm install
$ npm start
```
