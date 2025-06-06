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
  CreateLanguageRequestModel,
  GetItemLanguage200ResponseInner,
  LanguageItemResponseModel,
  LanguageResponseModel,
  NotificationHeaderModel,
  PagedLanguageResponseModel,
  ProblemDetails,
  UpdateLanguageRequestModel,
} from '../models/index';
import {
    CreateLanguageRequestModelFromJSON,
    CreateLanguageRequestModelToJSON,
    GetItemLanguage200ResponseInnerFromJSON,
    GetItemLanguage200ResponseInnerToJSON,
    LanguageItemResponseModelFromJSON,
    LanguageItemResponseModelToJSON,
    LanguageResponseModelFromJSON,
    LanguageResponseModelToJSON,
    NotificationHeaderModelFromJSON,
    NotificationHeaderModelToJSON,
    PagedLanguageResponseModelFromJSON,
    PagedLanguageResponseModelToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    UpdateLanguageRequestModelFromJSON,
    UpdateLanguageRequestModelToJSON,
} from '../models/index';

export interface DeleteLanguageByIsoCodeRequest {
    isoCode: string;
}

export interface GetItemLanguageRequest {
    isoCode?: Set<string>;
}

export interface GetLanguageRequest {
    skip?: number;
    take?: number;
}

export interface GetLanguageByIsoCodeRequest {
    isoCode: string;
}

export interface PostLanguageRequest {
    createLanguageRequestModel?: CreateLanguageRequestModel;
}

export interface PutLanguageByIsoCodeRequest {
    isoCode: string;
    updateLanguageRequestModel?: UpdateLanguageRequestModel;
}

/**
 * 
 */
export class LanguageApi extends runtime.BaseAPI {

    /**
     */
    async deleteLanguageByIsoCodeRaw(requestParameters: DeleteLanguageByIsoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['isoCode'] == null) {
            throw new runtime.RequiredError(
                'isoCode',
                'Required parameter "isoCode" was null or undefined when calling deleteLanguageByIsoCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/language/{isoCode}`.replace(`{${"isoCode"}}`, encodeURIComponent(String(requestParameters['isoCode']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteLanguageByIsoCode(requestParameters: DeleteLanguageByIsoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLanguageByIsoCodeRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getItemLanguageRaw(requestParameters: GetItemLanguageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetItemLanguage200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters['isoCode'] != null) {
            queryParameters['isoCode'] = requestParameters['isoCode'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/item/language`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetItemLanguage200ResponseInnerFromJSON));
    }

    /**
     */
    async getItemLanguage(requestParameters: GetItemLanguageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetItemLanguage200ResponseInner>> {
        const response = await this.getItemLanguageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getItemLanguageDefaultRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LanguageItemResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/item/language/default`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LanguageItemResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getItemLanguageDefault(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LanguageItemResponseModel> {
        const response = await this.getItemLanguageDefaultRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getLanguageRaw(requestParameters: GetLanguageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedLanguageResponseModel>> {
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
            path: `/umbraco/management/api/v1/language`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedLanguageResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getLanguage(requestParameters: GetLanguageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedLanguageResponseModel> {
        const response = await this.getLanguageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getLanguageByIsoCodeRaw(requestParameters: GetLanguageByIsoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LanguageResponseModel>> {
        if (requestParameters['isoCode'] == null) {
            throw new runtime.RequiredError(
                'isoCode',
                'Required parameter "isoCode" was null or undefined when calling getLanguageByIsoCode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/language/{isoCode}`.replace(`{${"isoCode"}}`, encodeURIComponent(String(requestParameters['isoCode']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LanguageResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getLanguageByIsoCode(requestParameters: GetLanguageByIsoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LanguageResponseModel> {
        const response = await this.getLanguageByIsoCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async postLanguageRaw(requestParameters: PostLanguageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/language`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateLanguageRequestModelToJSON(requestParameters['createLanguageRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async postLanguage(requestParameters: PostLanguageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postLanguageRaw(requestParameters, initOverrides);
    }

    /**
     */
    async putLanguageByIsoCodeRaw(requestParameters: PutLanguageByIsoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['isoCode'] == null) {
            throw new runtime.RequiredError(
                'isoCode',
                'Required parameter "isoCode" was null or undefined when calling putLanguageByIsoCode().'
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
            path: `/umbraco/management/api/v1/language/{isoCode}`.replace(`{${"isoCode"}}`, encodeURIComponent(String(requestParameters['isoCode']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateLanguageRequestModelToJSON(requestParameters['updateLanguageRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async putLanguageByIsoCode(requestParameters: PutLanguageByIsoCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.putLanguageByIsoCodeRaw(requestParameters, initOverrides);
    }

}
