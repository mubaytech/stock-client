import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { mergeMap, retryWhen } from 'rxjs/operators';
let RetryInterceptorService = class RetryInterceptorService {
    constructor(storage, networkService) {
        this.storage = storage;
        this.networkService = networkService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(retryWhen((attempts) => {
            return attempts.pipe(mergeMap((error) => {
                if (error.status !== 0) {
                    return throwError(error);
                }
                return this.networkService.onInternetRetablished;
            }));
        }));
    }
};
RetryInterceptorService = __decorate([
    Injectable()
], RetryInterceptorService);
export { RetryInterceptorService };
//# sourceMappingURL=retry-interceptor.service.js.map