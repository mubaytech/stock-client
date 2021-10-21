
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPricetagSharp: {
  name: 'pricetag_sharp';
  data: string;
} = {
  name: 'pricetag_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="pricetag-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M304 32L16 320l176 176 288-288V32zm80 128a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-pricetag-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPricetagSharp.data}
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
export class IoniconPricetagSharpComponent{}

@NgModule({
    declarations: [IoniconPricetagSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPricetagSharpComponent
    ],
})
export class IoniconPricetagSharpModule {
}
