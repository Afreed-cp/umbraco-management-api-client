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
 * @interface CreateStylesheetFolderRequestModel
 */
export interface CreateStylesheetFolderRequestModel {
    /**
     * 
     * @type {string}
     * @memberof CreateStylesheetFolderRequestModel
     */
    name: string;
    /**
     * 
     * @type {FileSystemFolderModel}
     * @memberof CreateStylesheetFolderRequestModel
     */
    parent?: FileSystemFolderModel | null;
}

/**
 * Check if a given object implements the CreateStylesheetFolderRequestModel interface.
 */
export function instanceOfCreateStylesheetFolderRequestModel(value: object): value is CreateStylesheetFolderRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CreateStylesheetFolderRequestModelFromJSON(json: any): CreateStylesheetFolderRequestModel {
    return CreateStylesheetFolderRequestModelFromJSONTyped(json, false);
}

export function CreateStylesheetFolderRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStylesheetFolderRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'parent': json['parent'] == null ? undefined : FileSystemFolderModelFromJSON(json['parent']),
    };
}

export function CreateStylesheetFolderRequestModelToJSON(json: any): CreateStylesheetFolderRequestModel {
    return CreateStylesheetFolderRequestModelToJSONTyped(json, false);
}

export function CreateStylesheetFolderRequestModelToJSONTyped(value?: CreateStylesheetFolderRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'parent': FileSystemFolderModelToJSON(value['parent']),
    };
}

