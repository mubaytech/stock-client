import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AuthPageRoutingModule);
export { AuthPageRoutingModule };
//# sourceMappingURL=auth-page-routing.module.js.map