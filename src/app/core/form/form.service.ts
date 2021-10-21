import {Injectable} from '@angular/core';
import {IFormBuilder} from '@rxweb/types';
import {FormBuilder} from '@angular/forms';
import {INPUT_MASKS} from "./form-validation.service";

@Injectable()
export class FormService {
  public formBuilder: IFormBuilder
  inputMasks = INPUT_MASKS;

  constructor(
    formBuilder: FormBuilder,
  ) {
    this.formBuilder = formBuilder;
  }
}
