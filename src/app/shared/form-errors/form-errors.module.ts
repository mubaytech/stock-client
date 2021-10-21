import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormErrorsComponent} from './form-errors.component';
import {IoniconInformationCircleModule, IoniconReloadModule} from '../../../generated-icons/ionic';


@NgModule({
    declarations: [FormErrorsComponent],
    imports: [
        CommonModule,
        IonicModule,
        IoniconReloadModule,
        IoniconInformationCircleModule
    ],
    exports: [
        FormErrorsComponent
    ],
})
export class FormErrorsModule {
}
