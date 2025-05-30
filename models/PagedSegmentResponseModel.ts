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
import type { PagedSegmentResponseModelItemsInner } from './PagedSegmentResponseModelItemsInner';
import {
    PagedSegmentResponseModelItemsInnerFromJSON,
    PagedSegmentResponseModelItemsInnerFromJSONTyped,
    PagedSegmentResponseModelItemsInnerToJSON,
    PagedSegmentResponseModelItemsInnerToJSONTyped,
} from './PagedSegmentResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedSegmentResponseModel
 */
export interface PagedSegmentResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedSegmentResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedSegmentResponseModelItemsInner>}
     * @memberof PagedSegmentResponseModel
     */
    items: Array<PagedSegmentResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedSegmentResponseModel interface.
 */
export function instanceOfPagedSegmentResponseModel(value: object): value is PagedSegmentResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedSegmentResponseModelFromJSON(json: any): PagedSegmentResponseModel {
    return PagedSegmentResponseModelFromJSONTyped(json, false);
}

export function PagedSegmentResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedSegmentResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedSegmentResponseModelItemsInnerFromJSON)),
    };
}

export function PagedSegmentResponseModelToJSON(json: any): PagedSegmentResponseModel {
    return PagedSegmentResponseModelToJSONTyped(json, false);
}

export function PagedSegmentResponseModelToJSONTyped(value?: PagedSegmentResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedSegmentResponseModelItemsInnerToJSON)),
    };
}

