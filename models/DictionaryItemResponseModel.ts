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
import type { CreateDictionaryItemRequestModelTranslationsInner } from './CreateDictionaryItemRequestModelTranslationsInner';
import {
    CreateDictionaryItemRequestModelTranslationsInnerFromJSON,
    CreateDictionaryItemRequestModelTranslationsInnerFromJSONTyped,
    CreateDictionaryItemRequestModelTranslationsInnerToJSON,
    CreateDictionaryItemRequestModelTranslationsInnerToJSONTyped,
} from './CreateDictionaryItemRequestModelTranslationsInner';

/**
 * 
 * @export
 * @interface DictionaryItemResponseModel
 */
export interface DictionaryItemResponseModel {
    /**
     * 
     * @type {string}
     * @memberof DictionaryItemResponseModel
     */
    name: string;
    /**
     * 
     * @type {Array<CreateDictionaryItemRequestModelTranslationsInner>}
     * @memberof DictionaryItemResponseModel
     */
    translations: Array<CreateDictionaryItemRequestModelTranslationsInner>;
    /**
     * 
     * @type {string}
     * @memberof DictionaryItemResponseModel
     */
    id: string;
}

/**
 * Check if a given object implements the DictionaryItemResponseModel interface.
 */
export function instanceOfDictionaryItemResponseModel(value: object): value is DictionaryItemResponseModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('translations' in value) || value['translations'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function DictionaryItemResponseModelFromJSON(json: any): DictionaryItemResponseModel {
    return DictionaryItemResponseModelFromJSONTyped(json, false);
}

export function DictionaryItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DictionaryItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'translations': ((json['translations'] as Array<any>).map(CreateDictionaryItemRequestModelTranslationsInnerFromJSON)),
        'id': json['id'],
    };
}

export function DictionaryItemResponseModelToJSON(json: any): DictionaryItemResponseModel {
    return DictionaryItemResponseModelToJSONTyped(json, false);
}

export function DictionaryItemResponseModelToJSONTyped(value?: DictionaryItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'translations': ((value['translations'] as Array<any>).map(CreateDictionaryItemRequestModelTranslationsInnerToJSON)),
        'id': value['id'],
    };
}

