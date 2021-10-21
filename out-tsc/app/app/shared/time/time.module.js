import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPipe } from './calendar.pipe';
import { FromNowPipe } from './from-now.pipe';
import { MomentPipe } from './moment.pipe';
import { NowPipe } from './now.pipe';
import { ToNowPipe } from './to-now.pipe';
let TimeModule = class TimeModule {
};
TimeModule = __decorate([
    NgModule({
        declarations: [CalendarPipe, FromNowPipe, MomentPipe, NowPipe, ToNowPipe],
        imports: [
            CommonModule
        ],
        exports: [
            CalendarPipe, FromNowPipe, MomentPipe, NowPipe, ToNowPipe
        ],
    })
], TimeModule);
export { TimeModule };
//# sourceMappingURL=time.module.js.map