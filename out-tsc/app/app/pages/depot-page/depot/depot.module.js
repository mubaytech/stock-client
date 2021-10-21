import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotComponent } from './depot.component';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MaterialTableVirtualScrollModule } from '../../../shared/material-table-virtual-scroll/material-table-virtual-scroll.module';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
let DepotModule = class DepotModule {
};
DepotModule = __decorate([
    NgModule({
        declarations: [DepotComponent],
        imports: [
            CommonModule,
            IonicModule,
            MatTableModule,
            MatSortModule,
            MaterialTableVirtualScrollModule,
            RouterModule,
            MatPaginatorModule
        ],
        exports: [
            DepotComponent
        ]
    })
], DepotModule);
export { DepotModule };
//# sourceMappingURL=depot.module.js.map