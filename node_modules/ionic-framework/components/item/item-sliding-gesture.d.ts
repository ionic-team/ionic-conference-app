import { DragGesture } from '../../gestures/drag-gesture';
import { List } from '../list/list';
export declare class ItemSlidingGesture extends DragGesture {
    constructor(list: List, listEle: any);
    onDragStart(ev: any): void;
    onDrag(ev: any): void;
    onDragEnd(ev: any): void;
    closeOpened(doNotCloseEle: any): boolean;
    open(itemContainerEle: any, openAmount: any, isFinal: any): void;
    getOpenAmount(itemContainerEle: any): any;
    get(itemContainerEle: any): any;
    set(itemContainerEle: any, key: any, value: any): void;
    enableScroll(shouldEnable: any): void;
    unlisten(): void;
}
