
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudDoneSharp: {
  name: 'cloud_done_sharp';
  data: string;
} = {
  name: 'cloud_done_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloud-done-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M414.25 225.36c-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 00256 80c-35.5 0-68.24 11.69-94.68 33.8a156.42 156.42 0 00-45.22 63.61c-30.26 4.81-57.45 17.18-77.38 35.37C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64zm-204.63 135l-69.22-76.7 23.76-21.44 44.62 49.46 106.29-126.2 24.47 20.61z"/></svg>`
};


@Component({
    selector: 'app-ionicon-cloud-done-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudDoneSharp.data}
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
export class IoniconCloudDoneSharpComponent{}

@NgModule({
    declarations: [IoniconCloudDoneSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudDoneSharpComponent
    ],
})
export class IoniconCloudDoneSharpModule {
}