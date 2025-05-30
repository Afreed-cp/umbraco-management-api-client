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
import type { TelemetryLevelModel } from './TelemetryLevelModel';
import {
    TelemetryLevelModelFromJSON,
    TelemetryLevelModelFromJSONTyped,
    TelemetryLevelModelToJSON,
    TelemetryLevelModelToJSONTyped,
} from './TelemetryLevelModel';

/**
 * 
 * @export
 * @interface TelemetryRequestModel
 */
export interface TelemetryRequestModel {
    /**
     * 
     * @type {TelemetryLevelModel}
     * @memberof TelemetryRequestModel
     */
    telemetryLevel: TelemetryLevelModel;
}



/**
 * Check if a given object implements the TelemetryRequestModel interface.
 */
export function instanceOfTelemetryRequestModel(value: object): value is TelemetryRequestModel {
    if (!('telemetryLevel' in value) || value['telemetryLevel'] === undefined) return false;
    return true;
}

export function TelemetryRequestModelFromJSON(json: any): TelemetryRequestModel {
    return TelemetryRequestModelFromJSONTyped(json, false);
}

export function TelemetryRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelemetryRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'telemetryLevel': TelemetryLevelModelFromJSON(json['telemetryLevel']),
    };
}

export function TelemetryRequestModelToJSON(json: any): TelemetryRequestModel {
    return TelemetryRequestModelToJSONTyped(json, false);
}

export function TelemetryRequestModelToJSONTyped(value?: TelemetryRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'telemetryLevel': TelemetryLevelModelToJSON(value['telemetryLevel']),
    };
}

