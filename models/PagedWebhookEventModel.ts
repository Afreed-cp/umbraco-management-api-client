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

import { mapValues } from '../runtime';
import type { PagedWebhookEventModelItemsInner } from './PagedWebhookEventModelItemsInner';
import {
    PagedWebhookEventModelItemsInnerFromJSON,
    PagedWebhookEventModelItemsInnerFromJSONTyped,
    PagedWebhookEventModelItemsInnerToJSON,
    PagedWebhookEventModelItemsInnerToJSONTyped,
} from './PagedWebhookEventModelItemsInner';

/**
 * 
 * @export
 * @interface PagedWebhookEventModel
 */
export interface PagedWebhookEventModel {
    /**
     * 
     * @type {number}
     * @memberof PagedWebhookEventModel
     */
    total: number;
    /**
     * 
     * @type {Array<PagedWebhookEventModelItemsInner>}
     * @memberof PagedWebhookEventModel
     */
    items: Array<PagedWebhookEventModelItemsInner>;
}

/**
 * Check if a given object implements the PagedWebhookEventModel interface.
 */
export function instanceOfPagedWebhookEventModel(value: object): value is PagedWebhookEventModel {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function PagedWebhookEventModelFromJSON(json: any): PagedWebhookEventModel {
    return PagedWebhookEventModelFromJSONTyped(json, false);
}

export function PagedWebhookEventModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedWebhookEventModel {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['total'],
        'items': ((json['items'] as Array<any>).map(PagedWebhookEventModelItemsInnerFromJSON)),
    };
}

export function PagedWebhookEventModelToJSON(json: any): PagedWebhookEventModel {
    return PagedWebhookEventModelToJSONTyped(json, false);
}

export function PagedWebhookEventModelToJSONTyped(value?: PagedWebhookEventModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'total': value['total'],
        'items': ((value['items'] as Array<any>).map(PagedWebhookEventModelItemsInnerToJSON)),
    };
}

