/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API Playlist Vidoe
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntPatient,
    EntPatientFromJSON,
    EntPatientFromJSONTyped,
    EntPatientToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntPrefixEdges
 */
export interface EntPrefixEdges {
    /**
     * Fromprefix holds the value of the fromprefix edge.
     * @type {Array<EntPatient>}
     * @memberof EntPrefixEdges
     */
    fromprefix?: Array<EntPatient>;
}

export function EntPrefixEdgesFromJSON(json: any): EntPrefixEdges {
    return EntPrefixEdgesFromJSONTyped(json, false);
}

export function EntPrefixEdgesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntPrefixEdges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromprefix': !exists(json, 'fromprefix') ? undefined : ((json['fromprefix'] as Array<any>).map(EntPatientFromJSON)),
    };
}

export function EntPrefixEdgesToJSON(value?: EntPrefixEdges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fromprefix': value.fromprefix === undefined ? undefined : ((value.fromprefix as Array<any>).map(EntPatientToJSON)),
    };
}


