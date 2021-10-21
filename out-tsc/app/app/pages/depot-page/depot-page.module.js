import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotPageRoutingModule } from './depot-page-routing.module';
import { DepotModule } from './depot/depot.module';
import { DepotsModule } from './depots/depots.module';
import { DepotCreateModule } from './depot-create/depot-create.module';
import { DepotUpdateModule } from './depot-update/depot-update.module';
import { DepotDeleteModule } from './depot-delete/depot-delete.module';
let DepotPageModule = class DepotPageModule {
};
DepotPageModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            DepotPageRoutingModule,
            DepotModule,
            DepotCreateModule,
            DepotsModule,
            DepotUpdateModule,
            DepotDeleteModule,
        ]
    })
], DepotPageModule);
export { DepotPageModule };
//# sourceMappingURL=depot-page.module.js.map