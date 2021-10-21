import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let ManagerOnlyGuard = class ManagerOnlyGuard {
    constructor(authGuard) {
        this.authGuard = authGuard;
    }
    canActivate(next, state) {
        return of(false).pipe(this.authGuard.hasRole('manager'));
    }
};
ManagerOnlyGuard = __decorate([
    Injectable()
], ManagerOnlyGuard);
export { ManagerOnlyGuard };
//# sourceMappingURL=manager-only.guard.js.map