
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconScanOutline: {
  name: 'scan_outline';
  data: string;
} = {
  name: 'scan_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="scan-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M336 448h56a56 56 0 0056-56v-56m0-160v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56m0-160v-56a56 56 0 0156-56h56" class="scan-outline_svg ionicon-fill-none  scan-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-scan-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconScanOutline.data}
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
export class IoniconScanOutlineComponent{}

@NgModule({
    declarations: [IoniconScanOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconScanOutlineComponent
    ],
})
export class IoniconScanOutlineModule {
}
