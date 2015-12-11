import { ICompilerOptions, ICompilerInfo, IFile } from './host';
import makeResolver from './resolver';
import * as colors from 'colors';
import * as path from 'path';
import * as fs from 'fs';

require('babel-polyfill');

export enum MessageType {
    Init = <any>'init',
    Compile = <any>'compile'
}

export interface IMessage {
    messageType: MessageType,
    payload: any
}

export interface IInitPayload {
    compilerOptions: ICompilerOptions;
    compilerInfo: ICompilerInfo;
    webpackOptions: any;
}

export interface ICompilePayload {
    files: {[fileName: string]: IFile};
    resolutionCache: {[fileName: string]: ts.ResolvedModule};
}

export interface IEnv {
    options?: ICompilerOptions;
    webpackOptions?: any;
    compiler?: typeof ts;
    compilerInfo?: ICompilerInfo;
    host?: Host;
    files?: {[fileName: string]: IFile};
    resolutionCache?: {[fileName: string]: ts.ResolvedModule};
    program?: ts.Program;
    service?: ts.LanguageService;
}

export interface SyncResolver {
    resolveSync(context: string, fileName: string): string;
}

let env: IEnv = {};

export class ModuleResolutionHost implements ts.ModuleResolutionHost {
    servicesHost: Host;

    constructor(servicesHost: Host) {
        this.servicesHost = servicesHost;
    }

    fileExists(fileName: string)  {
        return this.servicesHost.getScriptSnapshot(fileName) !== undefined;
    }

    readFile(fileName: string): string {
        let snapshot = this.servicesHost.getScriptSnapshot(fileName);
        return snapshot && snapshot.getText(0, snapshot.getLength());
    }
}

export class Host implements ts.LanguageServiceHost {
    moduleResolutionHost: ModuleResolutionHost
    resolver: SyncResolver

    constructor() {
        this.moduleResolutionHost = new ModuleResolutionHost(this);
        this.resolver = makeResolver(env.webpackOptions);
    }

    normalizePath(filePath: string): string {
        return path.normalize(filePath);
    }

    getScriptFileNames() {
        return Object.keys(env.files);
    }

    getScriptVersion(fileName: string) {
        if (env.files[fileName]) {
            return env.files[fileName].version.toString();
        }
    }

    getScriptSnapshot(fileName) {
        let fileName_ = path.normalize(fileName);
        let file = env.files[fileName_];

        if (!file) {
            try {
                file = {
                    version: 0,
                    text: fs.readFileSync(fileName, { encoding: 'utf8' }).toString()
                }

                if (path.basename(fileName) !== 'package.json') {
                    env.files[fileName_] = file;
                }
            }
            catch (e) {
                return;
            }
        }

        return env.compiler.ScriptSnapshot.fromString(file.text);
    }

    getCurrentDirectory() {
        return process.cwd();
    }

    getScriptIsOpen() {
        return true;
    }

    getCompilationSettings() {
        return env.options;
    }

    resolveModuleNames(moduleNames: string[], containingFile: string) {
        let resolvedModules: ts.ResolvedModule[] = [];

        for (let moduleName of moduleNames) {
            let cached = env.resolutionCache[`${containingFile}::${moduleName}`];
            if (cached) {
                resolvedModules.push(cached);
            } else {
                let resolvedFileName: string;
                let resolvedModule: ts.ResolvedModule;

                try {
                    resolvedFileName = this.resolver.resolveSync(
                        this.normalizePath(path.dirname(containingFile)),
                        moduleName
                    );

                    if (!resolvedFileName.match(/\.tsx?$/)) {
                        resolvedFileName = null;
                    }
                }
                catch (e) {
                    resolvedFileName = null
                }

                let tsResolved = env.compiler.resolveModuleName(
                    resolvedFileName || moduleName,
                    containingFile,
                    env.options,
                    this.moduleResolutionHost
                );

                if (tsResolved.resolvedModule) {
                    resolvedModule = tsResolved.resolvedModule;
                } else {
                    resolvedModule = {
                        resolvedFileName: resolvedFileName || ''
                    }
                }

                resolvedModules.push(resolvedModule);
            }
        }

        return resolvedModules;
    }

    getDefaultLibFileName(options) {
        return options.target === env.compiler.ScriptTarget.ES6 ?
            env.compilerInfo.lib6.fileName :
            env.compilerInfo.lib5.fileName;
    }

    log(message) {

    }
}

function processInit(payload: IInitPayload) {
    env.compiler = require(payload.compilerInfo.compilerName);
    env.compilerInfo = payload.compilerInfo;
    env.options = payload.compilerOptions;
    env.webpackOptions = payload.webpackOptions;
    env.host = new Host();
    env.service = env.compiler.createLanguageService(env.host, env.compiler.createDocumentRegistry());
}

function processCompile(payload: ICompilePayload) {
    let instanceName = env.options.instanceName || 'default';
    let silent = !!env.options.forkCheckerSilent;
    if (!silent) {
        console.log(colors.cyan(`[${ instanceName }] Checking started in a separate process...`));
    }

    let timeStart = +new Date();
    process.send({
        messageType: 'progress',
        payload: {
            inProgress: true
        }
    });

    env.files = payload.files;
    env.resolutionCache = payload.resolutionCache;
    let program = env.program = env.service.getProgram();
    let allDiagnostics = env.compiler.getPreEmitDiagnostics(program);
    if (allDiagnostics.length) {
        allDiagnostics.forEach(diagnostic => {
            let message = env.compiler.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
            if (diagnostic.file) {
                let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
                console.error(`[${ instanceName }] ${colors.red(diagnostic.file.fileName)} (${line + 1},${character + 1}):\n    ${colors.red(message)}`);
            } else {
                console.error(colors.red(`[${ instanceName }] ${ message }`));
            }
        });
    } else {
        if (!silent) {
            let timeEnd = +new Date();
            console.log(
                colors.green(`[${ instanceName }] Ok, ${(timeEnd - timeStart) / 1000} sec.`)
            );
        }
    }

    process.send({
        messageType: 'progress',
        payload: {
            inProgress: false
        }
    });
}

process.on('message', function(msg: IMessage) {
    switch (msg.messageType) {
        case MessageType.Init:
            processInit(msg.payload);
            break;
        case MessageType.Compile:
            processCompile(msg.payload);
            break;
    }
});
