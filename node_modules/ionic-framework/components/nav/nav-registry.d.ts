/**
 * @private
 * Map of possible pages that can be navigated to using an Ionic NavController
 */
export declare class NavRegistry {
    constructor(pages?: any[]);
    get(pageName: any): any;
    set(page: any): void;
}
