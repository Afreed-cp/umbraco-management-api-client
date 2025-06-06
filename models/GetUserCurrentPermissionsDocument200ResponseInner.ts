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

import type { UserPermissionsResponseModel } from './UserPermissionsResponseModel';
import {
    instanceOfUserPermissionsResponseModel,
    UserPermissionsResponseModelFromJSON,
    UserPermissionsResponseModelFromJSONTyped,
    UserPermissionsResponseModelToJSON,
} from './UserPermissionsResponseModel';

/**
 * @type GetUserCurrentPermissionsDocument200ResponseInner
 * 
 * @export
 */
export type GetUserCurrentPermissionsDocument200ResponseInner = UserPermissionsResponseModel;

export function GetUserCurrentPermissionsDocument200ResponseInnerFromJSON(json: any): GetUserCurrentPermissionsDocument200ResponseInner {
    return GetUserCurrentPermissionsDocument200ResponseInnerFromJSONTyped(json, false);
}

export function GetUserCurrentPermissionsDocument200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserCurrentPermissionsDocument200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfUserPermissionsResponseModel(json)) {
        return UserPermissionsResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetUserCurrentPermissionsDocument200ResponseInnerToJSON(json: any): any {
    return GetUserCurrentPermissionsDocument200ResponseInnerToJSONTyped(json, false);
}

export function GetUserCurrentPermissionsDocument200ResponseInnerToJSONTyped(value?: GetUserCurrentPermissionsDocument200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfUserPermissionsResponseModel(value)) {
        return UserPermissionsResponseModelToJSON(value as UserPermissionsResponseModel);
    }

    return {};
}

