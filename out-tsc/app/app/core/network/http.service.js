import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
let HttpService = class HttpService {
    constructor() {
        this.baseUrl = environment.apiUrl;
        this.options = {
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
    }
};
HttpService = __decorate([
    Injectable()
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map