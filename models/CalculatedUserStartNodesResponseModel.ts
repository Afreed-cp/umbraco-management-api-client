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
 * @interface CalculatedUserStartNodesResponseModel
 */
export interface CalculatedUserStartNodesResponseModel {
    /**
     * 
     * @type {string}
     * @memberof CalculatedUserStartNodesResponseModel
     */
    id: string;
    /**
     * 
     * @type {Set<PostUserGroupByIdUsersRequestInner>}
     * @memberof CalculatedUserStartNodesResponseModel
     */
    documentStartNodeIds: Set<PostUserGroupByIdUsersRequestInner>;
    /**
     * 
     * @type {boolean}
     * @memberof CalculatedUserStartNodesResponseModel
     */
    hasDocumentRootAccess: boolean;
    /**
     * 
     * @type {Set<PostUserGroupByIdUsersRequestInner>}
     * @memberof CalculatedUserStartNodesResponseModel
     */
    mediaStartNodeIds: Set<PostUserGroupByIdUsersRequestInner>;
    /**
     * 
     * @type {boolean}
     * @memberof CalculatedUserStartNodesResponseModel
     */
    hasMediaRootAccess: boolean;
}

/**
 * Check if a given object implements the CalculatedUserStartNodesResponseModel interface.
 */
export function instanceOfCalculatedUserStartNodesResponseModel(value: object): value is CalculatedUserStartNodesResponseModel {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('documentStartNodeIds' in value) || value['documentStartNodeIds'] === undefined) return false;
    if (!('hasDocumentRootAccess' in value) || value['hasDocumentRootAccess'] === undefined) return false;
    if (!('mediaStartNodeIds' in value) || value['mediaStartNodeIds'] === undefined) return false;
    if (!('hasMediaRootAccess' in value) || value['hasMediaRootAccess'] === undefined) return false;
    return true;
}

export function CalculatedUserStartNodesResponseModelFromJSON(json: any): CalculatedUserStartNodesResponseModel {
    return CalculatedUserStartNodesResponseModelFromJSONTyped(json, false);
}

export function CalculatedUserStartNodesResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalculatedUserStartNodesResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'documentStartNodeIds': (new Set((json['documentStartNodeIds'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerFromJSON))),
        'hasDocumentRootAccess': json['hasDocumentRootAccess'],
        'mediaStartNodeIds': (new Set((json['mediaStartNodeIds'] as Array<any>).map(PostUserGroupByIdUsersRequestInnerFromJSON))),
        'hasMediaRootAccess': json['hasMediaRootAccess'],
    };
}

export function CalculatedUserStartNodesResponseModelToJSON(json: any): CalculatedUserStartNodesResponseModel {
    return CalculatedUserStartNodesResponseModelToJSONTyped(json, false);
}

export function CalculatedUserStartNodesResponseModelToJSONTyped(value?: CalculatedUserStartNodesResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'documentStartNodeIds': (Array.from(value['documentStartNodeIds'] as Set<any>).map(PostUserGroupByIdUsersRequestInnerToJSON)),
        'hasDocumentRootAccess': value['hasDocumentRootAccess'],
        'mediaStartNodeIds': (Array.from(value['mediaStartNodeIds'] as Set<any>).map(PostUserGroupByIdUsersRequestInnerToJSON)),
        'hasMediaRootAccess': value['hasMediaRootAccess'],
    };
}

