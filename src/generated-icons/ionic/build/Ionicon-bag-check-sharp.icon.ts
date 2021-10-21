
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBagCheckSharp: {
  name: 'bag_check_sharp';
  data: string;
} = {
  name: 'bag_check_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bag-check-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm50.81 252.12l-61.37-71.72 24.31-20.81L230 350.91l87.51-109.4 25 20z"/></svg>`
};


@Component({
    selector: 'app-ionicon-bag-check-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBagCheckSharp.data}
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
export class IoniconBagCheckSharpComponent{}

@NgModule({
    declarations: [IoniconBagCheckSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBagCheckSharpComponent
    ],
})
export class IoniconBagCheckSharpModule {
}
