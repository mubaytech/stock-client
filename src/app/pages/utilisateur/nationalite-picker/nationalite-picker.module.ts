import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NationalitePickerComponent} from './nationalite-picker.component';
import {IonicSelectableModule} from "../../../shared/ionic-selectable/ionic-selectable.module";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [NationalitePickerComponent],
    imports: [
        CommonModule,
        IonicSelectableModule,
        FormsModule,
    ],
    exports: [NationalitePickerComponent]
})
export class NationalitePickerModule {
}
