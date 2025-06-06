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
  NotificationHeaderModel,
  PagedTelemetryResponseModel,
  ProblemDetails,
  TelemetryRequestModel,
  TelemetryResponseModel,
} from '../models/index';
import {
    NotificationHeaderModelFromJSON,
    NotificationHeaderModelToJSON,
    PagedTelemetryResponseModelFromJSON,
    PagedTelemetryResponseModelToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    TelemetryRequestModelFromJSON,
    TelemetryRequestModelToJSON,
    TelemetryResponseModelFromJSON,
    TelemetryResponseModelToJSON,
} from '../models/index';

export interface GetTelemetryRequest {
    skip?: number;
    take?: number;
}

export interface PostTelemetryLevelRequest {
    telemetryRequestModel?: TelemetryRequestModel;
}

/**
 * 
 */
export class TelemetryApi extends runtime.BaseAPI {

    /**
     */
    async getTelemetryRaw(requestParameters: GetTelemetryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedTelemetryResponseModel>> {
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
            path: `/umbraco/management/api/v1/telemetry`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedTelemetryResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getTelemetry(requestParameters: GetTelemetryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedTelemetryResponseModel> {
        const response = await this.getTelemetryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTelemetryLevelRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TelemetryResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/telemetry/level`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TelemetryResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getTelemetryLevel(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TelemetryResponseModel> {
        const response = await this.getTelemetryLevelRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async postTelemetryLevelRaw(requestParameters: PostTelemetryLevelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/telemetry/level`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TelemetryRequestModelToJSON(requestParameters['telemetryRequestModel']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async postTelemetryLevel(requestParameters: PostTelemetryLevelRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postTelemetryLevelRaw(requestParameters, initOverrides);
    }

}
