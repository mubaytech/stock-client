
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCalendarClearSharp: {
  name: 'calendar_clear_sharp';
  data: string;
} = {
  name: 'calendar_clear_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="calendar-clear-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M32 456a24 24 0 0024 24h400a24 24 0 0024-24V192H32zM480 87.77A23.8 23.8 0 00456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 00-24 23.77V144h448z"/></svg>`
};


@Component({
    selector: 'app-ionicon-calendar-clear-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCalendarClearSharp.data}
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
export class IoniconCalendarClearSharpComponent{}

@NgModule({
    declarations: [IoniconCalendarClearSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCalendarClearSharpComponent
    ],
})
export class IoniconCalendarClearSharpModule {
}