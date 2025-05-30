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
import type { GetTreePartialViewAncestors200ResponseInner } from './GetTreePartialViewAncestors200ResponseInner';
import {
    GetTreePartialViewAncestors200ResponseInnerFromJSON,
    GetTreePartialViewAncestors200ResponseInnerFromJSONTyped,
    GetTreePartialViewAncestors200ResponseInnerToJSON,
    GetTreePartialViewAncestors200ResponseInnerToJSONTyped,
} from './GetTreePartialViewAncestors200ResponseInner';

/**
 * 
 * @export
 * @interface PagedFileSystemTreeItemPresentationModel
 */
export interface PagedFileSystemTreeItemPresentationModel {
    /**
     * 
     * @type {number}
     * @memberof PagedFileSystemTreeItemPresentationModel
     */
    total: number;
    /**
     * 
     * @type {Array<GetTreePartialViewAncestors200ResponseInner>}
     * @memberof PagedFileSystemTreeItemPresentationModel
     */
    items: Array<GetTreePartialViewAncestors200ResponseInner>;
}

/**
 * Check if a given object implements the PagedFileSystemTreeItemPresentationModel interface.
 */
export function instanceOfPagedFileSystemTreeItemPresentationModel(value: object): value is PagedFileSystemTreeItemPresentationModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedFileSystemTreeItemPresentationModelFromJSON(json: any): PagedFileSystemTreeItemPresentationModel {
    return PagedFileSystemTreeItemPresentationModelFromJSONTyped(json, false);
}

export function PagedFileSystemTreeItemPresentationModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedFileSystemTreeItemPresentationModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(GetTreePartialViewAncestors200ResponseInnerFromJSON)),
    };
}

export function PagedFileSystemTreeItemPresentationModelToJSON(json: any): PagedFileSystemTreeItemPresentationModel {
    return PagedFileSystemTreeItemPresentationModelToJSONTyped(json, false);
}

export function PagedFileSystemTreeItemPresentationModelToJSONTyped(value?: PagedFileSystemTreeItemPresentationModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(GetTreePartialViewAncestors200ResponseInnerToJSON)),
    };
}

