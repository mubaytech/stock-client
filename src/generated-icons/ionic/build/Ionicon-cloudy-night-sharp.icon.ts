
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudyNightSharp: {
  name: 'cloudy_night_sharp';
  data: string;
} = {
  name: 'cloudy_night_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloudy-night-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 14.55-11.13 33.41-18.87 53.2-22 6.06-36.92 21.92-68.53 46.29-92A139.82 139.82 0 01232 160c32.33 0 62.15 10.65 86.24 30.79a142.41 142.41 0 0140.83 57.05c27.18 4.48 51.59 15.68 69.56 32.08C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm41.55-260.07c26.5 6.93 50 19.32 68.65 36.34q3.89 3.56 7.47 7.34c25.41-18.4 45.47-44.92 54.33-71.38-16.24 7.07-35.31 9.85-54.15 9.85-73.42 0-115.93-42.51-115.93-115.93 0-18.84 2.78-37.91 9.85-54.15-40.41 13.53-81 53.19-92.52 98.13a162.61 162.61 0 0179.52 36.12 173 173 0 0142.78 53.68z"/></svg>`
};


@Component({
    selector: 'app-ionicon-cloudy-night-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudyNightSharp.data}
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
export class IoniconCloudyNightSharpComponent{}

@NgModule({
    declarations: [IoniconCloudyNightSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudyNightSharpComponent
    ],
})
export class IoniconCloudyNightSharpModule {
}
