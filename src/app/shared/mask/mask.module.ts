import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaskDirective} from './mask.directive';
import {MaskPipe} from './mask.pipe';
import {NG_VALIDATORS} from "@angular/forms";


@NgModule({
  declarations: [MaskDirective, MaskPipe],
  imports: [
    CommonModule
  ],
  exports: [MaskDirective, MaskPipe],

})
export class MaskModule {
}
