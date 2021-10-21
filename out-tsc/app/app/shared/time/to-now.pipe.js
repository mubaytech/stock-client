import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
let ToNowPipe = class ToNowPipe {
    constructor(time, network) {
        this.time = time;
        this.network = network;
    }
    transform(date, prefix, format) {
        return this.network.timeHasElapsed.pipe(map(() => {
            return this.time.toNow(date, format, prefix || false);
        }));
    }
};
ToNowPipe = __decorate([
    Pipe({
        name: 'toNow',
    })
], ToNowPipe);
export { ToNowPipe };
//# sourceMappingURL=to-now.pipe.js.map