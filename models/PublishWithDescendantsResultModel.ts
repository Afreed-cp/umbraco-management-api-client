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
 * @interface PublishWithDescendantsResultModel
 */
export interface PublishWithDescendantsResultModel {
    /**
     * 
     * @type {string}
     * @memberof PublishWithDescendantsResultModel
     */
    taskId: string;
    /**
     * 
     * @type {boolean}
     * @memberof PublishWithDescendantsResultModel
     */
    isComplete: boolean;
}

/**
 * Check if a given object implements the PublishWithDescendantsResultModel interface.
 */
export function instanceOfPublishWithDescendantsResultModel(value: object): value is PublishWithDescendantsResultModel {
    if (!('taskId' in value) || value['taskId'] === undefined) return false;
    if (!('isComplete' in value) || value['isComplete'] === undefined) return false;
    return true;
}

export function PublishWithDescendantsResultModelFromJSON(json: any): PublishWithDescendantsResultModel {
    return PublishWithDescendantsResultModelFromJSONTyped(json, false);
}

export function PublishWithDescendantsResultModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishWithDescendantsResultModel {
    if (json == null) {
        return json;
    }
    return {
        
        'taskId': json['taskId'],
        'isComplete': json['isComplete'],
    };
}

export function PublishWithDescendantsResultModelToJSON(json: any): PublishWithDescendantsResultModel {
    return PublishWithDescendantsResultModelToJSONTyped(json, false);
}

export function PublishWithDescendantsResultModelToJSONTyped(value?: PublishWithDescendantsResultModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'taskId': value['taskId'],
        'isComplete': value['isComplete'],
    };
}

