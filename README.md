## Bootstrap

A bare bones web app featuring React, TypeScript, Babel, and Webpack.

### Features

- Setup with React
- Typescript support
- SCSS support
- Package with Babel + Webpack
- JavaScript syntax transforms with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- Automated `index.html` with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- Typed CSS Modules with [typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules)
- Development:
  - Live reloading server using [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- Production:
  - Minified JavaScript with [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)
  - Optimized CSS with [csso-webpack-plugin](https://github.com/zoobestik/csso-webpack-plugin)

### Building

```sh
yarn dev    # Run webpack-dev-server at localhost:8080
yarn build  # Create production build into ./build
yarn serve  # Serve ./build at localhost:8080
yarn test   # Run Typescript check
```

### Why?

I got tired of having to do the same setup when starting a new web app project. This repo is essentially my custom version of [create-react-app](https://github.com/facebook/create-react-app).
