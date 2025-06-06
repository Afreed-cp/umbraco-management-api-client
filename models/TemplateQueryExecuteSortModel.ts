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
/**
 * 
 * @export
 * @interface TemplateQueryExecuteSortModel
 */
export interface TemplateQueryExecuteSortModel {
    /**
     * 
     * @type {string}
     * @memberof TemplateQueryExecuteSortModel
     */
    propertyAlias: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateQueryExecuteSortModel
     */
    direction?: string | null;
}

/**
 * Check if a given object implements the TemplateQueryExecuteSortModel interface.
 */
export function instanceOfTemplateQueryExecuteSortModel(value: object): value is TemplateQueryExecuteSortModel {
    if (!('propertyAlias' in value) || value['propertyAlias'] === undefined) return false;
    return true;
}

export function TemplateQueryExecuteSortModelFromJSON(json: any): TemplateQueryExecuteSortModel {
    return TemplateQueryExecuteSortModelFromJSONTyped(json, false);
}

export function TemplateQueryExecuteSortModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateQueryExecuteSortModel {
    if (json == null) {
        return json;
    }
    return {
        
        'propertyAlias': json['propertyAlias'],
        'direction': json['direction'] == null ? undefined : json['direction'],
    };
}

export function TemplateQueryExecuteSortModelToJSON(json: any): TemplateQueryExecuteSortModel {
    return TemplateQueryExecuteSortModelToJSONTyped(json, false);
}

export function TemplateQueryExecuteSortModelToJSONTyped(value?: TemplateQueryExecuteSortModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'propertyAlias': value['propertyAlias'],
        'direction': value['direction'],
    };
}

