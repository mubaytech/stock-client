import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let CalendarPipe = class CalendarPipe {
    constructor(timeService) {
        this.timeService = timeService;
    }
    transform(value, withTime = false) {
        return (withTime
            ? this.timeService.fromUnix(value).calendar()
            : this.timeService.fromUnix(value).calendar()).split('à')[0];
    }
};
CalendarPipe = __decorate([
    Pipe({
        name: 'calendar'
    })
], CalendarPipe);
export { CalendarPipe };
//# sourceMappingURL=calendar.pipe.js.map