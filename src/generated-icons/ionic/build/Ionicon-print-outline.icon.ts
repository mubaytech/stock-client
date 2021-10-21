
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPrintOutline: {
  name: 'print_outline';
  data: string;
} = {
  name: 'print_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="print-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24" class="print-outline_svg ionicon-fill-none  print-outline_svg ionicon-stroke-width "/><rect width="256" height="208" x="128" y="240" class="print-outline_svg__ionicon-fill-none print-outline_svg__ionicon-stroke-width" rx="24.32" ry="24.32"/><path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" class="print-outline_svg__ionicon-fill-none print-outline_svg__ionicon-stroke-width"/><circle cx="392" cy="184" r="24"/></svg>`
};


@Component({
    selector: 'app-ionicon-print-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPrintOutline.data}
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
export class IoniconPrintOutlineComponent{}

@NgModule({
    declarations: [IoniconPrintOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPrintOutlineComponent
    ],
})
export class IoniconPrintOutlineModule {
}