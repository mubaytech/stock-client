
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretUpCircleOutline: {
  name: 'caret_up_circle_outline';
  data: string;
} = {
  name: 'caret_up_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-up-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M342.43 273.77l-74.13-89.09a16 16 0 00-24.6 0l-74.13 89.09A16 16 0 00181.86 300h148.28a16 16 0 0012.29-26.23z"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="caret-up-circle-outline_svg ionicon-fill-none  caret-up-circle-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-caret-up-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCaretUpCircleOutline.data}
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
export class IoniconCaretUpCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconCaretUpCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCaretUpCircleOutlineComponent
    ],
})
export class IoniconCaretUpCircleOutlineModule {
}
