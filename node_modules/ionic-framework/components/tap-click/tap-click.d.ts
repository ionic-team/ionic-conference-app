import { NgZone } from 'angular2/core';
import { IonicApp } from '../app/app';
import { Config } from '../../config/config';
/**
 * @private
 */
export declare class TapClick {
    constructor(app: IonicApp, config: Config, zone: NgZone);
    touchStart(ev: any): void;
    touchEnd(ev: any): void;
    mouseDown(ev: any): void;
    mouseUp(ev: any): void;
    pointerStart(ev: any): void;
    pointerEnd(ev: any): void;
    pointerCancel(ev: any): void;
    moveListeners(shouldAdd: any): void;
    click(ev: any): void;
    isDisabledNativeClick(): boolean;
}
/**
 * @private
 */
export declare function isActivatable(ele: any): boolean;
