
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWalkSharp: {
  name: 'walk_sharp';
  data: string;
} = {
  name: 'walk_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="walk-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M315.09 481.38l-56.95-115.12-45-57.56a73.11 73.11 0 01-10.16-37.17V142h15.73A40.36 40.36 0 01259 182.32v162.52" class="walk-sharp_svg ionicon-stroke-width "/><path d="M128.18 291.5v-74.77l64.95-65.1" class="walk-sharp_svg ionicon-fill-none  walk-sharp_svg__ionicon-stroke-width"/><path d="M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z"/><circle cx="259.02" cy="67.21" r="37.38"/></svg>`
};


@Component({
    selector: 'app-ionicon-walk-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconWalkSharp.data}
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
export class IoniconWalkSharpComponent{}

@NgModule({
    declarations: [IoniconWalkSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconWalkSharpComponent
    ],
})
export class IoniconWalkSharpModule {
}
