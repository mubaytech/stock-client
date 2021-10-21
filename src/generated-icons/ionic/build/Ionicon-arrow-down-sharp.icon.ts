
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowDownSharp: {
  name: 'arrow_down_sharp';
  data: string;
} = {
  name: 'arrow_down_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-down-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M112 268l144 144 144-144M256 392V100" class="arrow-down-sharp_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-down-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowDownSharp.data}
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
export class IoniconArrowDownSharpComponent{}

@NgModule({
    declarations: [IoniconArrowDownSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowDownSharpComponent
    ],
})
export class IoniconArrowDownSharpModule {
}
