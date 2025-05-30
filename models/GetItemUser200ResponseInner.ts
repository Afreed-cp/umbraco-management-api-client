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

import type { UserItemResponseModel } from './UserItemResponseModel';
import {
    instanceOfUserItemResponseModel,
    UserItemResponseModelFromJSON,
    UserItemResponseModelFromJSONTyped,
    UserItemResponseModelToJSON,
} from './UserItemResponseModel';

/**
 * @type GetItemUser200ResponseInner
 * 
 * @export
 */
export type GetItemUser200ResponseInner = UserItemResponseModel;

export function GetItemUser200ResponseInnerFromJSON(json: any): GetItemUser200ResponseInner {
    return GetItemUser200ResponseInnerFromJSONTyped(json, false);
}

export function GetItemUser200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetItemUser200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfUserItemResponseModel(json)) {
        return UserItemResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetItemUser200ResponseInnerToJSON(json: any): any {
    return GetItemUser200ResponseInnerToJSONTyped(json, false);
}

export function GetItemUser200ResponseInnerToJSONTyped(value?: GetItemUser200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfUserItemResponseModel(value)) {
        return UserItemResponseModelToJSON(value as UserItemResponseModel);
    }

    return {};
}

