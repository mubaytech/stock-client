import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategorieInputComponent} from './categorie-input.component';
import {CustomIonInputModule} from '../../../shared/custom-ion-input/custom-ion-input.module';
import {FormsModule} from '@angular/forms';
import {CategoriePickerModule} from '../categorie-picker/categorie-picker.module';


@NgModule({
    declarations: [CategorieInputComponent],
    imports: [
        CommonModule,
        CustomIonInputModule,
        CategoriePickerModule,
        FormsModule
    ],
    exports: [CategorieInputComponent]
})
export class CategorieInputModule {
}
