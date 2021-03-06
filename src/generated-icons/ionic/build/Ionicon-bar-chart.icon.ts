
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBarChart: {
  name: 'bar_chart';
  data: string;
} = {
  name: 'bar_chart',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bar-chart_svg__ionicon" viewBox="0 0 512 512"><path d="M480 496H48a32 32 0 01-32-32V32a16 16 0 0132 0v432h432a16 16 0 010 32z"/><path d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zm144 0h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zm143.64 0h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"/></svg>`
};


@Component({
    selector: 'app-ionicon-bar-chart',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBarChart.data}
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
export class IoniconBarChartComponent{}

@NgModule({
    declarations: [IoniconBarChartComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBarChartComponent
    ],
})
export class IoniconBarChartModule {
}
