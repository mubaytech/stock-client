import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsRoutingModule} from "./settings-routing.module";
import {SettingsAllPageModule} from "./settings-all-page/settings-all-page.module";


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SettingsAllPageModule
  ]
})
export class SettingsModule {
}
