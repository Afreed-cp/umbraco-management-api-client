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
 * @interface UpdateUserGroupsOnUserRequestModel
 */
export interface UpdateUserGroupsOnUserRequestModel {
    /**
     * 
     * @type {Set<PostUserGroupByIdUsersRequestInner>}
     * @memberof UpdateUserGroupsOnUserRequestModel
     */
    userIds: Set<PostUserGroupByIdUsersRequestInner>;
    /**
     * 
     * @type {Set<PostUserGroupByIdUsersRequestInner>}
     * @memberof UpdateUserGroupsOnUserRequestModel
     */
    userGroupIds: Set<PostUserGroupByIdUsersRequestInner>;
}

/**
 * Check if a given object implements the UpdateUserGroupsOnUserRequestModel interface.
 */
export function instanceOfUpdateUserGroupsOnUserRequestModel(value: object): value is UpdateUserGroupsOnUserRequestModel {
    if (!('userIds' in value) || value['userIds'] === undefined) return false;
    if (!('userGroupIds' in value) || value['userGroupIds'] === undefined) return false;
    return true;
}

export function UpdateUserGroupsOnUserRequestModelFromJSON(json: any): UpdateUserGroupsOnUserRequestModel {
    return UpdateUserGroupsOnUserRequestModelFromJSONTyped(json, false);
}

export function UpdateUserGroupsOnUserRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserGroupsOnUserRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'userIds': (new Set((json['userIds'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerFromJSON))),
        'userGroupIds': (new Set((json['userGroupIds'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerFromJSON))),
    };
}

export function UpdateUserGroupsOnUserRequestModelToJSON(json: any): UpdateUserGroupsOnUserRequestModel {
    return UpdateUserGroupsOnUserRequestModelToJSONTyped(json, false);
}

export function UpdateUserGroupsOnUserRequestModelToJSONTyped(value?: UpdateUserGroupsOnUserRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userIds': (Array.from(value['userIds'] as Set<any>).map(PostUserGroupByIdUsersRequestInnerToJSON)),
        'userGroupIds': (Array.from(value['userGroupIds'] as Set<any>).map(PostUserGroupByIdUsersRequestInnerToJSON)),
    };
}

