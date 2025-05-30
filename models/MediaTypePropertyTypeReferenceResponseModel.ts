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
import type { TrackedReferenceMediaTypeModel } from './TrackedReferenceMediaTypeModel';
import {
    TrackedReferenceMediaTypeModelFromJSON,
    TrackedReferenceMediaTypeModelFromJSONTyped,
    TrackedReferenceMediaTypeModelToJSON,
    TrackedReferenceMediaTypeModelToJSONTyped,
} from './TrackedReferenceMediaTypeModel';

/**
 * 
 * @export
 * @interface MediaTypePropertyTypeReferenceResponseModel
 */
export interface MediaTypePropertyTypeReferenceResponseModel {
    /**
     * 
     * @type {string}
     * @memberof MediaTypePropertyTypeReferenceResponseModel
     */
    $type: string;
    /**
     * 
     * @type {string}
     * @memberof MediaTypePropertyTypeReferenceResponseModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MediaTypePropertyTypeReferenceResponseModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaTypePropertyTypeReferenceResponseModel
     */
    alias?: string | null;
    /**
     * 
     * @type {TrackedReferenceMediaTypeModel}
     * @memberof MediaTypePropertyTypeReferenceResponseModel
     */
    mediaType: TrackedReferenceMediaTypeModel;
}

/**
 * Check if a given object implements the MediaTypePropertyTypeReferenceResponseModel interface.
 */
export function instanceOfMediaTypePropertyTypeReferenceResponseModel(value: object): value is MediaTypePropertyTypeReferenceResponseModel {
    if (!('$type' in value) || value['$type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('mediaType' in value) || value['mediaType'] === undefined) return false;
    return true;
}

export function MediaTypePropertyTypeReferenceResponseModelFromJSON(json: any): MediaTypePropertyTypeReferenceResponseModel {
    return MediaTypePropertyTypeReferenceResponseModelFromJSONTyped(json, false);
}

export function MediaTypePropertyTypeReferenceResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaTypePropertyTypeReferenceResponseModel {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['$type'] === 'MediaTypePropertyTypeReferenceResponseModel') {
            return MediaTypePropertyTypeReferenceResponseModelFromJSONTyped(json, ignoreDiscriminator);
        }
    }
    return {
        
        '$type': json['$type'],
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'alias': json['alias'] == null ? undefined : json['alias'],
        'mediaType': TrackedReferenceMediaTypeModelFromJSON(json['mediaType']),
    };
}

export function MediaTypePropertyTypeReferenceResponseModelToJSON(json: any): MediaTypePropertyTypeReferenceResponseModel {
    return MediaTypePropertyTypeReferenceResponseModelToJSONTyped(json, false);
}

export function MediaTypePropertyTypeReferenceResponseModelToJSONTyped(value?: MediaTypePropertyTypeReferenceResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (!ignoreDiscriminator) {
        switch (value['$type']) {
            case 'MediaTypePropertyTypeReferenceResponseModel':
                return MediaTypePropertyTypeReferenceResponseModelToJSONTyped(value as MediaTypePropertyTypeReferenceResponseModel, ignoreDiscriminator);
            default:
                return value;
        }
    }

    return {
        
        '$type': value['$type'],
        'id': value['id'],
        'name': value['name'],
        'alias': value['alias'],
        'mediaType': TrackedReferenceMediaTypeModelToJSON(value['mediaType']),
    };
}

