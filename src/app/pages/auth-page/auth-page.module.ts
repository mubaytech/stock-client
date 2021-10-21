import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthPageRoutingModule} from './auth-page-routing.module';
import {LoginModule} from './login/login.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LoginModule,
        AuthPageRoutingModule,
    ],

})
export class AuthPageModule {
}
