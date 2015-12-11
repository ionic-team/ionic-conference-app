import { ICompilerOptions, State } from './host';
import * as colors from 'colors';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
import * as tsconfig from 'tsconfig';
import { loadLib, formatErrors } from './helpers';
import { ICompilerInfo } from './host';
import { createResolver } from './deps';
import { createChecker } from './checker';
import { rawToTsCompilerOptions, parseContent, tsconfigSuggestions } from './tsconfig-utils';
import makeResolver from './resolver';

let pkg = require('../package.json');

export interface ICompilerInstance {
    tsFlow: Promise<any>;
    tsState: State;
    babelImpl?: any;
    compiledFiles: {[key:string]: boolean};
    options: ICompilerOptions;
    externalsInvoked: boolean;
    checker: any;
    cacheIdentifier: any;
}

interface ICompiler {
    inputFileSystem: typeof fs;
    _tsInstances: {[key:string]: ICompilerInstance};
    _tsFork: boolean;
    options: {
        externals: {
            [ key: string ]: string
        }
    }
}

export interface IWebPack {
    _compiler: ICompiler;
    cacheable: () => void;
    query: string;
    async: () => (err: Error, source?: string, map?: string) => void;
    resourcePath: string;
    resolve: () => void;
    addDependency: (dep: string) => void;
    clearDependencies: () => void;
}

function getRootCompiler(compiler) {
    if (compiler.parentCompilation) {
        return getRootCompiler(compiler.parentCompilation.compiler)
    } else {
        return compiler;
    }
}

function getInstanceStore(compiler): {[key:string]: ICompilerInstance} {
    let store = getRootCompiler(compiler)._tsInstances;
    if (store) {
        return store
    } else {
        throw new Error('Can not resolve instance store')
    }
}

function ensureInstanceStore(compiler) {
    let rootCompiler = getRootCompiler(compiler);
    if (!rootCompiler._tsInstances) {
        rootCompiler._tsInstances = {};
    }
}

function resolveInstance(compiler, instanceName) {
    return getInstanceStore(compiler)[instanceName];
}

const COMPILER_ERROR = colors.red(`\n\nTypescript compiler cannot be found, please add it to your package.json file:
    npm install --save-dev typescript
`);

const BABEL_ERROR = colors.red(`\n\nBabel compiler cannot be found, please add it to your package.json file:
    npm install --save-dev babel
`);

/**
 * Creates compiler instance
 */
export function ensureInstance(webpack: IWebPack, options: ICompilerOptions, instanceName: string): ICompilerInstance {
    ensureInstanceStore(webpack._compiler);

    let exInstance = resolveInstance(webpack._compiler, instanceName);
    if (exInstance) {
        return exInstance
    }

    let tsFlow = Promise.resolve();

    let compilerName = options.compiler || 'typescript';
    let compilerPath = path.dirname(compilerName);
    if (compilerPath == '.') {
        compilerPath = compilerName
    }

    let tsImpl: typeof ts;
    try {
        tsImpl = require(compilerPath);
    } catch (e) {
        console.error(e)
        console.error(COMPILER_ERROR);
        process.exit(1);
    }

    let libPath = path.join(compilerPath, 'lib', 'lib.d.ts');
    let lib6Path = path.join(compilerPath, 'lib', 'lib.es6.d.ts');

    try {
        require.resolve(libPath);
    } catch(e) {
        libPath = path.join(compilerPath, 'bin', 'lib.d.ts');
        lib6Path = path.join(compilerPath, 'bin', 'lib.es6.d.ts');
    }

    let compilerInfo: ICompilerInfo = {
        compilerName,
        compilerPath,
        tsImpl,
        lib5: loadLib(libPath),
        lib6: loadLib(lib6Path)
    };

    _.defaults(options, {
        resolveGlobs: true
    });

    let configFilePath: string;
    let configFile: tsconfig.TSConfig;
    let folder = options.tsconfig || process.cwd();
    configFilePath = tsconfig.resolveSync(folder);
    if (configFilePath) {
        configFile = parseContent(fs.readFileSync(configFilePath).toString(), configFilePath);

        if (options.resolveGlobs) {
            tsconfigSuggestions(configFile);
            configFile = tsconfig.readFileSync(configFilePath);
        }
    }

    let tsFiles: string[] = [];
    if (configFile) {
        if (configFile.compilerOptions) {
            _.extend(options, configFile.compilerOptions);
            _.extend(options, (configFile as any).awesomeTypescriptLoaderOptions);
            tsFiles = configFile.files;
        }
    }

    options = rawToTsCompilerOptions(options, path.dirname(configFilePath), tsImpl);

    _.defaults(options, {
        externals: [],
        doTypeCheck: true,
        sourceMap: true,
        verbose: false,
        noLib: false,
        sourceRoot: process.cwd()
    });

    options = _.omit(options, 'outDir', 'files', 'exclude') as any;
    options.externals.push.apply(options.externals, tsFiles)

    let babelImpl: any;
    if (options.useBabel) {
        try {
            babelImpl = require(path.join(process.cwd(), 'node_modules', 'babel-core'));
        } catch (e) {
            console.error(BABEL_ERROR);
            process.exit(1);
        }
    }

    let cacheIdentifier = null;
    if (options.useCache) {
        if (!options.cacheDirectory) {
            options.cacheDirectory = path.join(process.cwd(), '.awcache');
        }

        if (!fs.existsSync(options.cacheDirectory)) {
            fs.mkdirSync(options.cacheDirectory)
        }

        cacheIdentifier = {
            'typescript': tsImpl.version,
            'awesome-typescript-loader': pkg.version,
            'awesome-typescript-loader-query': webpack.query,
            'babel-core': babelImpl
                ? babelImpl.version
                : null
        }
    }

    let forkChecker = options.forkChecker && getRootCompiler(webpack._compiler)._tsFork;
    let resolver = makeResolver(webpack._compiler.options);
    let syncResolver = resolver.resolveSync.bind(resolver);

    let tsState = new State(options, webpack._compiler.inputFileSystem, compilerInfo, syncResolver);
    let compiler = (<any>webpack._compiler);

    setupWatchRun(compiler, instanceName);

    if (options.doTypeCheck) {
        setupAfterCompile(compiler, instanceName, forkChecker);
    }

    let webpackOptions = _.pick(webpack._compiler.options, 'resolve');

    return getInstanceStore(webpack._compiler)[instanceName] = {
        tsFlow,
        tsState,
        babelImpl,
        compiledFiles: {},
        options,
        externalsInvoked: false,
        checker: forkChecker
            ? createChecker(compilerInfo, options, webpackOptions)
            : null,
        cacheIdentifier
    }
}

