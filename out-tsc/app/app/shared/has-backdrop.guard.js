import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HasBackdropGuard = class HasBackdropGuard {
    constructor(core, routeService, location, router) {
        this.core = core;
        this.routeService = routeService;
        this.location = location;
        this.router = router;
    }
    canDeactivate(_component, currentRoute, currentState, nextState) {
        if (this.core.isNative || this.routeService.lastTrigger !== 'popstate') {
            return true;
        }
        return this.core.closeModals().then(value => {
            const ret = !value;
            if (!ret) {
                const currentUrlTree = this.router.createUrlTree([], currentRoute);
                const currentUrl = currentUrlTree.toString();
                this.location.go(currentUrl);
            }
            return ret;
        });
    }
};
HasBackdropGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HasBackdropGuard);
export { HasBackdropGuard };
//# sourceMappingURL=has-backdrop.guard.js.map