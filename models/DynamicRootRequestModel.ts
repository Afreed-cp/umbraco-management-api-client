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
import type { DynamicRootContextRequestModel } from './DynamicRootContextRequestModel';
import {
    DynamicRootContextRequestModelFromJSON,
    DynamicRootContextRequestModelFromJSONTyped,
    DynamicRootContextRequestModelToJSON,
    DynamicRootContextRequestModelToJSONTyped,
} from './DynamicRootContextRequestModel';
import type { DynamicRootQueryRequestModel } from './DynamicRootQueryRequestModel';
import {
    DynamicRootQueryRequestModelFromJSON,
    DynamicRootQueryRequestModelFromJSONTyped,
    DynamicRootQueryRequestModelToJSON,
    DynamicRootQueryRequestModelToJSONTyped,
} from './DynamicRootQueryRequestModel';

/**
 * 
 * @export
 * @interface DynamicRootRequestModel
 */
export interface DynamicRootRequestModel {
    /**
     * 
     * @type {DynamicRootContextRequestModel}
     * @memberof DynamicRootRequestModel
     */
    context: DynamicRootContextRequestModel;
    /**
     * 
     * @type {DynamicRootQueryRequestModel}
     * @memberof DynamicRootRequestModel
     */
    query: DynamicRootQueryRequestModel;
}

/**
 * Check if a given object implements the DynamicRootRequestModel interface.
 */
export function instanceOfDynamicRootRequestModel(value: object): value is DynamicRootRequestModel {
    if (!('context' in value) || value['context'] === undefined) return false;
    if (!('query' in value) || value['query'] === undefined) return false;
    return true;
}

export function DynamicRootRequestModelFromJSON(json: any): DynamicRootRequestModel {
    return DynamicRootRequestModelFromJSONTyped(json, false);
}

export function DynamicRootRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicRootRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'context': DynamicRootContextRequestModelFromJSON(json['context']),
        'query': DynamicRootQueryRequestModelFromJSON(json['query']),
    };
}

export function DynamicRootRequestModelToJSON(json: any): DynamicRootRequestModel {
    return DynamicRootRequestModelToJSONTyped(json, false);
}

export function DynamicRootRequestModelToJSONTyped(value?: DynamicRootRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'context': DynamicRootContextRequestModelToJSON(value['context']),
        'query': DynamicRootQueryRequestModelToJSON(value['query']),
    };
}

