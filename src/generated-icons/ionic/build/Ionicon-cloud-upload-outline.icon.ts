
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudUploadOutline: {
  name: 'cloud_upload_outline';
  data: string;
} = {
  name: 'cloud_upload_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloud-upload-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56" class="cloud-upload-outline_svg ionicon-fill-none  cloud-upload-outline_svg ionicon-stroke-width "/><path d="M320 255.79l-64-64-64 64m64 192.42V207.79" class="cloud-upload-outline_svg__ionicon-fill-none cloud-upload-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-cloud-upload-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudUploadOutline.data}
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
export class IoniconCloudUploadOutlineComponent{}

@NgModule({
    declarations: [IoniconCloudUploadOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudUploadOutlineComponent
    ],
})
export class IoniconCloudUploadOutlineModule {
}
