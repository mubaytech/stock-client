
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudDownload: {
  name: 'cloud_download';
  data: string;
} = {
  name: 'cloud_download',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloud-download_svg__ionicon" viewBox="0 0 512 512"><path d="M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 01412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 00-41.95 52.83A16.05 16.05 0 01108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 01272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 425.42l-36.7-36.64a16 16 0 00-22.6 22.65l64 63.89a16 16 0 0022.6 0l64-63.89a16 16 0 00-22.6-22.65L272 425.42V352h-32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-cloud-download',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudDownload.data}
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
export class IoniconCloudDownloadComponent{}

@NgModule({
    declarations: [IoniconCloudDownloadComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudDownloadComponent
    ],
})
export class IoniconCloudDownloadModule {
}
