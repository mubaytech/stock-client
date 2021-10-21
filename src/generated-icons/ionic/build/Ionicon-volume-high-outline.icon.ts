
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconVolumeHighOutline: {
  name: 'volume_high_outline';
  data: string;
} = {
  name: 'volume_high_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="volume-high-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zm194 128c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160" class="volume-high-outline_svg ionicon-fill-none  volume-high-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-volume-high-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconVolumeHighOutline.data}
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
export class IoniconVolumeHighOutlineComponent{}

@NgModule({
    declarations: [IoniconVolumeHighOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconVolumeHighOutlineComponent
    ],
})
export class IoniconVolumeHighOutlineModule {
}