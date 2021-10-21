
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowBackSharp: {
  name: 'arrow_back_sharp';
  data: string;
} = {
  name: 'arrow_back_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-back-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M244 400L100 256l144-144M120 256h292" class="arrow-back-sharp_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-back-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowBackSharp.data}
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
export class IoniconArrowBackSharpComponent{}

@NgModule({
    declarations: [IoniconArrowBackSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowBackSharpComponent
    ],
})
export class IoniconArrowBackSharpModule {
}
