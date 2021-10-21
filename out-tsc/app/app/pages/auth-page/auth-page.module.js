import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { LoginModule } from './login/login.module';
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            LoginModule,
            AuthPageRoutingModule,
        ],
    })
], AuthPageModule);
export { AuthPageModule };
//# sourceMappingURL=auth-page.module.js.map