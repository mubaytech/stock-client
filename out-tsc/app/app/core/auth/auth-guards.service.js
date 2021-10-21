import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of, pipe } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
let AuthGuardsService = class AuthGuardsService {
    constructor(net, authService) {
        this.net = net;
        this.authService = authService;
    }
    get isAdmin() {
        return this.hasRole('admin');
    }
    get isManager() {
        return this.hasRole('manager');
    }
    get isDriver() {
        return this.hasRole('driver');
    }
    hasRole(role) {
        return pipe(switchMap(() => this.authService.user.pipe(distinctUntilChanged((v, t) => (v === null || v === void 0 ? void 0 : v.id) === (t === null || t === void 0 ? void 0 : t.id)))), map((user) => {
            return !!(user === null || user === void 0 ? void 0 : user.roles.find(userRole => (userRole.nom
                && (role === 'any'
                    || userRole.nom === role
                    || (userRole.nom === 'admin'
                        || userRole.nom === 'superAdmin')))));
        }));
    }
    userHasRole(role) {
        return of('').pipe(this.hasRole(role));
    }
    get userRole() {
        return this.authService.user.pipe(map(value => {
            return value.roles.map((obj) => {
                return obj.nom;
            });
        }));
    }
    get user() {
        return this.authService.$user.getValue();
    }
    logout() {
        this.authService.logout();
    }
};
AuthGuardsService = __decorate([
    Injectable()
], AuthGuardsService);
export { AuthGuardsService };
//# sourceMappingURL=auth-guards.service.js.map