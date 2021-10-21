import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContextMenuPopupComponent} from "./context-menu-popup.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [ContextMenuPopupComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ContextMenuPopupComponent
  ]
})
export class ContextMenuPopupModule {
}
