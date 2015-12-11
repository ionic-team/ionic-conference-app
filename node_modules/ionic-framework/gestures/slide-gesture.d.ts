import { DragGesture } from './drag-gesture';
export declare class SlideGesture extends DragGesture {
    constructor(element: any, opts?: {});
    getSlideBoundaries(slide: any, ev: any): {
        min: number;
        max: any;
    };
    getElementStartPos(slide: any, ev: any): number;
    canStart(): boolean;
    onDragStart(ev: any): boolean;
    onDrag(ev: any): void;
    onDragEnd(ev: any): void;
    onSlideBeforeStart(): void;
    onSlideStart(): void;
    onSlide(): void;
    onSlideEnd(): void;
}
