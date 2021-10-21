
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretDownCircleSharp: {
  name: 'caret_down_circle_sharp';
  data: string;
} = {
  name: 'caret_down_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-down-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-99.73-44L256 342.09 147.73 212z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-down-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretDownCircleSharp.data}
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
export class IoniconCaretDownCircleSharpComponent{}

@NgModule({
    declarations: [IoniconCaretDownCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretDownCircleSharpComponent
    ],
})
export class IoniconCaretDownCircleSharpModule {
}