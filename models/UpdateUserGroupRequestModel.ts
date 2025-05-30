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
import type { CreateUserGroupRequestModelPermissionsInner } from './CreateUserGroupRequestModelPermissionsInner';
import {
    CreateUserGroupRequestModelPermissionsInnerFromJSON,
    CreateUserGroupRequestModelPermissionsInnerFromJSONTyped,
    CreateUserGroupRequestModelPermissionsInnerToJSON,
    CreateUserGroupRequestModelPermissionsInnerToJSONTyped,
} from './CreateUserGroupRequestModelPermissionsInner';
import type { ReferenceByIdModel } from './ReferenceByIdModel';
import {
    ReferenceByIdModelFromJSON,
    ReferenceByIdModelFromJSONTyped,
    ReferenceByIdModelToJSON,
    ReferenceByIdModelToJSONTyped,
} from './ReferenceByIdModel';

/**
 * 
 * @export
 * @interface UpdateUserGroupRequestModel
 */
export interface UpdateUserGroupRequestModel {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserGroupRequestModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserGroupRequestModel
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserGroupRequestModel
     */
    icon?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateUserGroupRequestModel
     */
    sections: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateUserGroupRequestModel
     */
    languages: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserGroupRequestModel
     */
    hasAccessToAllLanguages: boolean;
    /**
     * 
     * @type {ReferenceByIdModel}
     * @memberof UpdateUserGroupRequestModel
     */
    documentStartNode?: ReferenceByIdModel | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserGroupRequestModel
     */
    documentRootAccess: boolean;
    /**
     * 
     * @type {ReferenceByIdModel}
     * @memberof UpdateUserGroupRequestModel
     */
    mediaStartNode?: ReferenceByIdModel | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateUserGroupRequestModel
     */
    mediaRootAccess: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof UpdateUserGroupRequestModel
     */
    fallbackPermissions: Set<string>;
    /**
     * 
     * @type {Set<CreateUserGroupRequestModelPermissionsInner>}
     * @memberof UpdateUserGroupRequestModel
     */
    permissions: Set<CreateUserGroupRequestModelPermissionsInner>;
}

/**
 * Check if a given object implements the UpdateUserGroupRequestModel interface.
 */
export function instanceOfUpdateUserGroupRequestModel(value: object): value is UpdateUserGroupRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('alias' in value) || value['alias'] === undefined) return false;
    if (!('sections' in value) || value['sections'] === undefined) return false;
    if (!('languages' in value) || value['languages'] === undefined) return false;
    if (!('hasAccessToAllLanguages' in value) || value['hasAccessToAllLanguages'] === undefined) return false;
    if (!('documentRootAccess' in value) || value['documentRootAccess'] === undefined) return false;
    if (!('mediaRootAccess' in value) || value['mediaRootAccess'] === undefined) return false;
    if (!('fallbackPermissions' in value) || value['fallbackPermissions'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    return true;
}

export function UpdateUserGroupRequestModelFromJSON(json: any): UpdateUserGroupRequestModel {
    return UpdateUserGroupRequestModelFromJSONTyped(json, false);
}

export function UpdateUserGroupRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserGroupRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'alias': json['alias'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'sections': json['sections'],
        'languages': json['languages'],
        'hasAccessToAllLanguages': json['hasAccessToAllLanguages'],
        'documentStartNode': json['documentStartNode'] == null ? undefined : ReferenceByIdModelFromJSON(json['documentStartNode']),
        'documentRootAccess': json['documentRootAccess'],
        'mediaStartNode': json['mediaStartNode'] == null ? undefined : ReferenceByIdModelFromJSON(json['mediaStartNode']),
        'mediaRootAccess': json['mediaRootAccess'],
        'fallbackPermissions': new Set(json['fallbackPermissions']),
        'permissions': (new Set((json['permissions'] as Array<any>).map(CreateUserGroupRequestModelPermissionsInnerFromJSON))),
    };
}

export function UpdateUserGroupRequestModelToJSON(json: any): UpdateUserGroupRequestModel {
    return UpdateUserGroupRequestModelToJSONTyped(json, false);
}

export function UpdateUserGroupRequestModelToJSONTyped(value?: UpdateUserGroupRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'alias': value['alias'],
        'icon': value['icon'],
        'sections': value['sections'],
        'languages': value['languages'],
        'hasAccessToAllLanguages': value['hasAccessToAllLanguages'],
        'documentStartNode': ReferenceByIdModelToJSON(value['documentStartNode']),
        'documentRootAccess': value['documentRootAccess'],
        'mediaStartNode': ReferenceByIdModelToJSON(value['mediaStartNode']),
        'mediaRootAccess': value['mediaRootAccess'],
        'fallbackPermissions': Array.from(value['fallbackPermissions'] as Set<any>),
        'permissions': (Array.from(value['permissions'] as Set<any>).map(CreateUserGroupRequestModelPermissionsInnerToJSON)),
    };
}

