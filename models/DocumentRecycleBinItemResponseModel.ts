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
import type { DocumentTypeReferenceResponseModel } from './DocumentTypeReferenceResponseModel';
import {
    DocumentTypeReferenceResponseModelFromJSON,
    DocumentTypeReferenceResponseModelFromJSONTyped,
    DocumentTypeReferenceResponseModelToJSON,
    DocumentTypeReferenceResponseModelToJSONTyped,
} from './DocumentTypeReferenceResponseModel';
import type { ItemReferenceByIdResponseModel } from './ItemReferenceByIdResponseModel';
import {
    ItemReferenceByIdResponseModelFromJSON,
    ItemReferenceByIdResponseModelFromJSONTyped,
    ItemReferenceByIdResponseModelToJSON,
    ItemReferenceByIdResponseModelToJSONTyped,
} from './ItemReferenceByIdResponseModel';
import type { DocumentItemResponseModelVariantsInner } from './DocumentItemResponseModelVariantsInner';
import {
    DocumentItemResponseModelVariantsInnerFromJSON,
    DocumentItemResponseModelVariantsInnerFromJSONTyped,
    DocumentItemResponseModelVariantsInnerToJSON,
    DocumentItemResponseModelVariantsInnerToJSONTyped,
} from './DocumentItemResponseModelVariantsInner';

/**
 * 
 * @export
 * @interface DocumentRecycleBinItemResponseModel
 */
export interface DocumentRecycleBinItemResponseModel {
    /**
     * 
     * @type {string}
     * @memberof DocumentRecycleBinItemResponseModel
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof DocumentRecycleBinItemResponseModel
     */
    createDate: Date;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentRecycleBinItemResponseModel
     */
    hasChildren: boolean;
    /**
     * 
     * @type {ItemReferenceByIdResponseModel}
     * @memberof DocumentRecycleBinItemResponseModel
     */
    parent?: ItemReferenceByIdResponseModel | null;
    /**
     * 
     * @type {DocumentTypeReferenceResponseModel}
     * @memberof DocumentRecycleBinItemResponseModel
     */
    documentType: DocumentTypeReferenceResponseModel;
    /**
     * 
     * @type {Array<DocumentItemResponseModelVariantsInner>}
     * @memberof DocumentRecycleBinItemResponseModel
     */
    variants: Array<DocumentItemResponseModelVariantsInner>;
}

/**
 * Check if a given object implements the DocumentRecycleBinItemResponseModel interface.
 */
export function instanceOfDocumentRecycleBinItemResponseModel(value: object): value is DocumentRecycleBinItemResponseModel {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createDate' in value) || value['createDate'] === undefined) return false;
    if (!('hasChildren' in value) || value['hasChildren'] === undefined) return false;
    if (!('documentType' in value) || value['documentType'] === undefined) return false;
    if (!('variants' in value) || value['variants'] === undefined) return false;
    return true;
}

export function DocumentRecycleBinItemResponseModelFromJSON(json: any): DocumentRecycleBinItemResponseModel {
    return DocumentRecycleBinItemResponseModelFromJSONTyped(json, false);
}

export function DocumentRecycleBinItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentRecycleBinItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createDate': (new Date(json['createDate'])),
        'hasChildren': json['hasChildren'],
        'parent': json['parent'] == null ? undefined : ItemReferenceByIdResponseModelFromJSON(json['parent']),
        'documentType': DocumentTypeReferenceResponseModelFromJSON(json['documentType']),
        'variants': ((json['variants'] as Array<any>).map(DocumentItemResponseModelVariantsInnerFromJSON)),
    };
}

export function DocumentRecycleBinItemResponseModelToJSON(json: any): DocumentRecycleBinItemResponseModel {
    return DocumentRecycleBinItemResponseModelToJSONTyped(json, false);
}

export function DocumentRecycleBinItemResponseModelToJSONTyped(value?: DocumentRecycleBinItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'createDate': ((value['createDate']).toISOString()),
        'hasChildren': value['hasChildren'],
        'parent': ItemReferenceByIdResponseModelToJSON(value['parent']),
        'documentType': DocumentTypeReferenceResponseModelToJSON(value['documentType']),
        'variants': ((value['variants'] as Array<any>).map(DocumentItemResponseModelVariantsInnerToJSON)),
    };
}

