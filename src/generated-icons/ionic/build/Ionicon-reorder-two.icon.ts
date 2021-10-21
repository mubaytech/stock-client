
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReorderTwo: {
  name: 'reorder_two';
  data: string;
} = {
  name: 'reorder_two',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="reorder-two_svg__ionicon" viewBox="0 0 512 512"><path d="M118 304h276m-276-96h276" class="reorder-two_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-reorder-two',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReorderTwo.data}
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
export class IoniconReorderTwoComponent{}

@NgModule({
    declarations: [IoniconReorderTwoComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReorderTwoComponent
    ],
})
export class IoniconReorderTwoModule {
}
