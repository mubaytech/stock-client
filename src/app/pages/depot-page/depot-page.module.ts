import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepotPageRoutingModule} from './depot-page-routing.module';
import {DepotModule} from './depot/depot.module';
import {DepotsModule} from './depots/depots.module';
import {DepotCreateModule} from './depot-create/depot-create.module';
import {DepotUpdateModule} from './depot-update/depot-update.module';
import {DepotDeleteModule} from './depot-delete/depot-delete.module';


@NgModule({
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
export class DepotPageModule {
}
