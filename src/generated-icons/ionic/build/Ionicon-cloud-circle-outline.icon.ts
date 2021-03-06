
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudCircleOutline: {
  name: 'cloud_circle_outline';
  data: string;
} = {
  name: 'cloud_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloud-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M333.88 240.59a8 8 0 01-6.66-6.66C320.68 192.78 290.82 168 256 168c-32.37 0-53.93 21.22-62.48 43.58a7.92 7.92 0 01-6.16 5c-27.67 4.35-50.82 22.56-51.35 54.3-.52 31.53 25.51 57.11 57 57.11H326c27.5 0 50-13.72 50-44 0-27.22-22-40.41-42.12-43.4z"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="cloud-circle-outline_svg ionicon-fill-none  cloud-circle-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-cloud-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudCircleOutline.data}
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
export class IoniconCloudCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconCloudCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudCircleOutlineComponent
    ],
})
export class IoniconCloudCircleOutlineModule {
}
