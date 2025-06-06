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
 * @interface UpdateFolderResponseModel
 */
export interface UpdateFolderResponseModel {
    /**
     * 
     * @type {string}
     * @memberof UpdateFolderResponseModel
     */
    name: string;
}

/**
 * Check if a given object implements the UpdateFolderResponseModel interface.
 */
export function instanceOfUpdateFolderResponseModel(value: object): value is UpdateFolderResponseModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function UpdateFolderResponseModelFromJSON(json: any): UpdateFolderResponseModel {
    return UpdateFolderResponseModelFromJSONTyped(json, false);
}

export function UpdateFolderResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFolderResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function UpdateFolderResponseModelToJSON(json: any): UpdateFolderResponseModel {
    return UpdateFolderResponseModelToJSONTyped(json, false);
}

export function UpdateFolderResponseModelToJSONTyped(value?: UpdateFolderResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

