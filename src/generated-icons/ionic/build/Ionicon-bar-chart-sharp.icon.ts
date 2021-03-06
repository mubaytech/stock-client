
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBarChartSharp: {
  name: 'bar_chart_sharp';
  data: string;
} = {
  name: 'bar_chart_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bar-chart-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M496 496H16V16h32v448h448v32z"/><path d="M192 432H80V208h112zm144 0H224V160h112zm143.64 0h-112V96h112z"/></svg>`
};


@Component({
    selector: 'app-ionicon-bar-chart-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBarChartSharp.data}
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
export class IoniconBarChartSharpComponent{}

@NgModule({
    declarations: [IoniconBarChartSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBarChartSharpComponent
    ],
})
export class IoniconBarChartSharpModule {
}
