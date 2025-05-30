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
import type { PagedSavedLogSearchResponseModelItemsInner } from './PagedSavedLogSearchResponseModelItemsInner';
import {
    PagedSavedLogSearchResponseModelItemsInnerFromJSON,
    PagedSavedLogSearchResponseModelItemsInnerFromJSONTyped,
    PagedSavedLogSearchResponseModelItemsInnerToJSON,
    PagedSavedLogSearchResponseModelItemsInnerToJSONTyped,
} from './PagedSavedLogSearchResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedSavedLogSearchResponseModel
 */
export interface PagedSavedLogSearchResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedSavedLogSearchResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedSavedLogSearchResponseModelItemsInner>}
     * @memberof PagedSavedLogSearchResponseModel
     */
    items: Array<PagedSavedLogSearchResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedSavedLogSearchResponseModel interface.
 */
export function instanceOfPagedSavedLogSearchResponseModel(value: object): value is PagedSavedLogSearchResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedSavedLogSearchResponseModelFromJSON(json: any): PagedSavedLogSearchResponseModel {
    return PagedSavedLogSearchResponseModelFromJSONTyped(json, false);
}

export function PagedSavedLogSearchResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedSavedLogSearchResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedSavedLogSearchResponseModelItemsInnerFromJSON)),
    };
}

export function PagedSavedLogSearchResponseModelToJSON(json: any): PagedSavedLogSearchResponseModel {
    return PagedSavedLogSearchResponseModelToJSONTyped(json, false);
}

export function PagedSavedLogSearchResponseModelToJSONTyped(value?: PagedSavedLogSearchResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedSavedLogSearchResponseModelItemsInnerToJSON)),
    };
}

