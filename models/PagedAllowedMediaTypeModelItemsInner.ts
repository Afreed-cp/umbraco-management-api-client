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

import type { AllowedMediaTypeModel } from './AllowedMediaTypeModel';
import {
    instanceOfAllowedMediaTypeModel,
    AllowedMediaTypeModelFromJSON,
    AllowedMediaTypeModelFromJSONTyped,
    AllowedMediaTypeModelToJSON,
} from './AllowedMediaTypeModel';

/**
 * @type PagedAllowedMediaTypeModelItemsInner
 * 
 * @export
 */
export type PagedAllowedMediaTypeModelItemsInner = AllowedMediaTypeModel;

export function PagedAllowedMediaTypeModelItemsInnerFromJSON(json: any): PagedAllowedMediaTypeModelItemsInner {
    return PagedAllowedMediaTypeModelItemsInnerFromJSONTyped(json, false);
}

export function PagedAllowedMediaTypeModelItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedAllowedMediaTypeModelItemsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAllowedMediaTypeModel(json)) {
        return AllowedMediaTypeModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PagedAllowedMediaTypeModelItemsInnerToJSON(json: any): any {
    return PagedAllowedMediaTypeModelItemsInnerToJSONTyped(json, false);
}

export function PagedAllowedMediaTypeModelItemsInnerToJSONTyped(value?: PagedAllowedMediaTypeModelItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAllowedMediaTypeModel(value)) {
        return AllowedMediaTypeModelToJSON(value as AllowedMediaTypeModel);
    }

    return {};
}

