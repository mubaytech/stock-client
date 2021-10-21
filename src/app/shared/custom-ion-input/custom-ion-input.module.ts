import {
  NgModule,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomIonInputComponent} from './custom-ion-input.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {ModalBaseModule} from '../modal-base/modal-base.module';
import {CustomIonInputValueComponent} from './custom-ion-input-value/custom-ion-input-value.component';
import {CustomIonInputIconComponent} from './custom-ion-input-icon/custom-ion-input-icon.component';
import {CustomIonInputPlaceholderComponent} from './custom-ion-input-placeholder/custom-ion-input-placeholder.component';
import {IoniconCloseCircleModule} from "../../../generated-icons/ionic";


@NgModule({
  declarations: [CustomIonInputComponent, CustomIonInputValueComponent, CustomIonInputIconComponent, CustomIonInputPlaceholderComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModalBaseModule,
        IoniconCloseCircleModule,
    ],
  exports: [
    CustomIonInputComponent, CustomIonInputValueComponent, CustomIonInputIconComponent, CustomIonInputPlaceholderComponent,
    ModalBaseModule
  ]
})
export class CustomIonInputModule {
}
