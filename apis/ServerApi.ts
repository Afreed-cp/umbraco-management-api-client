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
  ProblemDetails,
  ServerConfigurationResponseModel,
  ServerInformationResponseModel,
  ServerStatusResponseModel,
  ServerTroubleshootingResponseModel,
  UpgradeCheckResponseModel,
} from '../models/index';
import {
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    ServerConfigurationResponseModelFromJSON,
    ServerConfigurationResponseModelToJSON,
    ServerInformationResponseModelFromJSON,
    ServerInformationResponseModelToJSON,
    ServerStatusResponseModelFromJSON,
    ServerStatusResponseModelToJSON,
    ServerTroubleshootingResponseModelFromJSON,
    ServerTroubleshootingResponseModelToJSON,
    UpgradeCheckResponseModelFromJSON,
    UpgradeCheckResponseModelToJSON,
} from '../models/index';

/**
 * 
 */
export class ServerApi extends runtime.BaseAPI {

    /**
     */
    async getServerConfigurationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerConfigurationResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/umbraco/management/api/v1/server/configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerConfigurationResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getServerConfiguration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerConfigurationResponseModel> {
        const response = await this.getServerConfigurationRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getServerInformationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerInformationResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/server/information`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerInformationResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getServerInformation(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerInformationResponseModel> {
        const response = await this.getServerInformationRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getServerStatusRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerStatusResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/umbraco/management/api/v1/server/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerStatusResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getServerStatus(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerStatusResponseModel> {
        const response = await this.getServerStatusRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getServerTroubleshootingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ServerTroubleshootingResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/server/troubleshooting`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServerTroubleshootingResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getServerTroubleshooting(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ServerTroubleshootingResponseModel> {
        const response = await this.getServerTroubleshootingRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getServerUpgradeCheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpgradeCheckResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/server/upgrade-check`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpgradeCheckResponseModelFromJSON(jsonValue));
    }

    /**
     */
    async getServerUpgradeCheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpgradeCheckResponseModel> {
        const response = await this.getServerUpgradeCheckRaw(initOverrides);
        return await response.value();
    }

}
