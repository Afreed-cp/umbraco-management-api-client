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
 * @interface ScheduleRequestModel
 */
export interface ScheduleRequestModel {
    /**
     * 
     * @type {Date}
     * @memberof ScheduleRequestModel
     */
    publishTime?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof ScheduleRequestModel
     */
    unpublishTime?: Date | null;
}

/**
 * Check if a given object implements the ScheduleRequestModel interface.
 */
export function instanceOfScheduleRequestModel(value: object): value is ScheduleRequestModel {
    return true;
}

export function ScheduleRequestModelFromJSON(json: any): ScheduleRequestModel {
    return ScheduleRequestModelFromJSONTyped(json, false);
}

export function ScheduleRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'publishTime': json['publishTime'] == null ? undefined : (new Date(json['publishTime'])),
        'unpublishTime': json['unpublishTime'] == null ? undefined : (new Date(json['unpublishTime'])),
    };
}

export function ScheduleRequestModelToJSON(json: any): ScheduleRequestModel {
    return ScheduleRequestModelToJSONTyped(json, false);
}

export function ScheduleRequestModelToJSONTyped(value?: ScheduleRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'publishTime': value['publishTime'] == null ? undefined : ((value['publishTime'] as any).toISOString()),
        'unpublishTime': value['unpublishTime'] == null ? undefined : ((value['unpublishTime'] as any).toISOString()),
    };
}

