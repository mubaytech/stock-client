import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepotsComponent } from './depots/depots.component';
import { DepotCreateComponent } from './depot-create/depot-create.component';
import { DepotUpdateComponent } from './depot-update/depot-update.component';
import { DepotDeleteComponent } from './depot-delete/depot-delete.component';
const routes = [
    {
        path: '',
        component: DepotsComponent
    },
    {
        path: 'create',
        component: DepotCreateComponent
    },
    {
        path: ':slug',
        children: [
            {
                path: '',
                component: DepotsComponent
            },
            {
                path: 'update',
                component: DepotUpdateComponent
            },
            {
                path: 'update',
                component: DepotDeleteComponent
            },
        ]
    },
];
let DepotPageRoutingModule = class DepotPageRoutingModule {
};
DepotPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DepotPageRoutingModule);
export { DepotPageRoutingModule };
//# sourceMappingURL=depot-page-routing.module.js.map