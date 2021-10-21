
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLocateOutline: {
  name: 'locate_outline';
  data: string;
} = {
  name: 'locate_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="locate-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 96V56m0 400v-40" class="locate-outline_svg ionicon-fill-none "/><path d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z" class="locate-outline_svg__ionicon-fill-none locate-outline_svg ionicon-stroke-width "/><path d="M416 256h40m-400 0h40" class="locate-outline_svg__ionicon-fill-none"/></svg>`
};


@Component({
    selector: 'app-ionicon-locate-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLocateOutline.data}
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
export class IoniconLocateOutlineComponent{}

@NgModule({
    declarations: [IoniconLocateOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLocateOutlineComponent
    ],
})
export class IoniconLocateOutlineModule {
}
