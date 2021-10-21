import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsAllPageComponent} from "./settings-all-page.component";
import {IonicModule} from "@ionic/angular";
import {CurrentUserModule} from "../../../shared/current-user/current-user.module";
import {SettingItemModule} from "../setting-item/setting-item.module";


@NgModule({
  declarations: [SettingsAllPageComponent],
  imports: [
    CommonModule,
    IonicModule,
    CurrentUserModule,
    SettingItemModule
  ],
  exports: [SettingsAllPageComponent]
})
export class SettingsAllPageModule {
}
