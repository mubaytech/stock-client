import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
const routes = [
    {
        path: '',
        component: UserCreateComponent
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UserPageRoutingModule);
export { UserPageRoutingModule };
//# sourceMappingURL=user-page-routing.module.js.map