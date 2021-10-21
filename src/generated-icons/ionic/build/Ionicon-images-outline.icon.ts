
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconImagesOutline: {
  name: 'images_outline';
  data: string;
} = {
  name: 'images_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="images-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M432 112V96a48.14 48.14 0 00-48-48H64a48.14 48.14 0 00-48 48v256a48.14 48.14 0 0048 48h16" class="images-outline_svg ionicon-fill-none  images-outline_svg ionicon-stroke-width "/><rect width="400" height="336" x="96" y="128" class="images-outline_svg__ionicon-fill-none images-outline_svg__ionicon-stroke-width" rx="45.99" ry="45.99"/><ellipse cx="372.92" cy="219.64" class="images-outline_svg__ionicon-fill-none images-outline_svg__ionicon-stroke-width" rx="30.77" ry="30.55"/><path d="M342.15 372.17L255 285.78a30.93 30.93 0 00-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0141.46-1.87L496 402.91" class="images-outline_svg__ionicon-fill-none images-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-images-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconImagesOutline.data}
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
export class IoniconImagesOutlineComponent{}

@NgModule({
    declarations: [IoniconImagesOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconImagesOutlineComponent
    ],
})
export class IoniconImagesOutlineModule {
}
