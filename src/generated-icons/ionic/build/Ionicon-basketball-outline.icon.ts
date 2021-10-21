
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBasketballOutline: {
  name: 'basketball_outline';
  data: string;
} = {
  name: 'basketball_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="basketball-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="192" class="basketball-outline_svg ionicon-fill-none  basketball-outline_svg ionicon-stroke-width "/><path d="M432.94 255.05a192 192 0 01-176.31-180.7M255 433.61A192 192 0 0074.29 256.69m45.95-136.45l271.52 271.52m-271.52 0l271.52-271.52" class="basketball-outline_svg__ionicon-fill-none basketball-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-basketball-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBasketballOutline.data}
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
export class IoniconBasketballOutlineComponent{}

@NgModule({
    declarations: [IoniconBasketballOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBasketballOutlineComponent
    ],
})
export class IoniconBasketballOutlineModule {
}