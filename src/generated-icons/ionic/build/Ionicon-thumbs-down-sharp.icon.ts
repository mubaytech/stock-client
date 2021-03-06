
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconThumbsDownSharp: {
  name: 'thumbs_down_sharp';
  data: string;
} = {
  name: 'thumbs_down_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="thumbs-down-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M56 320l156.05 12-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 004.4-1.72l129-202.34a8 8 0 016.81-3.81H496V64H378.39a48 48 0 01-15.18-2.46l-76.3-25.43a80 80 0 00-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40z"/><path d="M378.45 273.93A15.84 15.84 0 01386 272a15.93 15.93 0 00-7.51 1.91zm-40.59 69.29l-.13.22a2.53 2.53 0 01.13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62z" class="thumbs-down-sharp_svg ionicon-fill-none "/><path d="M372.66 279.16l-1 2a16.29 16.29 0 016.77-7.26 16.48 16.48 0 00-5.77 5.26z"/></svg>`
};


@Component({
    selector: 'app-ionicon-thumbs-down-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconThumbsDownSharp.data}
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
export class IoniconThumbsDownSharpComponent{}

@NgModule({
    declarations: [IoniconThumbsDownSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconThumbsDownSharpComponent
    ],
})
export class IoniconThumbsDownSharpModule {
}
