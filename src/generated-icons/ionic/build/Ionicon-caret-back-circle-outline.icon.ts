
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretBackCircleOutline: {
  name: 'caret_back_circle_outline';
  data: string;
} = {
  name: 'caret_back_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-back-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M273.77 169.57l-89.09 74.13a16 16 0 000 24.6l89.09 74.13A16 16 0 00300 330.14V181.86a16 16 0 00-26.23-12.29z"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="caret-back-circle-outline_svg ionicon-fill-none  caret-back-circle-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-back-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretBackCircleOutline.data}
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
export class IoniconCaretBackCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconCaretBackCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretBackCircleOutlineComponent
    ],
})
export class IoniconCaretBackCircleOutlineModule {
}