
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconScanCircleSharp: {
  name: 'scan_circle_sharp';
  data: string;
} = {
  name: 'scan_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="scan-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-24 320h-44a44.05 44.05 0 01-44-44v-44h32v44a12 12 0 0012 12h44zm0-192h-44a12 12 0 00-12 12v44h-32v-44a44.05 44.05 0 0144-44h44zm136 148a44.05 44.05 0 01-44 44h-44v-32h44a12 12 0 0012-12v-44h32zm0-92h-32v-44a12 12 0 00-12-12h-44v-32h44a44.05 44.05 0 0144 44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-scan-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconScanCircleSharp.data}
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
export class IoniconScanCircleSharpComponent{}

@NgModule({
    declarations: [IoniconScanCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconScanCircleSharpComponent
    ],
})
export class IoniconScanCircleSharpModule {
}
