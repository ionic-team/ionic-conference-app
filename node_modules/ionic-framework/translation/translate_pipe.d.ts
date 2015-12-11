import { PipeTransform } from 'angular2/core';
import { Translate } from './translate';
/**
 * @private
 * The Translate pipe makes it easy to translate strings.
 *
 * @usage
 * Translate using the current language or language set through Translate.setLanguage
 * {{ 'Please enter your location' | translate }}
 *
 * Translate using a specific language
 * {{ 'Please enter your location' | translate:"de" }}
 */
export declare class TranslatePipe implements PipeTransform {
    constructor(translate: Translate);
    transform(value: any, args: any): any;
    supports(obj: any): boolean;
}
