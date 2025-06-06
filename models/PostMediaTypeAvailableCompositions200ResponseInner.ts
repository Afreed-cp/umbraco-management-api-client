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

import type { AvailableMediaTypeCompositionResponseModel } from './AvailableMediaTypeCompositionResponseModel';
import {
    instanceOfAvailableMediaTypeCompositionResponseModel,
    AvailableMediaTypeCompositionResponseModelFromJSON,
    AvailableMediaTypeCompositionResponseModelFromJSONTyped,
    AvailableMediaTypeCompositionResponseModelToJSON,
} from './AvailableMediaTypeCompositionResponseModel';

/**
 * @type PostMediaTypeAvailableCompositions200ResponseInner
 * 
 * @export
 */
export type PostMediaTypeAvailableCompositions200ResponseInner = AvailableMediaTypeCompositionResponseModel;

export function PostMediaTypeAvailableCompositions200ResponseInnerFromJSON(json: any): PostMediaTypeAvailableCompositions200ResponseInner {
    return PostMediaTypeAvailableCompositions200ResponseInnerFromJSONTyped(json, false);
}

export function PostMediaTypeAvailableCompositions200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMediaTypeAvailableCompositions200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfAvailableMediaTypeCompositionResponseModel(json)) {
        return AvailableMediaTypeCompositionResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PostMediaTypeAvailableCompositions200ResponseInnerToJSON(json: any): any {
    return PostMediaTypeAvailableCompositions200ResponseInnerToJSONTyped(json, false);
}

export function PostMediaTypeAvailableCompositions200ResponseInnerToJSONTyped(value?: PostMediaTypeAvailableCompositions200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfAvailableMediaTypeCompositionResponseModel(value)) {
        return AvailableMediaTypeCompositionResponseModelToJSON(value as AvailableMediaTypeCompositionResponseModel);
    }

    return {};
}

