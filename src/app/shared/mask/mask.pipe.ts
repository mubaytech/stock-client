import {Pipe, PipeTransform} from '@angular/core';
import Inputmask from 'inputmask';
import {INPUT_MASKS} from "../../core/form/form-validation.service";


@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string | number, mask: string | 'currency' | keyof (typeof INPUT_MASKS)): string {
    // console.log(INPUT_MASKS[mask])
    const val = (value ? (value + '') : '').trim();
    const masked = (Inputmask.format(val, mask === 'currency' ? INPUT_MASKS.currencyOption : {
      mask: INPUT_MASKS[mask]
    }))
    return (Inputmask.isValid(masked, mask === 'currency' ? INPUT_MASKS.currencyOption : {
      mask: INPUT_MASKS[mask]
    })) ? masked : val;
  }

}

