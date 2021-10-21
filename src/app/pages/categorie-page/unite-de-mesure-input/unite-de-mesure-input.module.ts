import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniteDeMesureInputComponent} from './unite-de-mesure-input.component';
import {CustomIonInputModule} from '../../../shared/custom-ion-input/custom-ion-input.module';
import {FormsModule} from '@angular/forms';
import {UniteDeMesurePickerModule} from '../unite-de-mesure-picker/unite-de-mesure-picker.module';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [UniteDeMesureInputComponent],
    imports: [
        CommonModule,
        CustomIonInputModule,
        FormsModule,
        UniteDeMesurePickerModule,
        IonicModule
    ],
    exports: [UniteDeMesureInputComponent]
})
export class UniteDeMesureInputModule {
}
