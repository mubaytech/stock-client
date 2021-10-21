import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepotComponent} from './depot.component';
import {IonicModule} from '@ionic/angular';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MaterialTableVirtualScrollModule} from '../../../shared/material-table-virtual-scroll/material-table-virtual-scroll.module';
import {RouterModule} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
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
export class DepotModule {
}
