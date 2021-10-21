
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCalendarNumberOutline: {
  name: 'calendar_number_outline';
  data: string;
} = {
  name: 'calendar_number_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="calendar-number-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="416" height="384" x="48" y="80" class="calendar-number-outline_svg ionicon-fill-none  calendar-number-outline_svg ionicon-stroke-width " rx="48"/><path d="M128 48v32m256-32v32m80 80H48m256 100l43.42-32H352v168m-160.13-89.37c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" class="calendar-number-outline_svg__ionicon-fill-none calendar-number-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-calendar-number-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCalendarNumberOutline.data}
    </div>
    `,
    styles: [`
    :host{
        display: block;
        color: inherit;
        font-size: inherit;
    }
    svg{
        width: 1em;
        height: 1em;
        contain: strict;
        fill: currentcolor;
        box-sizing: content-box !important;
        font-size: inherit;
        line-height: inherit;
        pointer-events: none;
    }
    .ionicon-stroke-width {
        stroke-width: 32px;
    }
    .ionicon-fill-none {
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 48;
        fill: none;
        stroke: currentColor;
    }

    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IoniconCalendarNumberOutlineComponent{}

@NgModule({
    declarations: [IoniconCalendarNumberOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCalendarNumberOutlineComponent
    ],
})
export class IoniconCalendarNumberOutlineModule {
}
