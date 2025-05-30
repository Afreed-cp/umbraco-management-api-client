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
 * @interface MediaTypeCompositionResponseModel
 */
export interface MediaTypeCompositionResponseModel {
    /**
     * 
     * @type {string}
     * @memberof MediaTypeCompositionResponseModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MediaTypeCompositionResponseModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MediaTypeCompositionResponseModel
     */
    icon: string;
}

/**
 * Check if a given object implements the MediaTypeCompositionResponseModel interface.
 */
export function instanceOfMediaTypeCompositionResponseModel(value: object): value is MediaTypeCompositionResponseModel {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    return true;
}

export function MediaTypeCompositionResponseModelFromJSON(json: any): MediaTypeCompositionResponseModel {
    return MediaTypeCompositionResponseModelFromJSONTyped(json, false);
}

export function MediaTypeCompositionResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaTypeCompositionResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'icon': json['icon'],
    };
}

export function MediaTypeCompositionResponseModelToJSON(json: any): MediaTypeCompositionResponseModel {
    return MediaTypeCompositionResponseModelToJSONTyped(json, false);
}

export function MediaTypeCompositionResponseModelToJSONTyped(value?: MediaTypeCompositionResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'icon': value['icon'],
    };
}

