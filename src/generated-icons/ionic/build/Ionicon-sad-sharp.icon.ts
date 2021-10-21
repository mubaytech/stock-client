
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSadSharp: {
  name: 'sad_sharp';
  data: string;
} = {
  name: 'sad_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="sad-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM328 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-144 0a24 24 0 11-24 24 23.94 23.94 0 0124-24zm72 80c45.42 0 83.75 29.49 95.72 69.83 1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288z"/></svg>`
};


@Component({
    selector: 'app-ionicon-sad-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSadSharp.data}
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
export class IoniconSadSharpComponent{}

@NgModule({
    declarations: [IoniconSadSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSadSharpComponent
    ],
})
export class IoniconSadSharpModule {
}