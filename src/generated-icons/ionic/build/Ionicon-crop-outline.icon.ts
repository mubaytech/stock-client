
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCropOutline: {
  name: 'crop_outline';
  data: string;
} = {
  name: 'crop_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="crop-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M144 48v272a48 48 0 0048 48h272" class="crop-outline_svg ionicon-fill-none  crop-outline_svg ionicon-stroke-width "/><path d="M368 304V192a48 48 0 00-48-48H208m160 224v96M144 144H48" class="crop-outline_svg__ionicon-fill-none crop-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-crop-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCropOutline.data}
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
export class IoniconCropOutlineComponent{}

@NgModule({
    declarations: [IoniconCropOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCropOutlineComponent
    ],
})
export class IoniconCropOutlineModule {
}
