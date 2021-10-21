
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloudDoneOutline: {
  name: 'cloud_done_outline';
  data: string;
} = {
  name: 'cloud_done_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cloud-done-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z" class="cloud-done-outline_svg ionicon-fill-none  cloud-done-outline_svg ionicon-stroke-width "/><path d="M317 208L209.2 336 163 284.8" class="cloud-done-outline_svg__ionicon-fill-none cloud-done-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-cloud-done-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCloudDoneOutline.data}
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
export class IoniconCloudDoneOutlineComponent{}

@NgModule({
    declarations: [IoniconCloudDoneOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCloudDoneOutlineComponent
    ],
})
export class IoniconCloudDoneOutlineModule {
}
