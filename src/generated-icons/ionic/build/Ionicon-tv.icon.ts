
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTv: {
  name: 'tv';
  data: string;
} = {
  name: 'tv',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="tv_svg__ionicon" viewBox="0 0 512 512"><path d="M447.86 384H64.14A48.2 48.2 0 0116 335.86V128.14A48.2 48.2 0 0164.14 80h383.72A48.2 48.2 0 01496 128.14v207.72A48.2 48.2 0 01447.86 384z"/><path d="M128 416h256" class="tv_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-tv',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTv.data}
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
export class IoniconTvComponent{}

@NgModule({
    declarations: [IoniconTvComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTvComponent
    ],
})
export class IoniconTvModule {
}