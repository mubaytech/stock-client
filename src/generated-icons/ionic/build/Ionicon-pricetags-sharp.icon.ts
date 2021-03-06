
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPricetagsSharp: {
  name: 'pricetags_sharp';
  data: string;
} = {
  name: 'pricetags_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="pricetags-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z"/><path d="M480 64v144L216.9 471.1 242 496l270-272V64h-32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-pricetags-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPricetagsSharp.data}
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
export class IoniconPricetagsSharpComponent{}

@NgModule({
    declarations: [IoniconPricetagsSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPricetagsSharpComponent
    ],
})
export class IoniconPricetagsSharpModule {
}
