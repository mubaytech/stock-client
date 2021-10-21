import {FormGroup} from '@angular/forms';
import {IFormGroup} from '@rxweb/types';

export function IS_FORM_VALID(form: FormGroup, updateValueOptions: {
  emitEvent?: boolean;
  onlySelf?: boolean;
} = {}) {
  if (!form.valid) {
    form.markAllAsTouched();
    form.updateValueAndValidity(updateValueOptions);
    return false;
  }
  return true;
}

export function UPDATE_VALUE_AND_VALIDITY(form: FormGroup | IFormGroup<any>) {
  for (const control of Object.values(form.controls)) {
    control.updateValueAndValidity();
  }
}
