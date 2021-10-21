import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes = [
    {
        path: '',
        component: DashboardComponent
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DashboardPageRoutingModule);
export { DashboardPageRoutingModule };
//# sourceMappingURL=dashboard-page-routing.module.js.map