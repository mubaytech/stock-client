
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSnowOutline: {
  name: 'snow_outline';
  data: string;
} = {
  name: 'snow_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="snow-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 32v448m57.72-400A111.47 111.47 0 01256 96a111.47 111.47 0 01-57.72-16m0 352a112.11 112.11 0 01115.44 0m136.27-288L62.01 368m375.26-150a112.09 112.09 0 01-57.71-100M74.73 294a112.09 112.09 0 0157.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0057.71-100m304.83 176a112.09 112.09 0 00-57.71 100" class="snow-outline_svg ionicon-fill-none  snow-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-snow-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSnowOutline.data}
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
export class IoniconSnowOutlineComponent{}

@NgModule({
    declarations: [IoniconSnowOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSnowOutlineComponent
    ],
})
export class IoniconSnowOutlineModule {
}