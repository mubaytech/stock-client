
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCrop: {
  name: 'crop';
  data: string;
} = {
  name: 'crop',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="crop_svg__ionicon" viewBox="0 0 512 512"><path d="M458 346H192a26 26 0 01-26-26V54a22 22 0 00-44 0v68H54a22 22 0 000 44h68v154a70.08 70.08 0 0070 70h154v68a22 22 0 0044 0v-68h68a22 22 0 000-44z"/><path d="M214 166h106a26 26 0 0126 26v106a22 22 0 0044 0V192a70.08 70.08 0 00-70-70H214a22 22 0 000 44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-crop',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCrop.data}
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
export class IoniconCropComponent{}

@NgModule({
    declarations: [IoniconCropComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCropComponent
    ],
})
export class IoniconCropModule {
}