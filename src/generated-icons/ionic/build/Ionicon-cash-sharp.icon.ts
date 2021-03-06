
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCashSharp: {
  name: 'cash_sharp';
  data: string;
} = {
  name: 'cash_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cash-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M48 368h416v32H48zm32 48h352v32H80zm400-240a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96h16v-64zM256 304a96 96 0 1196-96 96.11 96.11 0 01-96 96z"/><path d="M96 80V64H16v80h16a64.07 64.07 0 0064-64zM32 272H16v80h80v-16a64.07 64.07 0 00-64-64zm448-128h16V64h-80v16a64.07 64.07 0 0064 64zm-64 192v16h80v-80h-16a64.07 64.07 0 00-64 64z"/><circle cx="256" cy="208" r="64"/></svg>`
};


@Component({
    selector: 'app-ionicon-cash-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCashSharp.data}
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
export class IoniconCashSharpComponent{}

@NgModule({
    declarations: [IoniconCashSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCashSharpComponent
    ],
})
export class IoniconCashSharpModule {
}
