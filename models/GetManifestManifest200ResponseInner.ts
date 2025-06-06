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

import type { ManifestResponseModel } from './ManifestResponseModel';
import {
    instanceOfManifestResponseModel,
    ManifestResponseModelFromJSON,
    ManifestResponseModelFromJSONTyped,
    ManifestResponseModelToJSON,
} from './ManifestResponseModel';

/**
 * @type GetManifestManifest200ResponseInner
 * 
 * @export
 */
export type GetManifestManifest200ResponseInner = ManifestResponseModel;

export function GetManifestManifest200ResponseInnerFromJSON(json: any): GetManifestManifest200ResponseInner {
    return GetManifestManifest200ResponseInnerFromJSONTyped(json, false);
}

export function GetManifestManifest200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetManifestManifest200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfManifestResponseModel(json)) {
        return ManifestResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetManifestManifest200ResponseInnerToJSON(json: any): any {
    return GetManifestManifest200ResponseInnerToJSONTyped(json, false);
}

export function GetManifestManifest200ResponseInnerToJSONTyped(value?: GetManifestManifest200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfManifestResponseModel(value)) {
        return ManifestResponseModelToJSON(value as ManifestResponseModel);
    }

    return {};
}

