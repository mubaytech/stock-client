import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogCloseButtonComponent} from "./dialog-close-button.component";
import {IonicModule} from "@ionic/angular";
import {IoniconChevronDownOutlineModule} from "../../../generated-icons/ionic";


@NgModule({
  declarations: [DialogCloseButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    IoniconChevronDownOutlineModule
  ],
  exports: [DialogCloseButtonComponent]
})
export class DialogCloseButtonModule {
}
