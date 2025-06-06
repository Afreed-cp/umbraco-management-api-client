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
import type { PagedUserResponseModelItemsInner } from './PagedUserResponseModelItemsInner';
import {
    PagedUserResponseModelItemsInnerFromJSON,
    PagedUserResponseModelItemsInnerFromJSONTyped,
    PagedUserResponseModelItemsInnerToJSON,
    PagedUserResponseModelItemsInnerToJSONTyped,
} from './PagedUserResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedUserResponseModel
 */
export interface PagedUserResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedUserResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedUserResponseModelItemsInner>}
     * @memberof PagedUserResponseModel
     */
    items: Array<PagedUserResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedUserResponseModel interface.
 */
export function instanceOfPagedUserResponseModel(value: object): value is PagedUserResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedUserResponseModelFromJSON(json: any): PagedUserResponseModel {
    return PagedUserResponseModelFromJSONTyped(json, false);
}

export function PagedUserResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedUserResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedUserResponseModelItemsInnerFromJSON)),
    };
}

export function PagedUserResponseModelToJSON(json: any): PagedUserResponseModel {
    return PagedUserResponseModelToJSONTyped(json, false);
}

export function PagedUserResponseModelToJSONTyped(value?: PagedUserResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedUserResponseModelItemsInnerToJSON)),
    };
}

