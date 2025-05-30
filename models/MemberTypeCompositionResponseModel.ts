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
 * @interface MemberTypeCompositionResponseModel
 */
export interface MemberTypeCompositionResponseModel {
    /**
     * 
     * @type {string}
     * @memberof MemberTypeCompositionResponseModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MemberTypeCompositionResponseModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MemberTypeCompositionResponseModel
     */
    icon: string;
}

/**
 * Check if a given object implements the MemberTypeCompositionResponseModel interface.
 */
export function instanceOfMemberTypeCompositionResponseModel(value: object): value is MemberTypeCompositionResponseModel {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    return true;
}

export function MemberTypeCompositionResponseModelFromJSON(json: any): MemberTypeCompositionResponseModel {
    return MemberTypeCompositionResponseModelFromJSONTyped(json, false);
}

export function MemberTypeCompositionResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberTypeCompositionResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'icon': json['icon'],
    };
}

export function MemberTypeCompositionResponseModelToJSON(json: any): MemberTypeCompositionResponseModel {
    return MemberTypeCompositionResponseModelToJSONTyped(json, false);
}

export function MemberTypeCompositionResponseModelToJSONTyped(value?: MemberTypeCompositionResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'icon': value['icon'],
    };
}

