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
import type { FileSystemFolderModel } from './FileSystemFolderModel';
import {
    FileSystemFolderModelFromJSON,
    FileSystemFolderModelFromJSONTyped,
    FileSystemFolderModelToJSON,
    FileSystemFolderModelToJSONTyped,
} from './FileSystemFolderModel';

/**
 * 
 * @export
 * @interface StaticFileItemResponseModel
 */
export interface StaticFileItemResponseModel {
    /**
     * 
     * @type {string}
     * @memberof StaticFileItemResponseModel
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof StaticFileItemResponseModel
     */
    name: string;
    /**
     * 
     * @type {FileSystemFolderModel}
     * @memberof StaticFileItemResponseModel
     */
    parent?: FileSystemFolderModel | null;
    /**
     * 
     * @type {boolean}
     * @memberof StaticFileItemResponseModel
     */
    isFolder: boolean;
}

/**
 * Check if a given object implements the StaticFileItemResponseModel interface.
 */
export function instanceOfStaticFileItemResponseModel(value: object): value is StaticFileItemResponseModel {
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('isFolder' in value) || value['isFolder'] === undefined) return false;
    return true;
}

export function StaticFileItemResponseModelFromJSON(json: any): StaticFileItemResponseModel {
    return StaticFileItemResponseModelFromJSONTyped(json, false);
}

export function StaticFileItemResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaticFileItemResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'path': json['path'],
        'name': json['name'],
        'parent': json['parent'] == null ? undefined : FileSystemFolderModelFromJSON(json['parent']),
        'isFolder': json['isFolder'],
    };
}

export function StaticFileItemResponseModelToJSON(json: any): StaticFileItemResponseModel {
    return StaticFileItemResponseModelToJSONTyped(json, false);
}

export function StaticFileItemResponseModelToJSONTyped(value?: StaticFileItemResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'path': value['path'],
        'name': value['name'],
        'parent': FileSystemFolderModelToJSON(value['parent']),
        'isFolder': value['isFolder'],
    };
}

