import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrentUserComponent} from './current-user.component';
import {UserOptionsModule} from '../user-options/user-options.module';
import {ImageModule} from '../image/image.module';
import {IonicModule} from '@ionic/angular';
import {NgVarModule} from '../ng-var/ng-var.module';
import {IoniconPersonModule, IoniconPersonOutlineModule} from "../../../generated-icons/ionic";


@NgModule({
    declarations: [CurrentUserComponent],
    exports: [
        CurrentUserComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ImageModule,
        UserOptionsModule,
        NgVarModule,
        IoniconPersonModule,
        IoniconPersonOutlineModule,
    ]
})
export class CurrentUserModule {
}
