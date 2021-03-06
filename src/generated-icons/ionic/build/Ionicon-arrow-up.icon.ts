
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowUp: {
  name: 'arrow_up';
  data: string;
} = {
  name: 'arrow_up',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-up_svg__ionicon" viewBox="0 0 512 512"><path d="M112 244l144-144 144 144M256 120v292" class="arrow-up_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-up',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowUp.data}
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
export class IoniconArrowUpComponent{}

@NgModule({
    declarations: [IoniconArrowUpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowUpComponent
    ],
})
export class IoniconArrowUpModule {
}
