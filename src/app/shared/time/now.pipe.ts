import {Pipe, PipeTransform} from '@angular/core';
import {TimeService} from '../../core/time.service';

@Pipe({
    name: 'now'
})
export class NowPipe implements PipeTransform {
    constructor(public time: TimeService) {

    }

    transform(format: string, ...args: unknown[]): unknown {
        return this.time.moment().format(format);
    }

}
