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

import type { RelationTypeResponseModel } from './RelationTypeResponseModel';
import {
    instanceOfRelationTypeResponseModel,
    RelationTypeResponseModelFromJSON,
    RelationTypeResponseModelFromJSONTyped,
    RelationTypeResponseModelToJSON,
} from './RelationTypeResponseModel';

/**
 * @type PagedRelationTypeResponseModelItemsInner
 * 
 * @export
 */
export type PagedRelationTypeResponseModelItemsInner = RelationTypeResponseModel;

export function PagedRelationTypeResponseModelItemsInnerFromJSON(json: any): PagedRelationTypeResponseModelItemsInner {
    return PagedRelationTypeResponseModelItemsInnerFromJSONTyped(json, false);
}

export function PagedRelationTypeResponseModelItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedRelationTypeResponseModelItemsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfRelationTypeResponseModel(json)) {
        return RelationTypeResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PagedRelationTypeResponseModelItemsInnerToJSON(json: any): any {
    return PagedRelationTypeResponseModelItemsInnerToJSONTyped(json, false);
}

export function PagedRelationTypeResponseModelItemsInnerToJSONTyped(value?: PagedRelationTypeResponseModelItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfRelationTypeResponseModel(value)) {
        return RelationTypeResponseModelToJSON(value as RelationTypeResponseModel);
    }

    return {};
}

