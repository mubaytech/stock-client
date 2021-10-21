import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserOptionsComponent} from './user-options.component';
import {IonicModule} from '@ionic/angular';
import {ImageModule} from '../image/image.module';
import {RouterModule} from '@angular/router';
import {NgVarModule} from "../ng-var/ng-var.module";
import {IoniconPersonModule, IoniconPersonOutlineModule} from "../../../generated-icons/ionic";


@NgModule({
    declarations: [UserOptionsComponent],
    imports: [
        CommonModule,
        IonicModule,
        ImageModule,
        RouterModule,
        NgVarModule,
        IoniconPersonModule,
        IoniconPersonOutlineModule
    ],
    exports: [
        UserOptionsComponent
    ]
})
export class UserOptionsModule {
}
