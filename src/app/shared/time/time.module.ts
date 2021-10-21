import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarPipe} from './calendar.pipe';
import {FromNowPipe} from './from-now.pipe';
import {MomentPipe} from './moment.pipe';
import {NowPipe} from './now.pipe';
import {ToNowPipe} from './to-now.pipe';


@NgModule({
    declarations: [CalendarPipe, FromNowPipe, MomentPipe, NowPipe, ToNowPipe],
    imports: [
        CommonModule
    ],
    exports: [
        CalendarPipe, FromNowPipe, MomentPipe, NowPipe, ToNowPipe
    ],
})
export class TimeModule {
}
