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

import type { MemberTypePropertyTypeResponseModel } from './MemberTypePropertyTypeResponseModel';
import {
    instanceOfMemberTypePropertyTypeResponseModel,
    MemberTypePropertyTypeResponseModelFromJSON,
    MemberTypePropertyTypeResponseModelFromJSONTyped,
    MemberTypePropertyTypeResponseModelToJSON,
} from './MemberTypePropertyTypeResponseModel';

/**
 * @type MemberTypeResponseModelPropertiesInner
 * 
 * @export
 */
export type MemberTypeResponseModelPropertiesInner = MemberTypePropertyTypeResponseModel;

export function MemberTypeResponseModelPropertiesInnerFromJSON(json: any): MemberTypeResponseModelPropertiesInner {
    return MemberTypeResponseModelPropertiesInnerFromJSONTyped(json, false);
}

export function MemberTypeResponseModelPropertiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberTypeResponseModelPropertiesInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfMemberTypePropertyTypeResponseModel(json)) {
        return MemberTypePropertyTypeResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function MemberTypeResponseModelPropertiesInnerToJSON(json: any): any {
    return MemberTypeResponseModelPropertiesInnerToJSONTyped(json, false);
}

export function MemberTypeResponseModelPropertiesInnerToJSONTyped(value?: MemberTypeResponseModelPropertiesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfMemberTypePropertyTypeResponseModel(value)) {
        return MemberTypePropertyTypeResponseModelToJSON(value as MemberTypePropertyTypeResponseModel);
    }

    return {};
}

