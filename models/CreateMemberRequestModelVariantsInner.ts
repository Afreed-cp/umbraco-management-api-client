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

import type { MemberVariantRequestModel } from './MemberVariantRequestModel';
import {
    instanceOfMemberVariantRequestModel,
    MemberVariantRequestModelFromJSON,
    MemberVariantRequestModelFromJSONTyped,
    MemberVariantRequestModelToJSON,
} from './MemberVariantRequestModel';

/**
 * @type CreateMemberRequestModelVariantsInner
 * 
 * @export
 */
export type CreateMemberRequestModelVariantsInner = MemberVariantRequestModel;

export function CreateMemberRequestModelVariantsInnerFromJSON(json: any): CreateMemberRequestModelVariantsInner {
    return CreateMemberRequestModelVariantsInnerFromJSONTyped(json, false);
}

export function CreateMemberRequestModelVariantsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMemberRequestModelVariantsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfMemberVariantRequestModel(json)) {
        return MemberVariantRequestModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function CreateMemberRequestModelVariantsInnerToJSON(json: any): any {
    return CreateMemberRequestModelVariantsInnerToJSONTyped(json, false);
}

export function CreateMemberRequestModelVariantsInnerToJSONTyped(value?: CreateMemberRequestModelVariantsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfMemberVariantRequestModel(value)) {
        return MemberVariantRequestModelToJSON(value as MemberVariantRequestModel);
    }

    return {};
}

