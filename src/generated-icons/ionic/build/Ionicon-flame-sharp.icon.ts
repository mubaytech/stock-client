
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFlameSharp: {
  name: 'flame_sharp';
  data: string;
} = {
  name: 'flame_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="flame-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M394.24 197.56a300.67 300.67 0 00-53.38-90C301.2 61.65 240 32 192 32c19 70-14.36 117.12-44.79 163.77C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.76-122.44zM288.33 418.69C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 6.48-14.07 14.66-27.22 15.11-44.49 11.3 5.88 23.67 16.91 34.54 31.28 18.17 24 29 52.42 29 76 .01 22.23-5.41 39.76-15.66 50.68z"/></svg>`
};


@Component({
    selector: 'app-ionicon-flame-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFlameSharp.data}
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
export class IoniconFlameSharpComponent{}

@NgModule({
    declarations: [IoniconFlameSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFlameSharpComponent
    ],
})
export class IoniconFlameSharpModule {
}