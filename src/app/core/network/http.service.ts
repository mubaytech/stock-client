import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class HttpService {
    baseUrl = environment.apiUrl;
    options: {
        headers?: HttpHeaders | { [header: string]: string | string[] },
        observe?: 'body' | 'events' | 'response',
        params?: HttpParams | { [param: string]: string | string[] },
        reportProgress?: boolean,
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
        withCredentials?: boolean,
    } = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json',
        }),
        responseType: 'json',
        withCredentials: true,
    };

    constructor() {
    }
}
