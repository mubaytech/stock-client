
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAperture: {
  name: 'aperture';
  data: string;
} = {
  name: 'aperture',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="aperture_svg__ionicon" viewBox="0 0 512 512"><path d="M250.54 129.17l-67.8-67.8A209.65 209.65 0 0086.32 136h161.4a4 4 0 002.82-6.83zM167.72 168H67.63a207.34 207.34 0 00-16.15 125.9l119.06-119.07a4 4 0 00-2.82-6.83zm176.28-.28V67.56a207.82 207.82 0 00-125.89-16.08l119.06 119.06a4 4 0 006.83-2.82zm116.52 50.38L341.46 337.17a4 4 0 002.82 6.83h100.09a207.34 207.34 0 0016.15-125.9zm-77.69 32.44l67.83-67.82A209.08 209.08 0 00376 86.2v161.52a4 4 0 006.83 2.82zm-161.15 91.23a8 8 0 005.54 2.23h59.66a8 8 0 005.7-2.39l49.18-50a8 8 0 002.3-5.62l-.06-60.81a8 8 0 00-2.38-5.69l-50-49.25a8 8 0 00-5.63-2.3l-60.84.06a8 8 0 00-5.69 2.38l-49.25 50a8 8 0 00-2.3 5.63l.06 60.78a8 8 0 002.45 5.76zm39.78 41.06l67.8 67.8A209.65 209.65 0 00425.68 376h-161.4a4 4 0 00-2.82 6.83zM168 344.28v100.16a207.82 207.82 0 00125.89 16.08L174.83 341.46a4 4 0 00-6.83 2.82zm-38.83-82.82l-67.83 67.83A209.1 209.1 0 00136 425.8V264.28a4 4 0 00-6.83-2.82z"/></svg>`
};


@Component({
    selector: 'app-ionicon-aperture',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAperture.data}
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
export class IoniconApertureComponent{}

@NgModule({
    declarations: [IoniconApertureComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconApertureComponent
    ],
})
export class IoniconApertureModule {
}