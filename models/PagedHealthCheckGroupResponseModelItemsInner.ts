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

import type { HealthCheckGroupResponseModel } from './HealthCheckGroupResponseModel';
import {
    instanceOfHealthCheckGroupResponseModel,
    HealthCheckGroupResponseModelFromJSON,
    HealthCheckGroupResponseModelFromJSONTyped,
    HealthCheckGroupResponseModelToJSON,
} from './HealthCheckGroupResponseModel';

/**
 * @type PagedHealthCheckGroupResponseModelItemsInner
 * 
 * @export
 */
export type PagedHealthCheckGroupResponseModelItemsInner = HealthCheckGroupResponseModel;

export function PagedHealthCheckGroupResponseModelItemsInnerFromJSON(json: any): PagedHealthCheckGroupResponseModelItemsInner {
    return PagedHealthCheckGroupResponseModelItemsInnerFromJSONTyped(json, false);
}

export function PagedHealthCheckGroupResponseModelItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedHealthCheckGroupResponseModelItemsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfHealthCheckGroupResponseModel(json)) {
        return HealthCheckGroupResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PagedHealthCheckGroupResponseModelItemsInnerToJSON(json: any): any {
    return PagedHealthCheckGroupResponseModelItemsInnerToJSONTyped(json, false);
}

export function PagedHealthCheckGroupResponseModelItemsInnerToJSONTyped(value?: PagedHealthCheckGroupResponseModelItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfHealthCheckGroupResponseModel(value)) {
        return HealthCheckGroupResponseModelToJSON(value as HealthCheckGroupResponseModel);
    }

    return {};
}

