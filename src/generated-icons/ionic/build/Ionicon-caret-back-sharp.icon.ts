
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretBackSharp: {
  name: 'caret_back_sharp';
  data: string;
} = {
  name: 'caret_back_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-back-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M368 64L144 256l224 192V64z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-back-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretBackSharp.data}
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
export class IoniconCaretBackSharpComponent{}

@NgModule({
    declarations: [IoniconCaretBackSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretBackSharpComponent
    ],
})
export class IoniconCaretBackSharpModule {
}
