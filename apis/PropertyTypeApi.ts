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
} from '../models/index';
import {
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models/index';

export interface GetPropertyTypeIsUsedRequest {
    contentTypeId?: string;
    propertyAlias?: string;
}

/**
 * 
 */
export class PropertyTypeApi extends runtime.BaseAPI {

    /**
     */
    async getPropertyTypeIsUsedRaw(requestParameters: GetPropertyTypeIsUsedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        const queryParameters: any = {};

        if (requestParameters['contentTypeId'] != null) {
            queryParameters['contentTypeId'] = requestParameters['contentTypeId'];
        }

        if (requestParameters['propertyAlias'] != null) {
            queryParameters['propertyAlias'] = requestParameters['propertyAlias'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("Backoffice User", []);
        }

        const response = await this.request({
            path: `/umbraco/management/api/v1/property-type/is-used`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async getPropertyTypeIsUsed(requestParameters: GetPropertyTypeIsUsedRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.getPropertyTypeIsUsedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
