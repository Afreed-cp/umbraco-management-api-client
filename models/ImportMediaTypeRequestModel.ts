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
 * @interface ImportMediaTypeRequestModel
 */
export interface ImportMediaTypeRequestModel {
    /**
     * 
     * @type {ReferenceByIdModel}
     * @memberof ImportMediaTypeRequestModel
     */
    file: ReferenceByIdModel;
}

/**
 * Check if a given object implements the ImportMediaTypeRequestModel interface.
 */
export function instanceOfImportMediaTypeRequestModel(value: object): value is ImportMediaTypeRequestModel {
    if (!('file' in value) || value['file'] === undefined) return false;
    return true;
}

export function ImportMediaTypeRequestModelFromJSON(json: any): ImportMediaTypeRequestModel {
    return ImportMediaTypeRequestModelFromJSONTyped(json, false);
}

export function ImportMediaTypeRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportMediaTypeRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'file': ReferenceByIdModelFromJSON(json['file']),
    };
}

export function ImportMediaTypeRequestModelToJSON(json: any): ImportMediaTypeRequestModel {
    return ImportMediaTypeRequestModelToJSONTyped(json, false);
}

export function ImportMediaTypeRequestModelToJSONTyped(value?: ImportMediaTypeRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'file': ReferenceByIdModelToJSON(value['file']),
    };
}

