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

import type { MediaVariantResponseModel } from './MediaVariantResponseModel';
import {
    instanceOfMediaVariantResponseModel,
    MediaVariantResponseModelFromJSON,
    MediaVariantResponseModelFromJSONTyped,
    MediaVariantResponseModelToJSON,
} from './MediaVariantResponseModel';

/**
 * @type MediaCollectionResponseModelVariantsInner
 * 
 * @export
 */
export type MediaCollectionResponseModelVariantsInner = MediaVariantResponseModel;

export function MediaCollectionResponseModelVariantsInnerFromJSON(json: any): MediaCollectionResponseModelVariantsInner {
    return MediaCollectionResponseModelVariantsInnerFromJSONTyped(json, false);
}

export function MediaCollectionResponseModelVariantsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaCollectionResponseModelVariantsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfMediaVariantResponseModel(json)) {
        return MediaVariantResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function MediaCollectionResponseModelVariantsInnerToJSON(json: any): any {
    return MediaCollectionResponseModelVariantsInnerToJSONTyped(json, false);
}

export function MediaCollectionResponseModelVariantsInnerToJSONTyped(value?: MediaCollectionResponseModelVariantsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfMediaVariantResponseModel(value)) {
        return MediaVariantResponseModelToJSON(value as MediaVariantResponseModel);
    }

    return {};
}

