import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoneyDisplayComponent} from "./money-display.component";
import {MaskModule} from "../mask/mask.module";


@NgModule({
  declarations: [MoneyDisplayComponent],
  imports: [
    CommonModule,
    MaskModule
  ],
  exports: [MoneyDisplayComponent]
})
export class MoneyDisplayModule {
}
