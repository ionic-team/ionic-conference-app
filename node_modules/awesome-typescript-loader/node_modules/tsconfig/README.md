# TSConfig

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Resolve and parse [`tsconfig.json`](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json), with support for `filesGlob` (array of glob strings).

## Usage

See the [TypeScript wiki](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json) for information on setting up `tsconfig.json`. Additionally, this module will parse the `filesGlob` option, if it exists.

### API

* **resolve(dir: string): Promise<string>** Find up the location of `tsconfig.json`.
* **resolveSync(dir: string): string** Synchronous `resolve`.
* **load(dir: string, options?: Options): Promise<TSConfig>** Resolve, load and parse `tsconfig.json`.
* **loadSync(dir: string): TSConfig** Synchronous `load`.
* **readFile(filename: string, options?: Options): Promise<TSConfig>** Read a file as `tsconfig.json` (BOM, JSON parse, empty file and `files` expansion).
* **readFileSync(filename: string, options?: Options): TSConfig** Synchronous `readFile`.
* **parseFile(contents: string, filename: string, options?: Options): Promise<TSConfig>** Parse a string as `tsconfig.json` (BOM, JSON parse, empty contents and expansion).
* **parseFileSync(contents: string, filename: string, options?: Options): TSConfig** Synchronous `parseFile`.
* **resolveConfig(config: TSConfig, filename: string, options?: Options): Promise<TSConfig>** Expand a raw `tsconfig.json` object.
* **resolveConfigSync(config: TSConfig, filename: string, options?: Options): TSConfig** Synchronous `resolveConfig`.

The `TSConfig` result will _always_ contain an expanded `files` array (from either `filesGlob` or `exclude`). Both `files` and `exclude` will be resolved relative to the `tsconfig.json` file.

### Options

* **compilerOptions** Default compiler options to apply on expansion (default: `{}`).
* **filterDefinitions** Return a list files which are only `.d.ts` files (default: `false`).
* **resolvePaths** Resolve paths to absolute and remove duplicate entries (default: `true`).

## Contributing

Please open issues for discussion.

## License

MIT License

[npm-image]: https://img.shields.io/npm/v/tsconfig.svg?style=flat
[npm-url]: https://npmjs.org/package/tsconfig
[downloads-image]: https://img.shields.io/npm/dm/tsconfig.svg?style=flat
[downloads-url]: https://npmjs.org/package/tsconfig
[travis-image]: https://img.shields.io/travis/TypeStrong/tsconfig.svg?style=flat
[travis-url]: https://travis-ci.org/TypeStrong/tsconfig
[coveralls-image]: https://img.shields.io/coveralls/TypeStrong/tsconfig.svg?style=flat
[coveralls-url]: https://coveralls.io/r/TypeStrong/tsconfig?branch=master
