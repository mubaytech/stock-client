import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = __decorate([
    NgModule({
        declarations: [DashboardComponent],
        imports: [
            CommonModule,
            DashboardPageRoutingModule
        ]
    })
], DashboardPageModule);
export { DashboardPageModule };
//# sourceMappingURL=dashboard-page.module.js.map