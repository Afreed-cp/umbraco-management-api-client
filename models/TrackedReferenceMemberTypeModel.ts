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
/**
 * 
 * @export
 * @interface TrackedReferenceMemberTypeModel
 */
export interface TrackedReferenceMemberTypeModel {
    /**
     * 
     * @type {string}
     * @memberof TrackedReferenceMemberTypeModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof TrackedReferenceMemberTypeModel
     */
    icon?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackedReferenceMemberTypeModel
     */
    alias?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TrackedReferenceMemberTypeModel
     */
    name?: string | null;
}

/**
 * Check if a given object implements the TrackedReferenceMemberTypeModel interface.
 */
export function instanceOfTrackedReferenceMemberTypeModel(value: object): value is TrackedReferenceMemberTypeModel {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TrackedReferenceMemberTypeModelFromJSON(json: any): TrackedReferenceMemberTypeModel {
    return TrackedReferenceMemberTypeModelFromJSONTyped(json, false);
}

export function TrackedReferenceMemberTypeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedReferenceMemberTypeModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'alias': json['alias'] == null ? undefined : json['alias'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function TrackedReferenceMemberTypeModelToJSON(json: any): TrackedReferenceMemberTypeModel {
    return TrackedReferenceMemberTypeModelToJSONTyped(json, false);
}

export function TrackedReferenceMemberTypeModelToJSONTyped(value?: TrackedReferenceMemberTypeModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'icon': value['icon'],
        'alias': value['alias'],
        'name': value['name'],
    };
}

