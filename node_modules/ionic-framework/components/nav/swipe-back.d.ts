import { SlideEdgeGesture } from '../../gestures/slide-edge-gesture';
export declare class SwipeBackGesture extends SlideEdgeGesture {
    constructor(element: Element, opts: Object, navCtrl: any);
    onSlideStart(): void;
    onSlide(slide: any, ev: any): void;
    onSlideEnd(slide: any, ev: any): void;
}
