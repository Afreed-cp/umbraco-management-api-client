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
 * @interface CreateTemplateRequestModel
 */
export interface CreateTemplateRequestModel {
    /**
     * 
     * @type {string}
     * @memberof CreateTemplateRequestModel
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTemplateRequestModel
     */
    alias: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTemplateRequestModel
     */
    content?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateTemplateRequestModel
     */
    id?: string | null;
}

/**
 * Check if a given object implements the CreateTemplateRequestModel interface.
 */
export function instanceOfCreateTemplateRequestModel(value: object): value is CreateTemplateRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('alias' in value) || value['alias'] === undefined) return false;
    return true;
}

export function CreateTemplateRequestModelFromJSON(json: any): CreateTemplateRequestModel {
    return CreateTemplateRequestModelFromJSONTyped(json, false);
}

export function CreateTemplateRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTemplateRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'alias': json['alias'],
        'content': json['content'] == null ? undefined : json['content'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function CreateTemplateRequestModelToJSON(json: any): CreateTemplateRequestModel {
    return CreateTemplateRequestModelToJSONTyped(json, false);
}

export function CreateTemplateRequestModelToJSONTyped(value?: CreateTemplateRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'alias': value['alias'],
        'content': value['content'],
        'id': value['id'],
    };
}

