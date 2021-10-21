
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReorderFour: {
  name: 'reorder_four';
  data: string;
} = {
  name: 'reorder_four',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="reorder-four_svg__ionicon" viewBox="0 0 512 512"><path d="M102 304h308m-308-96h308m-308-96h308M102 400h308" class="reorder-four_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-reorder-four',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReorderFour.data}
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
export class IoniconReorderFourComponent{}

@NgModule({
    declarations: [IoniconReorderFourComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReorderFourComponent
    ],
})
export class IoniconReorderFourModule {
}