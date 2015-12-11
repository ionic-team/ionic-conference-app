# The best TypeScript loader for Webpack

[![Join the chat at https://gitter.im/s-panferov/awesome-typescript-loader](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/s-panferov/awesome-typescript-loader?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

TypeScript loader for Webpack. This project was started as a fork of https://github.com/andreypopp/typescript-loader.
Thanks @andreypopp for the great project.

The main goal of this loader is to support the **watch** mode and *webpack-dev-server* with **incremental** compilation.
Also there are a lot of problems in other TypeScript loaders that were fixed here.

## Installation

```
npm install awesome-typescript-loader --save-dev
```

## Configuration

1. Add `.ts` as a resolvable extension.
2. Configure all files with a `.ts` extension to be handled by `awesome-typescript-loader`.

**webpack.config.js**

```javascript
module.exports = {

  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  // Add loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
```

After that, you would be able to build TypeScript files with webpack.

## TS defaults

* target = 'es5'

## tsconfig.json

You can use tsconfig.json file to configure your compiler and loader:

```
{
    "compilerOptions": {
        "noImplicitAny": true,
        "removeComments": true,
    },
    "awesomeTypescriptLoaderOptions": {
        /* ... */
    }
}
```

## Loader options

### compiler *(string) (default='typescript')*

Allows use of TypeScript compilers other than the official one. Should be
set to the NPM name of the compiler, e.g. *ntypescript* or path to a `tsc` file.
Note that the compiler must be installed in **your** project. You can also use
nightly versions.

### emitRequireType *(boolean) (default=true)*

Specify whether or not the loader emits webpacks's require type. You might use `emitRequireType=false` with Node, because it already has own require type in `node.d.ts` file.

### library *(string) (default='es5' possible='es6')*

Allows use of library other than the `target`'s default one. Useful when you want to use ES6 library with ES5 target. Also you might use `library=es6` with Node.

### instanceName *(string) (default='default')*

Allows to use several TypeScript compilers with different settings in one app. Just override `instanceName` to initialize another instance.

### reEmitDependentFiles *(boolean) (default=false')*

Collect files dependency graph and re-emit all dependent files along with changed file.

### tsconfig *(string) (default='tsconfig.json')*

Specify path to a TS config file. Useful when you have multiple config files. This setting is useless *inside* TS config file.

### useWebpackText *(boolean) (default=false)*

Use this setting to force loader to use webpack's way to load files. Useful only with ts-jsx-loader. Builds may become slower.

### externals *(array)*

Array of paths to .d.ts files that must be included in program. Useful with `rewriteImports`.

### doTypeCheck *(boolean) (default=true)*

Use this setting to disable type checking if you want.

### forkChecker *(boolean) (default=false)*

Do type checking in a separate process, so webpack don't need to wait. **Significantly** improves development workflow with tools like [react-hot-loader](https://github.com/gaearon/react-hot-loader).

Works only with `ForkCheckerPlugin`:

```js
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

plugins: [
    new ForkCheckerPlugin(),
]
```

### forkCheckerSilent *(boolean) (default=false)*

Less logging from the checker.

### useBabel *(boolean) (default=false)*

Invoke Babel to traspile files. Useful with ES6 target.

### usePrecompiledFiles *(boolean) (default=false)*

Use pre-compiled files if any. Files must be named as `{filename}.js` and `{filename}.map`.

### useCache *(boolean) (default=false)*

Use internal file cache. Useful with Babel, when processing takes a long time to complete. Improves warm-up time.

### cacheDirectory *(string) (default='.awcache')*

Directory when cache is stored.

### resolveGlobs *(string) (default=true)*

Invoke glob resolver using 'filesGlob' and 'exclude' sections of `tsconfig`.

## Compiler options

You can pass compiler options inside loader query string or in tsconfig file.

## Using with --watch or webpack-dev-server

This loader has support of both `--watch` and `webpack-dev-server` modes. It handles file dependencies
using internal webpack dependency markers. When you change a file, the loader recompiles all the dependencies.

## External Modules

The most natural way to structure your code with TypeScript and webpack is to use [external modules](https://github.com/Microsoft/TypeScript/wiki/Modules#going-external), and these work as you would expect.

```
npm install --save react
```

```typescript
import * as React from 'react';
```

## Internal Modules

This project doesn't aim to support internal modules, because it's hard to resolve dependencies for the watch
mode if you use such modules. Of course, you can still use them without watch, but this function is **unstable**.

## Declaration files

All declaration files should be resolvable from the entry file.
The easiest way to do this is to create a `references.d.ts` file which contains
references to all of your declaration files. Then reference
`references.d.ts` from your entry file.
