import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let RedirectLoggedToHomeGuard = class RedirectLoggedToHomeGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.authenticated.pipe(map(authenticated => {
            if (authenticated) {
                this.router.navigate(['/'], { replaceUrl: true }).then();
                return false;
            }
            return true;
        }));
    }
};
RedirectLoggedToHomeGuard = __decorate([
    Injectable()
], RedirectLoggedToHomeGuard);
export { RedirectLoggedToHomeGuard };
//# sourceMappingURL=redirect-logged-to-home.guard.js.map