import {Pipe, PipeTransform} from '@angular/core';
import {TimeService} from '../../core/time.service';
import {map} from 'rxjs/operators';
import {NetworkService} from '../../core/network/network.service';

@Pipe({
    name: 'toNow',
})
export class ToNowPipe implements PipeTransform {

    constructor(public time: TimeService, public network: NetworkService) {

    }

    transform(date: any, prefix?: boolean, format?: any): any {
        return this.network.timeHasElapsed.pipe(
            map(() => {
                return this.time.toNow(date, format, prefix || false);
            })
        );
    }


}
