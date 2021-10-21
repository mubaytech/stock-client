
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNavigateCircleSharp: {
  name: 'navigate_circle_sharp';
  data: string;
} = {
  name: 'navigate_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="navigate-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48A208.23 208.23 0 0048 256c0 114.68 93.31 208 208 208a208.23 208.23 0 00208-208c0-114.69-93.31-208-208-208zm-8 361V264H103l259-114.11z"/></svg>`
};


@Component({
    selector: 'app-ionicon-navigate-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNavigateCircleSharp.data}
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
export class IoniconNavigateCircleSharpComponent{}

@NgModule({
    declarations: [IoniconNavigateCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNavigateCircleSharpComponent
    ],
})
export class IoniconNavigateCircleSharpModule {
}
