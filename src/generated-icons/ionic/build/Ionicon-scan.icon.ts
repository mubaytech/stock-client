
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconScan: {
  name: 'scan';
  data: string;
} = {
  name: 'scan',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="scan_svg__ionicon" viewBox="0 0 512 512"><path d="M342 444h46a56 56 0 0056-56v-46m0-172v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46m0-172v-46a56 56 0 0156-56h46" class="scan_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-scan',
    template: `
    <div class="app-ionic-icon">
        ${IoniconScan.data}
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
export class IoniconScanComponent{}

@NgModule({
    declarations: [IoniconScanComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconScanComponent
    ],
})
export class IoniconScanModule {
}
