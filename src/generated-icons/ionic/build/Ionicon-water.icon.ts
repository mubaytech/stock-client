
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWater: {
  name: 'water';
  data: string;
} = {
  name: 'water',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="water_svg__ionicon" viewBox="0 0 512 512"><path d="M265.12 60.12a12 12 0 00-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88zM272 412a12 12 0 01-11.34-16 11.89 11.89 0 0111.41-8A60.06 60.06 0 00332 328.07a11.89 11.89 0 018-11.41A12 12 0 01356 328a84.09 84.09 0 01-84 84z"/></svg>`
};


@Component({
    selector: 'app-ionicon-water',
    template: `
    <div class="app-ionic-icon">
        ${IoniconWater.data}
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
export class IoniconWaterComponent{}

@NgModule({
    declarations: [IoniconWaterComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconWaterComponent
    ],
})
export class IoniconWaterModule {
}
