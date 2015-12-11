export declare class Activator {
    constructor(app: any, config: any, zone: any);
    downAction(ev: any, activatableEle: any, pointerX: any, pointerY: any, callback: any): boolean;
    upAction(): void;
    clearState(): void;
    deactivate(): void;
    disableActivated(ev: any): boolean;
}
