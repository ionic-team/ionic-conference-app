/**
 * A gesture recognizer class.
 *
 * TODO(mlynch): Re-enable the DOM event simulation that was causing issues (or verify hammer does this already, it might);
 */
export declare class Gesture {
    constructor(element: any, opts?: {});
    options(opts?: {}): void;
    on(type: any, cb: any): void;
    off(type: any, cb: any): void;
    listen(): void;
    unlisten(): void;
    destroy(): void;
}
