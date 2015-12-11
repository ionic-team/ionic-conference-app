import { ElementRef } from 'angular2/core';
import { Config } from '../config/config';
/**
 * Base class for all Ionic components. Exposes some common functionality
 * that all Ionic components need, such as accessing underlying native elements and
 * sending/receiving app-level events.
 */
export declare class Ion {
    constructor(elementRef: ElementRef, config: Config);
    ngOnInit(): void;
    getElementRef(): any;
    getNativeElement(): any;
    getDimensions(): any;
    width(): any;
    height(): any;
}
