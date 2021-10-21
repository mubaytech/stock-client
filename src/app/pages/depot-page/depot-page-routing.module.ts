import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DepotComponent} from './depot/depot.component';
import {DepotsComponent} from './depots/depots.component';
import {DepotCreateComponent} from './depot-create/depot-create.component';
import {DepotUpdateComponent} from './depot-update/depot-update.component';
import {DepotDeleteComponent} from './depot-delete/depot-delete.component';

const routes: Routes = [
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

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepotPageRoutingModule {
}
