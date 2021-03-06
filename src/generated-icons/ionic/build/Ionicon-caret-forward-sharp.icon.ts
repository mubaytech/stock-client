
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretForwardSharp: {
  name: 'caret_forward_sharp';
  data: string;
} = {
  name: 'caret_forward_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-forward-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M144 448l224-192L144 64v384z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-forward-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretForwardSharp.data}
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
export class IoniconCaretForwardSharpComponent{}

@NgModule({
    declarations: [IoniconCaretForwardSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretForwardSharpComponent
    ],
})
export class IoniconCaretForwardSharpModule {
}
