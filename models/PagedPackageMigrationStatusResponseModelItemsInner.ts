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

import type { PackageMigrationStatusResponseModel } from './PackageMigrationStatusResponseModel';
import {
    instanceOfPackageMigrationStatusResponseModel,
    PackageMigrationStatusResponseModelFromJSON,
    PackageMigrationStatusResponseModelFromJSONTyped,
    PackageMigrationStatusResponseModelToJSON,
} from './PackageMigrationStatusResponseModel';

/**
 * @type PagedPackageMigrationStatusResponseModelItemsInner
 * 
 * @export
 */
export type PagedPackageMigrationStatusResponseModelItemsInner = PackageMigrationStatusResponseModel;

export function PagedPackageMigrationStatusResponseModelItemsInnerFromJSON(json: any): PagedPackageMigrationStatusResponseModelItemsInner {
    return PagedPackageMigrationStatusResponseModelItemsInnerFromJSONTyped(json, false);
}

export function PagedPackageMigrationStatusResponseModelItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedPackageMigrationStatusResponseModelItemsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfPackageMigrationStatusResponseModel(json)) {
        return PackageMigrationStatusResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PagedPackageMigrationStatusResponseModelItemsInnerToJSON(json: any): any {
    return PagedPackageMigrationStatusResponseModelItemsInnerToJSONTyped(json, false);
}

export function PagedPackageMigrationStatusResponseModelItemsInnerToJSONTyped(value?: PagedPackageMigrationStatusResponseModelItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfPackageMigrationStatusResponseModel(value)) {
        return PackageMigrationStatusResponseModelToJSON(value as PackageMigrationStatusResponseModel);
    }

    return {};
}

