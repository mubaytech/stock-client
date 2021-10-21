var NetworkModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkService } from './network.service';
import { HttpService } from './http.service';
import { RetryInterceptorService } from './retry-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
let NetworkModule = NetworkModule_1 = class NetworkModule {
    static forRoot() {
        return {
            ngModule: NetworkModule_1,
            providers: [
                HttpService,
                NetworkService,
                { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptorService, multi: true }
            ]
        };
    }
};
NetworkModule = NetworkModule_1 = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ]
    })
], NetworkModule);
export { NetworkModule };
//# sourceMappingURL=network.module.js.map