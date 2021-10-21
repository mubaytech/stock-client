import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let AdminOnlyGuard = class AdminOnlyGuard {
    constructor(authGuard) {
        this.authGuard = authGuard;
    }
    canActivate(next, state) {
        return of(false).pipe(this.authGuard.hasRole('admin'));
    }
};
AdminOnlyGuard = __decorate([
    Injectable()
], AdminOnlyGuard);
export { AdminOnlyGuard };
//# sourceMappingURL=admin-only.guard.js.map