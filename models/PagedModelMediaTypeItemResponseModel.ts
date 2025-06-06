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
import type { GetItemMediaType200ResponseInner } from './GetItemMediaType200ResponseInner';
import {
    GetItemMediaType200ResponseInnerFromJSON,
    GetItemMediaType200ResponseInnerFromJSONTyped,
    GetItemMediaType200ResponseInnerToJSON,
    GetItemMediaType200ResponseInnerToJSONTyped,
} from './GetItemMediaType200ResponseInner';

/**
 * 
 * @export
 * @interface PagedModelMediaTypeItemResponseModel
 */
export interface PagedModelMediaTypeItemResponseModel {
    /**
     * 
     * @type {Array<GetItemMediaType200ResponseInner>}
     * @memberof PagedModelMediaTypeItemResponseModel
     */
    items: Array<GetItemMediaType200ResponseInner>;
    /**
     * 
     * @type {number}
     * @memberof PagedModelMediaTypeItemResponseModel
     */
    total: number;
}

/**
 * Check if a given object implements the PagedModelMediaTypeItemResponseModel interface.
 */
export function instanceOfPagedModelMediaTypeItemResponseModel(value: object): value is PagedModelMediaTypeItemResponseModel {
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function PagedModelMediaTypeItemResponseModelFromJSON(json: any): PagedModelMediaTypeItemResponseModel {
    return PagedModelMediaTypeItemResponseModelFromJSONTyped(json, false);
}

export function PagedModelMediaTypeItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedModelMediaTypeItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(GetItemMediaType200ResponseInnerFromJSON)),
        'total': json['total'],
    };
}

export function PagedModelMediaTypeItemResponseModelToJSON(json: any): PagedModelMediaTypeItemResponseModel {
    return PagedModelMediaTypeItemResponseModelToJSONTyped(json, false);
}

export function PagedModelMediaTypeItemResponseModelToJSONTyped(value?: PagedModelMediaTypeItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'items': ((value['items'] as Array<any>).map(GetItemMediaType200ResponseInnerToJSON)),
        'total': value['total'],
    };
}

