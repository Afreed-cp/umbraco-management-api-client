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
import type { GetTreeDocumentAncestors200ResponseInner } from './GetTreeDocumentAncestors200ResponseInner';
import {
    GetTreeDocumentAncestors200ResponseInnerFromJSON,
    GetTreeDocumentAncestors200ResponseInnerFromJSONTyped,
    GetTreeDocumentAncestors200ResponseInnerToJSON,
    GetTreeDocumentAncestors200ResponseInnerToJSONTyped,
} from './GetTreeDocumentAncestors200ResponseInner';

/**
 * 
 * @export
 * @interface PagedDocumentTreeItemResponseModel
 */
export interface PagedDocumentTreeItemResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PagedDocumentTreeItemResponseModel
     */
    total: number;
    /**
     * 
     * @type {Array<GetTreeDocumentAncestors200ResponseInner>}
     * @memberof PagedDocumentTreeItemResponseModel
     */
    items: Array<GetTreeDocumentAncestors200ResponseInner>;
}

/**
 * Check if a given object implements the PagedDocumentTreeItemResponseModel interface.
 */
export function instanceOfPagedDocumentTreeItemResponseModel(value: object): value is PagedDocumentTreeItemResponseModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedDocumentTreeItemResponseModelFromJSON(json: any): PagedDocumentTreeItemResponseModel {
    return PagedDocumentTreeItemResponseModelFromJSONTyped(json, false);
}

export function PagedDocumentTreeItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedDocumentTreeItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(GetTreeDocumentAncestors200ResponseInnerFromJSON)),
    };
}

export function PagedDocumentTreeItemResponseModelToJSON(json: any): PagedDocumentTreeItemResponseModel {
    return PagedDocumentTreeItemResponseModelToJSONTyped(json, false);
}

export function PagedDocumentTreeItemResponseModelToJSONTyped(value?: PagedDocumentTreeItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(GetTreeDocumentAncestors200ResponseInnerToJSON)),
    };
}

