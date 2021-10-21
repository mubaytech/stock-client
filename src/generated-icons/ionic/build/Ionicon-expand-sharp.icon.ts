
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconExpandSharp: {
  name: 'expand_sharp';
  data: string;
} = {
  name: 'expand_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="expand-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M432 320v112H320m101.8-10.23L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320m10.23 101.8L208 304" class="expand-sharp_svg ionicon-fill-none  expand-sharp_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-expand-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconExpandSharp.data}
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
export class IoniconExpandSharpComponent{}

@NgModule({
    declarations: [IoniconExpandSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconExpandSharpComponent
    ],
})
export class IoniconExpandSharpModule {
}