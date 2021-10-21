import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageRoutingModule } from './user-page-routing.module';
import { UserCreateModule } from './user-create/user-create.module';
let UserPageModule = class UserPageModule {
};
UserPageModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            UserPageRoutingModule,
            UserCreateModule
        ]
    })
], UserPageModule);
export { UserPageModule };
//# sourceMappingURL=user-page.module.js.map