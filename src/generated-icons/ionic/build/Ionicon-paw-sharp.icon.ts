
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPawSharp: {
  name: 'paw_sharp';
  data: string;
} = {
  name: 'paw_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="paw-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12-17.23-10.71-33.5-20.83-44.14-39-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 00-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464 448 430.85 448 390.11a78.3 78.3 0 00-5.2-28.29z"/><ellipse cx="72" cy="216" rx="56" ry="72"/><ellipse cx="184" cy="120" rx="56" ry="72"/><ellipse cx="328" cy="120" rx="56" ry="72"/><ellipse cx="440" cy="216" rx="56" ry="72"/></svg>`
};


@Component({
    selector: 'app-ionicon-paw-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPawSharp.data}
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
export class IoniconPawSharpComponent{}

@NgModule({
    declarations: [IoniconPawSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPawSharpComponent
    ],
})
export class IoniconPawSharpModule {
}
