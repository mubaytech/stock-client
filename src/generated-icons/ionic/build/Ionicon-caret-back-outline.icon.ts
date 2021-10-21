
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretBackOutline: {
  name: 'caret_back_outline';
  data: string;
} = {
  name: 'caret_back_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-back-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-back-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretBackOutline.data}
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
export class IoniconCaretBackOutlineComponent{}

@NgModule({
    declarations: [IoniconCaretBackOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretBackOutlineComponent
    ],
})
export class IoniconCaretBackOutlineModule {
}
