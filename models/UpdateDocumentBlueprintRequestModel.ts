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
import type { CreateDocumentBlueprintRequestModelVariantsInner } from './CreateDocumentBlueprintRequestModelVariantsInner';
import {
    CreateDocumentBlueprintRequestModelVariantsInnerFromJSON,
    CreateDocumentBlueprintRequestModelVariantsInnerFromJSONTyped,
    CreateDocumentBlueprintRequestModelVariantsInnerToJSON,
    CreateDocumentBlueprintRequestModelVariantsInnerToJSONTyped,
} from './CreateDocumentBlueprintRequestModelVariantsInner';
import type { CreateDocumentBlueprintRequestModelValuesInner } from './CreateDocumentBlueprintRequestModelValuesInner';
import {
    CreateDocumentBlueprintRequestModelValuesInnerFromJSON,
    CreateDocumentBlueprintRequestModelValuesInnerFromJSONTyped,
    CreateDocumentBlueprintRequestModelValuesInnerToJSON,
    CreateDocumentBlueprintRequestModelValuesInnerToJSONTyped,
} from './CreateDocumentBlueprintRequestModelValuesInner';

/**
 * 
 * @export
 * @interface UpdateDocumentBlueprintRequestModel
 */
export interface UpdateDocumentBlueprintRequestModel {
    /**
     * 
     * @type {Array<CreateDocumentBlueprintRequestModelValuesInner>}
     * @memberof UpdateDocumentBlueprintRequestModel
     */
    values: Array<CreateDocumentBlueprintRequestModelValuesInner>;
    /**
     * 
     * @type {Array<CreateDocumentBlueprintRequestModelVariantsInner>}
     * @memberof UpdateDocumentBlueprintRequestModel
     */
    variants: Array<CreateDocumentBlueprintRequestModelVariantsInner>;
}

/**
 * Check if a given object implements the UpdateDocumentBlueprintRequestModel interface.
 */
export function instanceOfUpdateDocumentBlueprintRequestModel(value: object): value is UpdateDocumentBlueprintRequestModel {
    if (!('values' in value) || value['values'] === undefined) return false;
    if (!('variants' in value) || value['variants'] === undefined) return false;
    return true;
}

export function UpdateDocumentBlueprintRequestModelFromJSON(json: any): UpdateDocumentBlueprintRequestModel {
    return UpdateDocumentBlueprintRequestModelFromJSONTyped(json, false);
}

export function UpdateDocumentBlueprintRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateDocumentBlueprintRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'values': ((json['values'] as Array<any>).map(CreateDocumentBlueprintRequestModelValuesInnerFromJSON)),
        'variants': ((json['variants'] as Array<any>).map(CreateDocumentBlueprintRequestModelVariantsInnerFromJSON)),
    };
}

export function UpdateDocumentBlueprintRequestModelToJSON(json: any): UpdateDocumentBlueprintRequestModel {
    return UpdateDocumentBlueprintRequestModelToJSONTyped(json, false);
}

export function UpdateDocumentBlueprintRequestModelToJSONTyped(value?: UpdateDocumentBlueprintRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'values': ((value['values'] as Array<any>).map(CreateDocumentBlueprintRequestModelValuesInnerToJSON)),
        'variants': ((value['variants'] as Array<any>).map(CreateDocumentBlueprintRequestModelVariantsInnerToJSON)),
    };
}

