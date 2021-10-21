import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {IonicModule} from '@ionic/angular';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {MaskModule} from "../../../shared/mask/mask.module";
import {IoniconLockClosedModule, IoniconPersonModule} from "../../../../generated-icons/ionic";
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormErrorsModule,
        ReactiveFormsModule,
        MaskModule,
        IoniconLockClosedModule,
        IoniconPersonModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}
