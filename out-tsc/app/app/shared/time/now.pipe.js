import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let NowPipe = class NowPipe {
    constructor(time) {
        this.time = time;
    }
    transform(format, ...args) {
        return this.time.moment().format(format);
    }
};
NowPipe = __decorate([
    Pipe({
        name: 'now'
    })
], NowPipe);
export { NowPipe };
//# sourceMappingURL=now.pipe.js.map