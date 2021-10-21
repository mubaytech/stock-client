import {Pipe, PipeTransform} from '@angular/core';
import {TimeService} from '../../core/time.service';

@Pipe({
    name: 'moment'
})
export class MomentPipe implements PipeTransform {
    constructor(public time: TimeService) {

    }

    transform(date?: any, format?: any, dateFormat?: any): any {
        return date && this.time.format(date, format, dateFormat);
    }
}
