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
 * @interface LanguageItemResponseModel
 */
export interface LanguageItemResponseModel {
    /**
     * 
     * @type {string}
     * @memberof LanguageItemResponseModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageItemResponseModel
     */
    isoCode: string;
}

/**
 * Check if a given object implements the LanguageItemResponseModel interface.
 */
export function instanceOfLanguageItemResponseModel(value: object): value is LanguageItemResponseModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('isoCode' in value) || value['isoCode'] === undefined) return false;
    return true;
}

export function LanguageItemResponseModelFromJSON(json: any): LanguageItemResponseModel {
    return LanguageItemResponseModelFromJSONTyped(json, false);
}

export function LanguageItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'isoCode': json['isoCode'],
    };
}

export function LanguageItemResponseModelToJSON(json: any): LanguageItemResponseModel {
    return LanguageItemResponseModelToJSONTyped(json, false);
}

export function LanguageItemResponseModelToJSONTyped(value?: LanguageItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'isoCode': value['isoCode'],
    };
}

