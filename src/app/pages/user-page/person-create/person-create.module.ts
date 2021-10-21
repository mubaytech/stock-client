import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonCreateComponent} from './person-create.component';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {IonicModule} from '@ionic/angular';
import {ReactiveTypedFormsModule} from '@rxweb/reactive-form-validators';
import {ChipInputModule} from '../../../shared/chip-input/chip-input.module';
import {UploadModule} from '../../../core/upload/upload.module';
import {MaskModule} from '../../../shared/mask/mask.module';
import {DatePickerModule} from "../../../shared/date-picker/date-picker.module";
import {NationalitePickerModule} from "../nationalite-picker/nationalite-picker.module";


@NgModule({
    declarations: [PersonCreateComponent],
    imports: [
        CommonModule,
        FormErrorsModule,
        IonicModule,
        ReactiveTypedFormsModule,
        ChipInputModule,
        UploadModule,
        MaskModule,
        DatePickerModule,
        NationalitePickerModule
    ],
    exports: [
        PersonCreateComponent,
    ]
})
export class PersonCreateModule {
}
