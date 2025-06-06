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

import type { WebhookResponseModel } from './WebhookResponseModel';
import {
    instanceOfWebhookResponseModel,
    WebhookResponseModelFromJSON,
    WebhookResponseModelFromJSONTyped,
    WebhookResponseModelToJSON,
} from './WebhookResponseModel';

/**
 * @type PagedWebhookResponseModelItemsInner
 * 
 * @export
 */
export type PagedWebhookResponseModelItemsInner = WebhookResponseModel;

export function PagedWebhookResponseModelItemsInnerFromJSON(json: any): PagedWebhookResponseModelItemsInner {
    return PagedWebhookResponseModelItemsInnerFromJSONTyped(json, false);
}

export function PagedWebhookResponseModelItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedWebhookResponseModelItemsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfWebhookResponseModel(json)) {
        return WebhookResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PagedWebhookResponseModelItemsInnerToJSON(json: any): any {
    return PagedWebhookResponseModelItemsInnerToJSONTyped(json, false);
}

export function PagedWebhookResponseModelItemsInnerToJSONTyped(value?: PagedWebhookResponseModelItemsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfWebhookResponseModel(value)) {
        return WebhookResponseModelToJSON(value as WebhookResponseModel);
    }

    return {};
}

