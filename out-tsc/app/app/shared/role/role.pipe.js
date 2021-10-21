import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { of } from 'rxjs';
let RolePipe = class RolePipe {
    constructor(net, authGuard) {
        this.net = net;
        this.authGuard = authGuard;
    }
    transform(role, ...args) {
        return of(true).pipe(this.authGuard.hasRole(role));
    }
};
RolePipe = __decorate([
    Pipe({
        name: 'role'
    })
], RolePipe);
export { RolePipe };
//# sourceMappingURL=role.pipe.js.map