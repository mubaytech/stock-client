import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let MomentPipe = class MomentPipe {
    constructor(time) {
        this.time = time;
    }
    transform(date, format, dateFormat) {
        return date && this.time.format(date, format, dateFormat);
    }
};
MomentPipe = __decorate([
    Pipe({
        name: 'moment'
    })
], MomentPipe);
export { MomentPipe };
//# sourceMappingURL=moment.pipe.js.map