
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPrismSharp: {
  name: 'prism_sharp';
  data: string;
} = {
  name: 'prism_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="prism-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 16L16 352l240 144 240-144zm-20 96.82v324.53L73.73 340z"/></svg>`
};


@Component({
    selector: 'app-ionicon-prism-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPrismSharp.data}
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
export class IoniconPrismSharpComponent{}

@NgModule({
    declarations: [IoniconPrismSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPrismSharpComponent
    ],
})
export class IoniconPrismSharpModule {
}
