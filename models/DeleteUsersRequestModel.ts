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
 * @interface DeleteUsersRequestModel
 */
export interface DeleteUsersRequestModel {
    /**
     * 
     * @type {Set<PostUserGroupByIdUsersRequestInner>}
     * @memberof DeleteUsersRequestModel
     */
    userIds: Set<PostUserGroupByIdUsersRequestInner>;
}

/**
 * Check if a given object implements the DeleteUsersRequestModel interface.
 */
export function instanceOfDeleteUsersRequestModel(value: object): value is DeleteUsersRequestModel {
    if (!('userIds' in value) || value['userIds'] === undefined) return false;
    return true;
}

export function DeleteUsersRequestModelFromJSON(json: any): DeleteUsersRequestModel {
    return DeleteUsersRequestModelFromJSONTyped(json, false);
}

export function DeleteUsersRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteUsersRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'userIds': (new Set((json['userIds'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerFromJSON))),
    };
}

export function DeleteUsersRequestModelToJSON(json: any): DeleteUsersRequestModel {
    return DeleteUsersRequestModelToJSONTyped(json, false);
}

export function DeleteUsersRequestModelToJSONTyped(value?: DeleteUsersRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userIds': (Array.from(value['userIds'] as Set<any>).map(PostUserGroupByIdUsersRequestInnerToJSON)),
    };
}

