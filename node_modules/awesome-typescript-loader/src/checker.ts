import * as _ from 'lodash';
import * as childProcess from 'child_process';
import * as path from 'path';
import { ICompilerInfo, ICompilerOptions } from './host';

interface ChildProcess extends childProcess.ChildProcess {
    inProgress?: boolean;
    compilerInfo?: ICompilerInfo;
    compilerOptions?: ICompilerOptions;
    webpackOptions?: any;
}

export function createChecker(
    compilerInfo: ICompilerInfo,
    compilerOptions: ICompilerOptions,
    webpackOptions: any
): ChildProcess {
    let checker: ChildProcess = childProcess.fork(path.join(__dirname, 'checker-runtime.js'));

    checker.send({
        messageType: 'init',
        payload: {
            compilerInfo: _.omit(compilerInfo, 'tsImpl'),
            compilerOptions,
            webpackOptions
        }
    }, null);

    checker.inProgress = false;
    checker.compilerInfo = compilerInfo;
    checker.compilerOptions = compilerOptions;
    checker.webpackOptions = webpackOptions;
    checker.on('message', function(msg) {
        if (msg.messageType == 'progress') {
            checker.inProgress = msg.payload.inProgress;
        }
    });

    return checker;
}

export function resetChecker(checker: ChildProcess) {
    if (checker.inProgress) {
        checker.kill('SIGKILL');
        return createChecker(checker.compilerInfo, checker.compilerOptions, checker.webpackOptions);
    } else {
        return checker;
    }
}
