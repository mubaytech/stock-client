
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconVolumeLow: {
  name: 'volume_low';
  data: string;
} = {
  name: 'volume_low',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="volume-low_svg__ionicon" viewBox="0 0 512 512"><path d="M296 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H120a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01320 119.83v272.34a24 24 0 01-24 24zM384 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01384 336z"/></svg>`
};


@Component({
    selector: 'app-ionicon-volume-low',
    template: `
    <div class="app-ionic-icon">
        ${IoniconVolumeLow.data}
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
export class IoniconVolumeLowComponent{}

@NgModule({
    declarations: [IoniconVolumeLowComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconVolumeLowComponent
    ],
})
export class IoniconVolumeLowModule {
}
