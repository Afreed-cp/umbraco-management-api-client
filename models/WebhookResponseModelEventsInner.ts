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

import type { WebhookEventResponseModel } from './WebhookEventResponseModel';
import {
    instanceOfWebhookEventResponseModel,
    WebhookEventResponseModelFromJSON,
    WebhookEventResponseModelFromJSONTyped,
    WebhookEventResponseModelToJSON,
} from './WebhookEventResponseModel';

/**
 * @type WebhookResponseModelEventsInner
 * 
 * @export
 */
export type WebhookResponseModelEventsInner = WebhookEventResponseModel;

export function WebhookResponseModelEventsInnerFromJSON(json: any): WebhookResponseModelEventsInner {
    return WebhookResponseModelEventsInnerFromJSONTyped(json, false);
}

export function WebhookResponseModelEventsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookResponseModelEventsInner {
    if (json == null) {
        return json;
    }
    if (typeof json !== 'object') {
        return json;
    }
    if (instanceOfWebhookEventResponseModel(json)) {
        return WebhookEventResponseModelFromJSONTyped(json, true);
    }

    return {} as any;
}

export function WebhookResponseModelEventsInnerToJSON(json: any): any {
    return WebhookResponseModelEventsInnerToJSONTyped(json, false);
}

export function WebhookResponseModelEventsInnerToJSONTyped(value?: WebhookResponseModelEventsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    if (typeof value !== 'object') {
        return value;
    }
    if (instanceOfWebhookEventResponseModel(value)) {
        return WebhookEventResponseModelToJSON(value as WebhookEventResponseModel);
    }

    return {};
}

