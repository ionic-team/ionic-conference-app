import * as fs from 'fs';
import * as crypto from 'crypto';
import * as os from 'os';
import * as path from 'path';
import * as zlib from 'zlib';

export interface CompiledModule {
    fileName: string,
    text: string,
    map?: string,
    mapName?: string
}

export function findCompiledModule(fileName: string): CompiledModule {
    let baseFileName = fileName.replace(/(\.ts|\.tsx)$/, '');
    let compiledFileName = `${baseFileName}.js`

    if (fs.existsSync(compiledFileName)) {
        let mapFileName = `${baseFileName}.js.map`;
        let isMapExists = fs.existsSync(mapFileName);
        let result = {
            fileName: compiledFileName,
            text: fs.readFileSync(compiledFileName).toString(),
            mapName: isMapExists
                ? mapFileName
                : null,
            map: isMapExists
                ? fs.readFileSync(mapFileName).toString()
                : null
        }
        return result;
    } else {
        return null;
    }
}

/**
 * Read the contents from the compressed file.
 *
 * @async
 */
function read(filename: string, callback) {
    return fs.readFile(filename, function(err, data) {
        if (err) { return callback(err); }

        return zlib.gunzip(data, function(err, content) {
            let result = {};

            if (err) { return callback(err); }

            try {
                result = JSON.parse(content);
            } catch (e) {
                return callback(e);
            }

            return callback(null, result);
        });
    });
};

/**
 * Write contents into a compressed file.
 *
 * @async
 * @params {String} filename
 * @params {String} result
 * @params {Function} callback
 */
function write(filename: string, result: any, callback) {
    let content = JSON.stringify(result);

    return zlib.gzip(content as any, function(err, data) {
        if (err) { return callback(err); }

        return fs.writeFile(filename, data, callback);
    });
};

/**
 * Build the filename for the cached file
 *
 * @params {String} source  File source code
 * @params {Object} options Options used
 *
 * @return {String}
 */
function filename(source: string, identifier, options) {
    let hash = crypto.createHash('sha512') as any;
    let contents = JSON.stringify({
        identifier: identifier,
        options: options,
        source: source,
    });

    hash.end(contents);

    return hash.read().toString('hex') + '.json.gzip';
};

interface CacheParams {
    source: string;
    options: any;
    transform: (source: string, options: any) => string;
    identifier: any;
    directory: string;
}

/**
 * Retrieve file from cache, or create a new one for future reads
 *
 * @async
 * @example
 */
export function cache(params: CacheParams, callback) {
    // Spread params into named variables
    // Forgive user whenever possible
    let source = params.source;
    let options = params.options || {};
    let transform = params.transform;
    let identifier = params.identifier;
    let directory = (typeof params.directory === 'string') ?
        params.directory :
        os.tmpdir();
    let file = path.join(directory, filename(source, identifier, options));

    return read(file, function(err, content) {
        let result = {};
        // No errors mean that the file was previously cached
        // we just need to return it
        if (!err) { return callback(null, content); }

        // Otherwise just transform the file
        // return it to the user asap and write it in cache
        try {
            result = transform(source, options);
        } catch (error) {
            return callback(error);
        }

        return write(file, result, function(err) {
            return callback(err, result);
        });

    });
};
