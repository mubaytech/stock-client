
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowDownCircleSharp: {
  name: 'arrow_down_circle_sharp';
  data: string;
} = {
  name: 'arrow_down_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-down-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-80.09-224L240 303.58V154h32v149.58L336.09 240l22.54 22.71L256 364.54 153.37 262.7z"/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-down-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowDownCircleSharp.data}
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
export class IoniconArrowDownCircleSharpComponent{}

@NgModule({
    declarations: [IoniconArrowDownCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowDownCircleSharpComponent
    ],
})
export class IoniconArrowDownCircleSharpModule {
}
