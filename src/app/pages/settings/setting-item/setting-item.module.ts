import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingItemComponent} from "./setting-item.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrevisionPickerModule} from "../../prevision/prevision-picker/prevision-picker.module";


@NgModule({
  declarations: [SettingItemComponent],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        PrevisionPickerModule,
        FormsModule
    ],
  exports: [SettingItemComponent]
})
export class SettingItemModule {
}
