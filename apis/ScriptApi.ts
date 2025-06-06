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


import * as runtime from '../runtime';
import type {
  CreateScriptFolderRequestModel,
  CreateScriptRequestModel,
  GetItemScript200ResponseInner,
  GetTreePartialViewAncestors200ResponseInner,
  NotificationHeaderModel,
  PagedFileSystemTreeItemPresentationModel,
  ProblemDetails,
  RenameScriptRequestModel,
  ScriptFolderResponseModel,
  ScriptResponseModel,
  UpdateScriptRequestModel,
} from '../models/index';
import {
    CreateScriptFolderRequestModelFromJSON,
    CreateScriptFolderRequestModelToJSON,
    CreateScriptRequestModelFromJSON,
    CreateScriptRequestModelToJSON,
    GetItemScript200ResponseInnerFromJSON,
    GetItemScript200ResponseInnerToJSON,
    GetTreePartialViewAncestors200ResponseInnerFromJSON,
    GetTreePartialViewAncestors200ResponseInnerToJSON,
    NotificationHeaderModelFromJSON,
    NotificationHeaderModelToJSON,
    PagedFileSystemTreeItemPresentationModelFromJSON,
    PagedFileSystemTreeItemPresentationModelToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    RenameScriptRequestModelFromJSON,
    RenameScriptRequestModelToJSON,
    ScriptFolderResponseModelFromJSON,
    ScriptFolderResponseModelToJSON,
    ScriptResponseModelFromJSON,
    ScriptResponseModelToJSON,
    UpdateScriptRequestModelFromJSON,
    UpdateScriptRequestModelToJSON,
} from '../models/index';

export interface DeleteScriptByPathRequest {
    path: string;
}

export interface DeleteScriptFolderByPathRequest {
    path: string;
}

export interface GetItemScriptRequest {
    path?: Set<string>;
}

export interface GetScriptByPathRequest {
    path: string;
}

export interface GetScriptFolderByPathRequest {
    path: string;
}

export interface GetTreeScriptAncestorsRequest {
    descendantPath?: string;
}

export interface GetTreeScriptChildrenRequest {
    parentPath?: string;
    skip?: number;
    take?: number;
}

export interface GetTreeScriptRootRequest {
    skip?: number;
    take?: number;
}

export interface PostScriptRequest {
    createScriptRequestModel?: CreateScriptRequestModel;
}

export interface PostScriptFolderRequest {
    createScriptFolderRequestModel?: CreateScriptFolderRequestModel;
}

export interface PutScriptByPathRequest {
    path: string;
    updateScriptRequestModel?: UpdateScriptRequestModel;
}

export interface PutScriptByPathRenameRequest {
    path: string;
    renameScriptRequestModel?: RenameScriptRequestModel;
}

/**
 * 
 */
export class ScriptApi extends runtime.BaseAPI {

    /**
     */
    async deleteScriptByPathRaw(requestParameters: DeleteScriptByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling deleteScriptByPath().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/{path}`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteScriptByPath(requestParameters: DeleteScriptByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteScriptByPathRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteScriptFolderByPathRaw(requestParameters: DeleteScriptFolderByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling deleteScriptFolderByPath().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/folder/{path}`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteScriptFolderByPath(requestParameters: DeleteScriptFolderByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteScriptFolderByPathRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getItemScriptRaw(requestParameters: GetItemScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetItemScript200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters['path'] != null) {
            queryParameters['path'] = requestParameters['path'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/item/script`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetItemScript200ResponseInnerFromJSON));
    }

    /**
     */
    async getItemScript(requestParameters: GetItemScriptRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetItemScript200ResponseInner>> {
        const response = await this.getItemScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getScriptByPathRaw(requestParameters: GetScriptByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScriptResponseModel>> {
        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling getScriptByPath().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/{path}`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getScriptByPath(requestParameters: GetScriptByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScriptResponseModel> {
        const response = await this.getScriptByPathRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getScriptFolderByPathRaw(requestParameters: GetScriptFolderByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScriptFolderResponseModel>> {
        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling getScriptFolderByPath().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/folder/{path}`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScriptFolderResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getScriptFolderByPath(requestParameters: GetScriptFolderByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScriptFolderResponseModel> {
        const response = await this.getScriptFolderByPathRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTreeScriptAncestorsRaw(requestParameters: GetTreeScriptAncestorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetTreePartialViewAncestors200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters['descendantPath'] != null) {
            queryParameters['descendantPath'] = requestParameters['descendantPath'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/tree/script/ancestors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetTreePartialViewAncestors200ResponseInnerFromJSON));
    }

    /**
     */
    async getTreeScriptAncestors(requestParameters: GetTreeScriptAncestorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetTreePartialViewAncestors200ResponseInner>> {
        const response = await this.getTreeScriptAncestorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTreeScriptChildrenRaw(requestParameters: GetTreeScriptChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedFileSystemTreeItemPresentationModel>> {
        const queryParameters: any = {};

        if (requestParameters['parentPath'] != null) {
            queryParameters['parentPath'] = requestParameters['parentPath'];
        }

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['take'] != null) {
            queryParameters['take'] = requestParameters['take'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/tree/script/children`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedFileSystemTreeItemPresentationModelFromJSON(jsonValue));
    }

    /**
     */
    async getTreeScriptChildren(requestParameters: GetTreeScriptChildrenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedFileSystemTreeItemPresentationModel> {
        const response = await this.getTreeScriptChildrenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTreeScriptRootRaw(requestParameters: GetTreeScriptRootRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedFileSystemTreeItemPresentationModel>> {
        const queryParameters: any = {};

        if (requestParameters['skip'] != null) {
            queryParameters['skip'] = requestParameters['skip'];
        }

        if (requestParameters['take'] != null) {
            queryParameters['take'] = requestParameters['take'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/tree/script/root`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedFileSystemTreeItemPresentationModelFromJSON(jsonValue));
    }

    /**
     */
    async getTreeScriptRoot(requestParameters: GetTreeScriptRootRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedFileSystemTreeItemPresentationModel> {
        const response = await this.getTreeScriptRootRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async postScriptRaw(requestParameters: PostScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateScriptRequestModelToJSON(requestParameters['createScriptRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async postScript(requestParameters: PostScriptRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postScriptRaw(requestParameters, initOverrides);
    }

    /**
     */
    async postScriptFolderRaw(requestParameters: PostScriptFolderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/folder`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateScriptFolderRequestModelToJSON(requestParameters['createScriptFolderRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async postScriptFolder(requestParameters: PostScriptFolderRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postScriptFolderRaw(requestParameters, initOverrides);
    }

    /**
     */
    async putScriptByPathRaw(requestParameters: PutScriptByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling putScriptByPath().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/{path}`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateScriptRequestModelToJSON(requestParameters['updateScriptRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async putScriptByPath(requestParameters: PutScriptByPathRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putScriptByPathRaw(requestParameters, initOverrides);
    }

    /**
     */
    async putScriptByPathRenameRaw(requestParameters: PutScriptByPathRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['path'] == null) {
            throw new runtime.RequiredError(
                'path',
                'Required parameter "path" was null or undefined when calling putScriptByPathRename().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/script/{path}/rename`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters['path']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RenameScriptRequestModelToJSON(requestParameters['renameScriptRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async putScriptByPathRename(requestParameters: PutScriptByPathRenameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putScriptByPathRenameRaw(requestParameters, initOverrides);
    }

}
