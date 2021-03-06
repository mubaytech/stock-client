
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudyOutline: {
  name: 'cloudy_outline';
  data: string;
} = {
  name: 'cloudy_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloudy-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M100.18 241.19a15.93 15.93 0 0013.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0012.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88 0-54.43 43.89-80.81 84.18-86.81z" class="cloudy-outline_svg ionicon-fill-none  cloudy-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-cloudy-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudyOutline.data}
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
export class IoniconCloudyOutlineComponent{}

@NgModule({
    declarations: [IoniconCloudyOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudyOutlineComponent
    ],
})
export class IoniconCloudyOutlineModule {
}
