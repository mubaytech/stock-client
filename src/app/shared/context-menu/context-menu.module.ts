import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContextMenuDirective} from './context-menu.directive';
import {ContextMenuComponent} from "./context-menu.component";
import {ContextMenuPopupModule} from "./context-menu-popup/context-menu-popup.module";
import { ContextMenuContentDirective } from './context-menu-content.directive';


@NgModule({
  declarations: [
    ContextMenuDirective,
    ContextMenuComponent,
    ContextMenuContentDirective,

  ],
  imports: [
    CommonModule,
    ContextMenuPopupModule
  ], exports: [
    ContextMenuComponent,
    ContextMenuDirective,
    ContextMenuContentDirective,

  ]
})
export class ContextMenuModule {
}
