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

import type { MediaRecycleBinItemResponseModel } from './MediaRecycleBinItemResponseModel';
import {
    instanceOfMediaRecycleBinItemResponseModel,
    MediaRecycleBinItemResponseModelFromJSON,
    MediaRecycleBinItemResponseModelFromJSONTyped,
    MediaRecycleBinItemResponseModelToJSON,
} from './MediaRecycleBinItemResponseModel';

/**
 * @type PagedMediaRecycleBinItemResponseModelItemsInner
 * 
 * @export
 */
export type PagedMediaRecycleBinItemResponseModelItemsInner = MediaRecycleBinItemResponseModel;

export function PagedMediaRecycleBinItemResponseModelItemsInnerFromJSON(json: any): PagedMediaRecycleBinItemResponseModelItemsInner {
    return PagedMediaRecycleBinItemResponseModelItemsInnerFromJSONTyped(json, false);
}

export function PagedMediaRecycleBinItemResponseModelItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedMediaRecycleBinItemResponseModelItemsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfMediaRecycleBinItemResponseModel(json)) {
        return MediaRecycleBinItemResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PagedMediaRecycleBinItemResponseModelItemsInnerToJSON(json: any): any {
    return PagedMediaRecycleBinItemResponseModelItemsInnerToJSONTyped(json, false);
}

export function PagedMediaRecycleBinItemResponseModelItemsInnerToJSONTyped(value?: PagedMediaRecycleBinItemResponseModelItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfMediaRecycleBinItemResponseModel(value)) {
        return MediaRecycleBinItemResponseModelToJSON(value as MediaRecycleBinItemResponseModel);
    }

    return {};
}

