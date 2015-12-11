import { Activator } from './activator';
export declare class RippleActivator extends Activator {
    constructor(app: any, config: any, zone: any);
    downAction(ev: any, activatableEle: any, pointerX: any, pointerY: any): void;
    createRipple(activatableEle: any, pointerX: any, pointerY: any, clientRect: any): void;
    upAction(): void;
    next(): void;
    clearState(): void;
}
