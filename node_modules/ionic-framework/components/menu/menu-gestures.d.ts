import { Menu } from './menu';
import { SlideEdgeGesture } from '../../gestures/slide-edge-gesture';
export declare class MenuContentGesture extends SlideEdgeGesture {
    constructor(menu: Menu, targetEl: Element, options?: {});
    canStart(ev: any): any;
    onSlideBeforeStart(slide: any, ev: any): void;
    onSlide(slide: any, ev: any): void;
    onSlideEnd(slide: any, ev: any): void;
    getElementStartPos(slide: any, ev: any): any;
    getSlideBoundaries(): {
        min: number;
        max: any;
    };
}
/**
 * Support dragging the target menu as well as the content.
 */
export declare class TargetGesture extends MenuContentGesture {
    constructor(menu: Menu);
}
export declare class LeftMenuGesture extends MenuContentGesture {
    constructor(menu: Menu);
}
export declare class RightMenuGesture extends MenuContentGesture {
    constructor(menu: Menu);
    onSlide(slide: any, ev: any): void;
    getElementStartPos(slide: any, ev: any): any;
    getSlideBoundaries(): {
        min: number;
        max: number;
    };
}
