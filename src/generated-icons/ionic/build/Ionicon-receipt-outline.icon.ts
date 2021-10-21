
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReceiptOutline: {
  name: 'receipt_outline';
  data: string;
} = {
  name: 'receipt_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="receipt-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224" class="receipt-outline_svg ionicon-fill-none  receipt-outline_svg ionicon-stroke-width "/><path d="M480 272v112a80 80 0 01-80 80 80 80 0 01-80-80v-48H48a15.86 15.86 0 00-16 16c0 64 6.74 112 80 112h288M224 144h192m-128 80h128" class="receipt-outline_svg__ionicon-fill-none receipt-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-receipt-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReceiptOutline.data}
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
export class IoniconReceiptOutlineComponent{}

@NgModule({
    declarations: [IoniconReceiptOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReceiptOutlineComponent
    ],
})
export class IoniconReceiptOutlineModule {
}