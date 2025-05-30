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

import type { DataTypeTreeItemResponseModel } from './DataTypeTreeItemResponseModel';
import {
    instanceOfDataTypeTreeItemResponseModel,
    DataTypeTreeItemResponseModelFromJSON,
    DataTypeTreeItemResponseModelFromJSONTyped,
    DataTypeTreeItemResponseModelToJSON,
} from './DataTypeTreeItemResponseModel';

/**
 * @type GetTreeDataTypeAncestors200ResponseInner
 * 
 * @export
 */
export type GetTreeDataTypeAncestors200ResponseInner = DataTypeTreeItemResponseModel;

export function GetTreeDataTypeAncestors200ResponseInnerFromJSON(json: any): GetTreeDataTypeAncestors200ResponseInner {
    return GetTreeDataTypeAncestors200ResponseInnerFromJSONTyped(json, false);
}

export function GetTreeDataTypeAncestors200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTreeDataTypeAncestors200ResponseInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfDataTypeTreeItemResponseModel(json)) {
        return DataTypeTreeItemResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetTreeDataTypeAncestors200ResponseInnerToJSON(json: any): any {
    return GetTreeDataTypeAncestors200ResponseInnerToJSONTyped(json, false);
}

export function GetTreeDataTypeAncestors200ResponseInnerToJSONTyped(value?: GetTreeDataTypeAncestors200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfDataTypeTreeItemResponseModel(value)) {
        return DataTypeTreeItemResponseModelToJSON(value as DataTypeTreeItemResponseModel);
    }

    return {};
}

