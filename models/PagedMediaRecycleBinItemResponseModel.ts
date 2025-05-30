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
import type { PagedMediaRecycleBinItemResponseModelItemsInner } from './PagedMediaRecycleBinItemResponseModelItemsInner';
import {
    PagedMediaRecycleBinItemResponseModelItemsInnerFromJSON,
    PagedMediaRecycleBinItemResponseModelItemsInnerFromJSONTyped,
    PagedMediaRecycleBinItemResponseModelItemsInnerToJSON,
    PagedMediaRecycleBinItemResponseModelItemsInnerToJSONTyped,
} from './PagedMediaRecycleBinItemResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedMediaRecycleBinItemResponseModel
 */
export interface PagedMediaRecycleBinItemResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedMediaRecycleBinItemResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedMediaRecycleBinItemResponseModelItemsInner>}
     * @memberof PagedMediaRecycleBinItemResponseModel
     */
    items: Array<PagedMediaRecycleBinItemResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedMediaRecycleBinItemResponseModel interface.
 */
export function instanceOfPagedMediaRecycleBinItemResponseModel(value: object): value is PagedMediaRecycleBinItemResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedMediaRecycleBinItemResponseModelFromJSON(json: any): PagedMediaRecycleBinItemResponseModel {
    return PagedMediaRecycleBinItemResponseModelFromJSONTyped(json, false);
}

export function PagedMediaRecycleBinItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedMediaRecycleBinItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedMediaRecycleBinItemResponseModelItemsInnerFromJSON)),
    };
}

export function PagedMediaRecycleBinItemResponseModelToJSON(json: any): PagedMediaRecycleBinItemResponseModel {
    return PagedMediaRecycleBinItemResponseModelToJSONTyped(json, false);
}

export function PagedMediaRecycleBinItemResponseModelToJSONTyped(value?: PagedMediaRecycleBinItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedMediaRecycleBinItemResponseModelItemsInnerToJSON)),
    };
}

