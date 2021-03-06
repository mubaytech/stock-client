
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretDownCircle: {
  name: 'caret_down_circle';
  data: string;
} = {
  name: 'caret_down_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-down-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-121.57-17.77l-74.13 89.09a16 16 0 01-24.6 0l-74.13-89.09A16 16 0 01181.86 212h148.28a16 16 0 0112.29 26.23z"/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-down-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretDownCircle.data}
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
export class IoniconCaretDownCircleComponent{}

@NgModule({
    declarations: [IoniconCaretDownCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretDownCircleComponent
    ],
})
export class IoniconCaretDownCircleModule {
}
