import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
let FromNowPipe = class FromNowPipe {
    constructor(time, network) {
        this.time = time;
        this.network = network;
    }
    transform(date, prefix, format) {
        return this.network.timeHasElapsed.pipe(map(() => this.time.fromNow(date, format, prefix || false)));
    }
};
FromNowPipe = __decorate([
    Pipe({
        name: 'fromNow'
    })
], FromNowPipe);
export { FromNowPipe };
//# sourceMappingURL=from-now.pipe.js.map