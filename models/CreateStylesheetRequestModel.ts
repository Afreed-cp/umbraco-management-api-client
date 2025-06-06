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
 * @interface CreateStylesheetRequestModel
 */
export interface CreateStylesheetRequestModel {
    /**
     * 
     * @type {string}
     * @memberof CreateStylesheetRequestModel
     */
    name: string;
    /**
     * 
     * @type {FileSystemFolderModel}
     * @memberof CreateStylesheetRequestModel
     */
    parent?: FileSystemFolderModel | null;
    /**
     * 
     * @type {string}
     * @memberof CreateStylesheetRequestModel
     */
    content: string;
}

/**
 * Check if a given object implements the CreateStylesheetRequestModel interface.
 */
export function instanceOfCreateStylesheetRequestModel(value: object): value is CreateStylesheetRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function CreateStylesheetRequestModelFromJSON(json: any): CreateStylesheetRequestModel {
    return CreateStylesheetRequestModelFromJSONTyped(json, false);
}

export function CreateStylesheetRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStylesheetRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'parent': json['parent'] == null ? undefined : FileSystemFolderModelFromJSON(json['parent']),
        'content': json['content'],
    };
}

export function CreateStylesheetRequestModelToJSON(json: any): CreateStylesheetRequestModel {
    return CreateStylesheetRequestModelToJSONTyped(json, false);
}

export function CreateStylesheetRequestModelToJSONTyped(value?: CreateStylesheetRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'parent': FileSystemFolderModelToJSON(value['parent']),
        'content': value['content'],
    };
}

