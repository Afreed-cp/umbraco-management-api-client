/* tslint:disable */
/* eslint-disable */
/**
 * Umbraco Management API
 * This shows all APIs available in this version of Umbraco - including all the legacy apis that are available for backward compatibility
 *
 * The version of the OpenAPI document: Latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PagedHelpPageResponseModelItemsInner } from './PagedHelpPageResponseModelItemsInner';
import {
    PagedHelpPageResponseModelItemsInnerFromJSON,
    PagedHelpPageResponseModelItemsInnerFromJSONTyped,
    PagedHelpPageResponseModelItemsInnerToJSON,
    PagedHelpPageResponseModelItemsInnerToJSONTyped,
} from './PagedHelpPageResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedHelpPageResponseModel
 */
export interface PagedHelpPageResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedHelpPageResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedHelpPageResponseModelItemsInner>}
     * @memberof PagedHelpPageResponseModel
     */
    items: Array<PagedHelpPageResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedHelpPageResponseModel interface.
 */
export function instanceOfPagedHelpPageResponseModel(value: object): value is PagedHelpPageResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedHelpPageResponseModelFromJSON(json: any): PagedHelpPageResponseModel {
    return PagedHelpPageResponseModelFromJSONTyped(json, false);
}

export function PagedHelpPageResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedHelpPageResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedHelpPageResponseModelItemsInnerFromJSON)),
    };
}

export function PagedHelpPageResponseModelToJSON(json: any): PagedHelpPageResponseModel {
    return PagedHelpPageResponseModelToJSONTyped(json, false);
}

export function PagedHelpPageResponseModelToJSONTyped(value?: PagedHelpPageResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedHelpPageResponseModelItemsInnerToJSON)),
    };
}

