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

import type { DataTypeItemResponseModel } from './DataTypeItemResponseModel';
import {
    instanceOfDataTypeItemResponseModel,
    DataTypeItemResponseModelFromJSON,
    DataTypeItemResponseModelFromJSONTyped,
    DataTypeItemResponseModelToJSON,
} from './DataTypeItemResponseModel';

/**
 * @type GetItemDataType200ResponseInner
 * 
 * @export
 */
export type GetItemDataType200ResponseInner = DataTypeItemResponseModel;

export function GetItemDataType200ResponseInnerFromJSON(json: any): GetItemDataType200ResponseInner {
    return GetItemDataType200ResponseInnerFromJSONTyped(json, false);
}

export function GetItemDataType200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetItemDataType200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfDataTypeItemResponseModel(json)) {
        return DataTypeItemResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetItemDataType200ResponseInnerToJSON(json: any): any {
    return GetItemDataType200ResponseInnerToJSONTyped(json, false);
}

export function GetItemDataType200ResponseInnerToJSONTyped(value?: GetItemDataType200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfDataTypeItemResponseModel(value)) {
        return DataTypeItemResponseModelToJSON(value as DataTypeItemResponseModel);
    }

    return {};
}

