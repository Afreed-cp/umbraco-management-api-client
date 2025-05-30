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
 * @interface CreatePartialViewRequestModel
 */
export interface CreatePartialViewRequestModel {
    /**
     * 
     * @type {string}
     * @memberof CreatePartialViewRequestModel
     */
    name: string;
    /**
     * 
     * @type {FileSystemFolderModel}
     * @memberof CreatePartialViewRequestModel
     */
    parent?: FileSystemFolderModel | null;
    /**
     * 
     * @type {string}
     * @memberof CreatePartialViewRequestModel
     */
    content: string;
}

/**
 * Check if a given object implements the CreatePartialViewRequestModel interface.
 */
export function instanceOfCreatePartialViewRequestModel(value: object): value is CreatePartialViewRequestModel {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function CreatePartialViewRequestModelFromJSON(json: any): CreatePartialViewRequestModel {
    return CreatePartialViewRequestModelFromJSONTyped(json, false);
}

export function CreatePartialViewRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePartialViewRequestModel {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'parent': json['parent'] == null ? undefined : FileSystemFolderModelFromJSON(json['parent']),
        'content': json['content'],
    };
}

export function CreatePartialViewRequestModelToJSON(json: any): CreatePartialViewRequestModel {
    return CreatePartialViewRequestModelToJSONTyped(json, false);
}

export function CreatePartialViewRequestModelToJSONTyped(value?: CreatePartialViewRequestModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'parent': FileSystemFolderModelToJSON(value['parent']),
        'content': value['content'],
    };
}

