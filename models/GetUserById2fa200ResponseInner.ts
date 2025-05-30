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

import type { UserTwoFactorProviderModel } from './UserTwoFactorProviderModel';
import {
    instanceOfUserTwoFactorProviderModel,
    UserTwoFactorProviderModelFromJSON,
    UserTwoFactorProviderModelFromJSONTyped,
    UserTwoFactorProviderModelToJSON,
} from './UserTwoFactorProviderModel';

/**
 * @type GetUserById2fa200ResponseInner
 * 
 * @export
 */
export type GetUserById2fa200ResponseInner = UserTwoFactorProviderModel;

export function GetUserById2fa200ResponseInnerFromJSON(json: any): GetUserById2fa200ResponseInner {
    return GetUserById2fa200ResponseInnerFromJSONTyped(json, false);
}

export function GetUserById2fa200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserById2fa200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfUserTwoFactorProviderModel(json)) {
        return UserTwoFactorProviderModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetUserById2fa200ResponseInnerToJSON(json: any): any {
    return GetUserById2fa200ResponseInnerToJSONTyped(json, false);
}

export function GetUserById2fa200ResponseInnerToJSONTyped(value?: GetUserById2fa200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfUserTwoFactorProviderModel(value)) {
        return UserTwoFactorProviderModelToJSON(value as UserTwoFactorProviderModel);
    }

    return {};
}

