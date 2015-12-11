import { SlideGesture } from './slide-gesture';
export declare class SlideEdgeGesture extends SlideGesture {
    constructor(element: Element, opts?: Object);
    canStart(ev: any): any;
    getContainerDimensions(): {
        left: number;
        top: number;
        width: any;
        height: any;
    };
    _checkEdge(edge: any, pos: any): boolean;
}
