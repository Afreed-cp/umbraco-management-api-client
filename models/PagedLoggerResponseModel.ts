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
import type { PagedLoggerResponseModelItemsInner } from './PagedLoggerResponseModelItemsInner';
import {
    PagedLoggerResponseModelItemsInnerFromJSON,
    PagedLoggerResponseModelItemsInnerFromJSONTyped,
    PagedLoggerResponseModelItemsInnerToJSON,
    PagedLoggerResponseModelItemsInnerToJSONTyped,
} from './PagedLoggerResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedLoggerResponseModel
 */
export interface PagedLoggerResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedLoggerResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedLoggerResponseModelItemsInner>}
     * @memberof PagedLoggerResponseModel
     */
    items: Array<PagedLoggerResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedLoggerResponseModel interface.
 */
export function instanceOfPagedLoggerResponseModel(value: object): value is PagedLoggerResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedLoggerResponseModelFromJSON(json: any): PagedLoggerResponseModel {
    return PagedLoggerResponseModelFromJSONTyped(json, false);
}

export function PagedLoggerResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedLoggerResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedLoggerResponseModelItemsInnerFromJSON)),
    };
}

export function PagedLoggerResponseModelToJSON(json: any): PagedLoggerResponseModel {
    return PagedLoggerResponseModelToJSONTyped(json, false);
}

export function PagedLoggerResponseModelToJSONTyped(value?: PagedLoggerResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedLoggerResponseModelItemsInnerToJSON)),
    };
}

