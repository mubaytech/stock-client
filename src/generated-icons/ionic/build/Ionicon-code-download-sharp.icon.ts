
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCodeDownloadSharp: {
  name: 'code_download_sharp';
  data: string;
} = {
  name: 'code_download_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="code-download-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M160 368L32 256l128-112m192 224l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" class="code-download-sharp_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-code-download-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCodeDownloadSharp.data}
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
export class IoniconCodeDownloadSharpComponent{}

@NgModule({
    declarations: [IoniconCodeDownloadSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCodeDownloadSharpComponent
    ],
})
export class IoniconCodeDownloadSharpModule {
}
