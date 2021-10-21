
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReturnUpBackSharp: {
  name: 'return_up_back_sharp';
  data: string;
} = {
  name: 'return_up_back_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="return-up-back-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M112 160l-64 64 64 64" class="return-up-back-sharp_svg ionicon-fill-none  return-up-back-sharp_svg ionicon-stroke-width "/><path d="M64 224h400v128" class="return-up-back-sharp_svg__ionicon-fill-none return-up-back-sharp_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-return-up-back-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReturnUpBackSharp.data}
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
export class IoniconReturnUpBackSharpComponent{}

@NgModule({
    declarations: [IoniconReturnUpBackSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReturnUpBackSharpComponent
    ],
})
export class IoniconReturnUpBackSharpModule {
}