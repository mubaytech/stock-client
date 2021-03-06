
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWifiOutline: {
  name: 'wifi_outline';
  data: string;
} = {
  name: 'wifi_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="wifi-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M332.41 310.59a115 115 0 00-152.8 0m213.85-61.05a201.26 201.26 0 00-274.92 0m329.18-67.43a288 288 0 00-383.44 0" class="wifi-outline_svg ionicon-fill-none  wifi-outline_svg ionicon-stroke-width "/><path d="M256 416a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-wifi-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconWifiOutline.data}
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
export class IoniconWifiOutlineComponent{}

@NgModule({
    declarations: [IoniconWifiOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconWifiOutlineComponent
    ],
})
export class IoniconWifiOutlineModule {
}
