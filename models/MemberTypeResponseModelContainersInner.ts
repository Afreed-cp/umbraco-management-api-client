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

import type { MemberTypePropertyTypeContainerResponseModel } from './MemberTypePropertyTypeContainerResponseModel';
import {
    instanceOfMemberTypePropertyTypeContainerResponseModel,
    MemberTypePropertyTypeContainerResponseModelFromJSON,
    MemberTypePropertyTypeContainerResponseModelFromJSONTyped,
    MemberTypePropertyTypeContainerResponseModelToJSON,
} from './MemberTypePropertyTypeContainerResponseModel';

/**
 * @type MemberTypeResponseModelContainersInner
 * 
 * @export
 */
export type MemberTypeResponseModelContainersInner = MemberTypePropertyTypeContainerResponseModel;

export function MemberTypeResponseModelContainersInnerFromJSON(json: any): MemberTypeResponseModelContainersInner {
    return MemberTypeResponseModelContainersInnerFromJSONTyped(json, false);
}

export function MemberTypeResponseModelContainersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberTypeResponseModelContainersInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfMemberTypePropertyTypeContainerResponseModel(json)) {
        return MemberTypePropertyTypeContainerResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function MemberTypeResponseModelContainersInnerToJSON(json: any): any {
    return MemberTypeResponseModelContainersInnerToJSONTyped(json, false);
}

export function MemberTypeResponseModelContainersInnerToJSONTyped(value?: MemberTypeResponseModelContainersInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfMemberTypePropertyTypeContainerResponseModel(value)) {
        return MemberTypePropertyTypeContainerResponseModelToJSON(value as MemberTypePropertyTypeContainerResponseModel);
    }

    return {};
}

