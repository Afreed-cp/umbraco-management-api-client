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
import type { PostUserGroupByIdUsersRequestInner } from './PostUserGroupByIdUsersRequestInner';
import {
    PostUserGroupByIdUsersRequestInnerFromJSON,
    PostUserGroupByIdUsersRequestInnerFromJSONTyped,
    PostUserGroupByIdUsersRequestInnerToJSON,
    PostUserGroupByIdUsersRequestInnerToJSONTyped,
} from './PostUserGroupByIdUsersRequestInner';

/**
 * 
 * @export
 * @interface PagedReferenceByIdModel
 */
export interface PagedReferenceByIdModel {
    /**
     * 
     * @type {number}
     * @memberof PagedReferenceByIdModel
     */
    total: number;
    /**
     * 
     * @type {Array<PostUserGroupByIdUsersRequestInner>}
     * @memberof PagedReferenceByIdModel
     */
    items: Array<PostUserGroupByIdUsersRequestInner>;
}

/**
 * Check if a given object implements the PagedReferenceByIdModel interface.
 */
export function instanceOfPagedReferenceByIdModel(value: object): value is PagedReferenceByIdModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedReferenceByIdModelFromJSON(json: any): PagedReferenceByIdModel {
    return PagedReferenceByIdModelFromJSONTyped(json, false);
}

export function PagedReferenceByIdModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedReferenceByIdModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerFromJSON)),
    };
}

export function PagedReferenceByIdModelToJSON(json: any): PagedReferenceByIdModel {
    return PagedReferenceByIdModelToJSONTyped(json, false);
}

export function PagedReferenceByIdModelToJSONTyped(value?: PagedReferenceByIdModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerToJSON)),
    };
}

