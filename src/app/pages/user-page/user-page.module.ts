import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserPageRoutingModule} from './user-page-routing.module';
import {PersonCreateModule} from './person-create/person-create.module';
import {UserCreateModule} from './user-create/user-create.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserPageRoutingModule,
        UserCreateModule
    ]
})
export class UserPageModule {
}
