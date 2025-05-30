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
import type { PagedIReferenceResponseModelItemsInner } from './PagedIReferenceResponseModelItemsInner';
import {
    PagedIReferenceResponseModelItemsInnerFromJSON,
    PagedIReferenceResponseModelItemsInnerFromJSONTyped,
    PagedIReferenceResponseModelItemsInnerToJSON,
    PagedIReferenceResponseModelItemsInnerToJSONTyped,
} from './PagedIReferenceResponseModelItemsInner';

/**
 * 
 * @export
 * @interface PagedIReferenceResponseModel
 */
export interface PagedIReferenceResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedIReferenceResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedIReferenceResponseModelItemsInner>}
     * @memberof PagedIReferenceResponseModel
     */
    items: Array<PagedIReferenceResponseModelItemsInner>;
}

/**
 * Check if a given object implements the PagedIReferenceResponseModel interface.
 */
export function instanceOfPagedIReferenceResponseModel(value: object): value is PagedIReferenceResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedIReferenceResponseModelFromJSON(json: any): PagedIReferenceResponseModel {
    return PagedIReferenceResponseModelFromJSONTyped(json, false);
}

export function PagedIReferenceResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedIReferenceResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedIReferenceResponseModelItemsInnerFromJSON)),
    };
}

export function PagedIReferenceResponseModelToJSON(json: any): PagedIReferenceResponseModel {
    return PagedIReferenceResponseModelToJSONTyped(json, false);
}

export function PagedIReferenceResponseModelToJSONTyped(value?: PagedIReferenceResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedIReferenceResponseModelItemsInnerToJSON)),
    };
}

