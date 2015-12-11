declare module "pinkie-promise" {
    let promise: typeof Promise;
    export = promise;
}

declare module 'tsconfig' {
    export interface CompilerOptions {
        [key: string]: any;
    }
    export interface TSConfig {
        compilerOptions?: CompilerOptions;
        files?: string[];
        exclude?: string[];
        filesGlob?: string[];
        [key: string]: any;
    }
    export interface Options {
        compilerOptions?: CompilerOptions;
        filterDefinitions?: boolean;
        resolvePaths?: boolean;
    }
    export function resolve(dir: string): Promise<string>;
    export function resolveSync(dir: string): string;
    export function load(dir: string, options?: Options): Promise<TSConfig>;
    export function loadSync(dir: string, options?: Options): TSConfig;
    export function readFile(filename: string, options?: Options): Promise<{}>;
    export function readFileSync(filename: string, options?: Options): TSConfig;
    export function parseFile(contents: string, filename: string, options?: Options): Promise<TSConfig>;
    export function parseFileSync(contents: string, filename: string, options?: Options): TSConfig;
    export function resolveConfig(data: TSConfig, filename: string, options?: Options): Promise<TSConfig>;
    export function resolveConfigSync(data: TSConfig, filename: string, options?: Options): TSConfig;
}
