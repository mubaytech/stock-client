import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipInputComponent} from './chip-input.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IoniconAddModule, IoniconCloseOutlineModule, IoniconTrashOutlineModule} from '../../../generated-icons/ionic';
import {CustomIonInputModule} from '../custom-ion-input/custom-ion-input.module';
import {ChipInputFieldComponent} from './chip-input-field/chip-input-field.component';
import {ChipInputItemComponent} from './chip-input-item/chip-input-item.component';


@NgModule({
  declarations: [
    ChipInputComponent,
    ChipInputFieldComponent,
    ChipInputItemComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        IoniconCloseOutlineModule,
        CustomIonInputModule,
        IoniconAddModule,
        IoniconTrashOutlineModule
    ],
  exports: [
    ChipInputComponent,
    ChipInputFieldComponent,
    ChipInputItemComponent
  ],
})
export class ChipInputModule {
}
