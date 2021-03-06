
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCodeWorkingSharp: {
  name: 'code_working_sharp';
  data: string;
} = {
  name: 'code_working_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="code-working-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="26"/><circle cx="346" cy="256" r="26"/><circle cx="166" cy="256" r="26"/><path d="M160 368L32 256l128-112m192 224l128-112-128-112" class="code-working-sharp_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-code-working-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCodeWorkingSharp.data}
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
export class IoniconCodeWorkingSharpComponent{}

@NgModule({
    declarations: [IoniconCodeWorkingSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCodeWorkingSharpComponent
    ],
})
export class IoniconCodeWorkingSharpModule {
}