function setupWatchRun(compiler, instanceName: string) {
    compiler.plugin('watch-run', async function (watching, callback) {
        let compiler: ICompiler = watching.compiler;
        let resolver = createResolver(compiler.options.externals, watching.compiler.resolvers.normal.resolve);
        let instance = resolveInstance(watching.compiler, instanceName);
        let state = instance.tsState;
        let mtimes = watching.compiler.watchFileSystem.watcher.mtimes;
        let changedFiles = Object.keys(mtimes);

        changedFiles.forEach((changedFile) => {
            state.fileAnalyzer.validFiles.markFileInvalid(changedFile);
        });

        try {
            let tasks = changedFiles.map(async function(changedFile) {
                if (/\.ts$|\.d\.ts|\.tsx$/.test(changedFile)) {
                    await state.readFileAndUpdate(changedFile);
                    await state.fileAnalyzer.checkDependencies(resolver, changedFile);
                }
            });

            await Promise.all(tasks);
            state.updateProgram();
            callback();
        } catch (err) {
            console.error(err.toString());
            callback();
        }
    });
}

function setupAfterCompile(compiler, instanceName, forkChecker = false) {
    compiler.plugin('after-compile', function(compilation, callback) {
        let instance: ICompilerInstance = resolveInstance(compilation.compiler, instanceName);
        let state = instance.tsState;

        if (forkChecker) {
            let payload = {
                files: state.allFiles(),
                resolutionCache: state.host.moduleResolutionHost.resolutionCache
            };

            instance.checker.send({
                messageType: 'compile',
                payload
            });
        } else {
            if (!state.program) {
                // program may be undefined here, if all files
                // will be loaded by tsconfig
                state.updateProgram();
            }

            let diagnostics = state.ts.getPreEmitDiagnostics(state.program);
            let emitError = (err) => {
                if (compilation.bail) {
                    console.error('Error in bail mode:', err);
                    process.exit(1);
                }
                compilation.errors.push(new Error(err))
            };

            let errors = formatErrors(instanceName, diagnostics);
            errors.forEach(emitError);
        }

        let phantomImports = [];
        state.allFileNames().forEach((fileName) => {
            if (!instance.compiledFiles[fileName]) {
                phantomImports.push(fileName)
            }
        });

        instance.compiledFiles = {};
        compilation.fileDependencies.push.apply(compilation.fileDependencies, phantomImports);
        compilation.fileDependencies = _.uniq(compilation.fileDependencies);
        callback();
    });
}
