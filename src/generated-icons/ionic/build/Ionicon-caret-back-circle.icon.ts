
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretBackCircle: {
  name: 'caret_back_circle';
  data: string;
} = {
  name: 'caret_back_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-back-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm252-74.14v148.28a16 16 0 01-26.23 12.29l-89.09-74.13a16 16 0 010-24.6l89.09-74.13A16 16 0 01300 181.86z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-back-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretBackCircle.data}
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
export class IoniconCaretBackCircleComponent{}

@NgModule({
    declarations: [IoniconCaretBackCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretBackCircleComponent
    ],
})
export class IoniconCaretBackCircleModule {
}