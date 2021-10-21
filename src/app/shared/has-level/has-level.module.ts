import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HasLevelDirective} from './has-level.directive';


@NgModule({
  declarations: [
    HasLevelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HasLevelDirective]
})
export class HasLevelModule {
}
