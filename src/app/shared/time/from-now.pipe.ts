import {Pipe, PipeTransform} from '@angular/core';
import {TimeService} from '../../core/time.service';
import {NetworkService} from '../../core/network/network.service';
import {map} from 'rxjs/operators';

@Pipe({
    name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {
    constructor(public time: TimeService, public network: NetworkService) {

    }

    transform(date: any, prefix?: boolean, format?: any): any {
        return this.network.timeHasElapsed.pipe(
            map(() => this.time.fromNow(date, format, prefix || false)
            )
        );
    }

}
