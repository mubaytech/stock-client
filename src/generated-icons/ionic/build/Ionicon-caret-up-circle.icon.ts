
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretUpCircle: {
  name: 'caret_up_circle';
  data: string;
} = {
  name: 'caret_up_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-up-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm74.14 252H181.86a16 16 0 01-12.29-26.23l74.13-89.09a16 16 0 0124.6 0l74.13 89.09A16 16 0 01330.14 300z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-up-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretUpCircle.data}
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
export class IoniconCaretUpCircleComponent{}

@NgModule({
    declarations: [IoniconCaretUpCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretUpCircleComponent
    ],
})
export class IoniconCaretUpCircleModule {
}