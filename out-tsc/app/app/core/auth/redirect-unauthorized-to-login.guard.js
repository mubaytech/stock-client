import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
let RedirectUnauthorizedToLoginGuard = class RedirectUnauthorizedToLoginGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.authenticated.pipe(take(1), map(authenticated => {
            if (!authenticated) {
                this.router.navigate(['/login'], { replaceUrl: true }).then();
                return false;
            }
            return true;
        }));
    }
};
RedirectUnauthorizedToLoginGuard = __decorate([
    Injectable()
], RedirectUnauthorizedToLoginGuard);
export { RedirectUnauthorizedToLoginGuard };
//# sourceMappingURL=redirect-unauthorized-to-login.guard.js.map