var AuthModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuardsService } from './auth-guards.service';
import { UserService } from './user.service';
import { ManagerOnlyGuard } from './manager-only.guard';
import { RedirectLoggedToHomeGuard } from './redirect-logged-to-home.guard';
import { RedirectUnauthorizedToLoginGuard } from './redirect-unauthorized-to-login.guard';
import { AdminOnlyGuard } from './admin-only.guard';
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoute() {
        return {
            ngModule: AuthModule_1,
            providers: [
                AuthService,
                AuthGuardsService,
                UserService,
                ManagerOnlyGuard,
                RedirectLoggedToHomeGuard,
                RedirectUnauthorizedToLoginGuard,
                AdminOnlyGuard
            ]
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    NgModule({
        declarations: [],
        providers: [],
        imports: [
            CommonModule
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map