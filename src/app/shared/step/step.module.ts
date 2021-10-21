import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepTextComponent} from './step-text/step-text.component';
import {StepIconComponent} from './step-icon/step-icon.component';
import {StepComponent} from './step.component';


@NgModule({
  declarations: [StepTextComponent, StepIconComponent, StepComponent],
  imports: [
    CommonModule
  ],
  exports: [StepTextComponent, StepIconComponent, StepComponent]
})
export class StepModule {
}
