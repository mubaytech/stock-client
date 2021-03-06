
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBarcodeSharp: {
  name: 'barcode_sharp';
  data: string;
} = {
  name: 'barcode_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="barcode-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33m272-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128" class="barcode-sharp_svg ionicon-fill-none  barcode-sharp_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-barcode-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBarcodeSharp.data}
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
export class IoniconBarcodeSharpComponent{}

@NgModule({
    declarations: [IoniconBarcodeSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBarcodeSharpComponent
    ],
})
export class IoniconBarcodeSharpModule {
}
