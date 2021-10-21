import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePickerInputComponent} from './date-picker-input/date-picker-input.component';
import {DatePickerComponent} from './date-picker.component';
import {CustomIonInputModule} from '../custom-ion-input/custom-ion-input.module';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {A11yModule} from '@angular/cdk/a11y';


@NgModule({
    declarations: [DatePickerInputComponent, DatePickerComponent],
    imports: [
        CommonModule,
        IonicModule,
        CustomIonInputModule,
        FormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        A11yModule
    ],
    exports: [
        DatePickerInputComponent, DatePickerComponent
    ]
})
export class DatePickerModule {
}
