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
 * @interface CreateLanguageRequestModel
 */
export interface CreateLanguageRequestModel {
    /**
     * 
     * @type {string}
     * @memberof CreateLanguageRequestModel
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateLanguageRequestModel
     */
    isDefault: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateLanguageRequestModel
     */
    isMandatory: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateLanguageRequestModel
     */
    fallbackIsoCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateLanguageRequestModel
     */
    isoCode: string;
}

/**
 * Check if a given object implements the CreateLanguageRequestModel interface.
 */
export function instanceOfCreateLanguageRequestModel(value: object): value is CreateLanguageRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('isDefault' in value) || value['isDefault'] === undefined) return false;
    if (!('isMandatory' in value) || value['isMandatory'] === undefined) return false;
    if (!('isoCode' in value) || value['isoCode'] === undefined) return false;
    return true;
}

export function CreateLanguageRequestModelFromJSON(json: any): CreateLanguageRequestModel {
    return CreateLanguageRequestModelFromJSONTyped(json, false);
}

export function CreateLanguageRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLanguageRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'isDefault': json['isDefault'],
        'isMandatory': json['isMandatory'],
        'fallbackIsoCode': json['fallbackIsoCode'] == null ? undefined : json['fallbackIsoCode'],
        'isoCode': json['isoCode'],
    };
}

export function CreateLanguageRequestModelToJSON(json: any): CreateLanguageRequestModel {
    return CreateLanguageRequestModelToJSONTyped(json, false);
}

export function CreateLanguageRequestModelToJSONTyped(value?: CreateLanguageRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'isDefault': value['isDefault'],
        'isMandatory': value['isMandatory'],
        'fallbackIsoCode': value['fallbackIsoCode'],
        'isoCode': value['isoCode'],
    };
}

