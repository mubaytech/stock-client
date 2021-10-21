import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonDatePickerComponent} from "./ion-date-picker/ion-date-picker.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {TimeModule} from "../time/time.module";
import {MaskModule} from "../mask/mask.module";
import {IoniconCalendarModule, IoniconCloseCircleModule} from "../../../generated-icons/ionic";
import { IonDatePickerFormatPipe } from './ion-date-picker-format.pipe';


@NgModule({
  declarations: [IonDatePickerComponent, IonDatePickerFormatPipe],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TimeModule,
        MaskModule,
        IoniconCalendarModule,
        IoniconCloseCircleModule
    ],
  exports: [IonDatePickerComponent]
})
export class IonDatePickerModule {
}
