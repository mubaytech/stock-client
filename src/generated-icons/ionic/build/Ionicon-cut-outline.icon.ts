
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCutOutline: {
  name: 'cut_outline';
  data: string;
} = {
  name: 'cut_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cut-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="104" cy="152" r="56" class="cut-outline_svg ionicon-fill-none  cut-outline_svg ionicon-stroke-width "/><circle cx="104" cy="360" r="56" class="cut-outline_svg__ionicon-fill-none cut-outline_svg__ionicon-stroke-width"/><path d="M157 175l-11 15 37 15s3.46-6.42 7-10zM154.17 334.43L460 162c-2.5-6.7-28-12-64-4-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82zm190.3-56.19L295 306.67c14.23 6.74 65.54 33.27 117 36.33 14.92.89 30 .39 39-6z" class="cut-outline_svg__ionicon-fill-none cut-outline_svg__ionicon-stroke-width"/><circle cx="256" cy="240" r="32" class="cut-outline_svg__ionicon-fill-none cut-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-cut-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCutOutline.data}
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
export class IoniconCutOutlineComponent{}

@NgModule({
    declarations: [IoniconCutOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCutOutlineComponent
    ],
})
export class IoniconCutOutlineModule {
}
