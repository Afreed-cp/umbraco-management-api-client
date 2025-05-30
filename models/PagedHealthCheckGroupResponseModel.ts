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
import type { PagedHealthCheckGroupResponseModelItemsInner } from './PagedHealthCheckGroupResponseModelItemsInner';
import {
    PagedHealthCheckGroupResponseModelItemsInnerFromJSON,
    PagedHealthCheckGroupResponseModelItemsInnerFromJSONTyped,
    PagedHealthCheckGroupResponseModelItemsInnerToJSON,
    PagedHealthCheckGroupResponseModelItemsInnerToJSONTyped,
} from './PagedHealthCheckGroupResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedHealthCheckGroupResponseModel
 */
export interface PagedHealthCheckGroupResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedHealthCheckGroupResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedHealthCheckGroupResponseModelItemsInner>}
     * @memberof PagedHealthCheckGroupResponseModel
     */
    items: Array<PagedHealthCheckGroupResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedHealthCheckGroupResponseModel interface.
 */
export function instanceOfPagedHealthCheckGroupResponseModel(value: object): value is PagedHealthCheckGroupResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedHealthCheckGroupResponseModelFromJSON(json: any): PagedHealthCheckGroupResponseModel {
    return PagedHealthCheckGroupResponseModelFromJSONTyped(json, false);
}

export function PagedHealthCheckGroupResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedHealthCheckGroupResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedHealthCheckGroupResponseModelItemsInnerFromJSON)),
    };
}

export function PagedHealthCheckGroupResponseModelToJSON(json: any): PagedHealthCheckGroupResponseModel {
    return PagedHealthCheckGroupResponseModelToJSONTyped(json, false);
}

export function PagedHealthCheckGroupResponseModelToJSONTyped(value?: PagedHealthCheckGroupResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedHealthCheckGroupResponseModelItemsInnerToJSON)),
    };
}

