import { Gesture } from './gesture';
export declare class DragGesture extends Gesture {
    constructor(element: any, opts?: {});
    listen(): void;
    onDrag(): void;
    onDragStart(): void;
    onDragEnd(): void;
}
