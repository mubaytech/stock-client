import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NetworkService} from './network.service';
import {HttpService} from './http.service';
import {RetryInterceptorService} from './retry-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class NetworkModule {
    public static forRoot(): ModuleWithProviders<NetworkModule> {
        return {
            ngModule: NetworkModule,
            providers: [
                HttpService,
                NetworkService,
                {provide: HTTP_INTERCEPTORS, useClass: RetryInterceptorService, multi: true}
            ]
        };
    }
}
