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


/**
 * 
 * @export
 */
export const UserStateModel = {
    Active: 'Active',
    Disabled: 'Disabled',
    LockedOut: 'LockedOut',
    Invited: 'Invited',
    Inactive: 'Inactive',
    All: 'All'
} as const;
export type UserStateModel = typeof UserStateModel[keyof typeof UserStateModel];


export function instanceOfUserStateModel(value: any): boolean {
    for (const key in UserStateModel) {
        if (Object.prototype.hasOwnProperty.call(UserStateModel, key)) {
            if (UserStateModel[key as keyof typeof UserStateModel] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UserStateModelFromJSON(json: any): UserStateModel {
    return UserStateModelFromJSONTyped(json, false);
}

export function UserStateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserStateModel {
    return json as UserStateModel;
}

export function UserStateModelToJSON(value?: UserStateModel | null): any {
    return value as any;
}

export function UserStateModelToJSONTyped(value: any, ignoreDiscriminator: boolean): UserStateModel {
    return value as UserStateModel;
}

