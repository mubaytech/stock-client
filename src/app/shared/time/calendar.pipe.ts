import {Pipe, PipeTransform} from '@angular/core';
import {TimeService} from '../../core/time.service';

@Pipe({
    name: 'calendar'
})
export class CalendarPipe implements PipeTransform {
    constructor(public timeService: TimeService) {
    }

    transform(value: string, withTime = false): unknown {
        return (withTime
            ? this.timeService.fromUnix(value).calendar()
            : this.timeService.fromUnix(value).calendar()).split('à')[0];
    }

}
