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

import type { MemberItemResponseModel } from './MemberItemResponseModel';
import {
    instanceOfMemberItemResponseModel,
    MemberItemResponseModelFromJSON,
    MemberItemResponseModelFromJSONTyped,
    MemberItemResponseModelToJSON,
} from './MemberItemResponseModel';

/**
 * @type GetItemMember200ResponseInner
 * 
 * @export
 */
export type GetItemMember200ResponseInner = MemberItemResponseModel;

export function GetItemMember200ResponseInnerFromJSON(json: any): GetItemMember200ResponseInner {
    return GetItemMember200ResponseInnerFromJSONTyped(json, false);
}

export function GetItemMember200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetItemMember200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfMemberItemResponseModel(json)) {
        return MemberItemResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetItemMember200ResponseInnerToJSON(json: any): any {
    return GetItemMember200ResponseInnerToJSONTyped(json, false);
}

export function GetItemMember200ResponseInnerToJSONTyped(value?: GetItemMember200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfMemberItemResponseModel(value)) {
        return MemberItemResponseModelToJSON(value as MemberItemResponseModel);
    }

    return {};
}

