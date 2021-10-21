import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollVanishDirective} from './scroll-vanish.directive';


@NgModule({
  declarations: [
    ScrollVanishDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollVanishDirective
  ]
})
export class ScrollVanishModule {
}
