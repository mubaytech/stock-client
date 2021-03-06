
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowForwardCircleOutline: {
  name: 'arrow_forward_circle_outline';
  data: string;
} = {
  name: 'arrow_forward_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-forward-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M262.62 336L342 256l-79.38-80m68.35 80H170" class="arrow-forward-circle-outline_svg ionicon-fill-none  arrow-forward-circle-outline_svg ionicon-stroke-width "/><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" class="arrow-forward-circle-outline_svg__ionicon-fill-none arrow-forward-circle-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-forward-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowForwardCircleOutline.data}
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
export class IoniconArrowForwardCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconArrowForwardCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowForwardCircleOutlineComponent
    ],
})
export class IoniconArrowForwardCircleOutlineModule {
}
