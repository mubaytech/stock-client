import {Pipe, PipeTransform} from '@angular/core';
import {TimeService} from "../../core/time.service";

@Pipe({
  name: 'ionDatePickerFormat'
})
export class IonDatePickerFormatPipe implements PipeTransform {

  constructor(public timeService: TimeService) {
  }

  transform(value: string, format: string): unknown {
    if (!value) {
      return null;
    }
    return this.timeService.format(value, format);
  }

}
