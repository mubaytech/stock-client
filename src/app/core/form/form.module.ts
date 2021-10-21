import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormValidationService} from './form-validation.service';
import {FormService} from './form.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormModule {
  public static forRoot(): ModuleWithProviders<FormModule> {
    return {
      ngModule: FormModule,
      providers: [FormValidationService, FormService]
    };
  }
}
