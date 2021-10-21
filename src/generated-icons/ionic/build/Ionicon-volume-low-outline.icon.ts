
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconVolumeLowOutline: {
  name: 'volume_low_outline';
  data: string;
} = {
  name: 'volume_low_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="volume-low-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M189.65 192H120a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61zM384 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64" class="volume-low-outline_svg ionicon-fill-none  volume-low-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-volume-low-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconVolumeLowOutline.data}
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
export class IoniconVolumeLowOutlineComponent{}

@NgModule({
    declarations: [IoniconVolumeLowOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconVolumeLowOutlineComponent
    ],
})
export class IoniconVolumeLowOutlineModule {
}