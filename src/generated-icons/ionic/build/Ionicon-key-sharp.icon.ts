
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconKeySharp: {
  name: 'key_sharp';
  data: string;
} = {
  name: 'key_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="key-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M218.1 167.2c0 13 0 25.6 4.1 37.4-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35 47.11-3.47 3.78-46.8 49.63-.95.49-50.09 52.69 2.1 9-18.84c15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2zM406.85 144A38.85 38.85 0 11368 105.15 38.81 38.81 0 01406.85 144z"/></svg>`
};


@Component({
    selector: 'app-ionicon-key-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconKeySharp.data}
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
export class IoniconKeySharpComponent{}

@NgModule({
    declarations: [IoniconKeySharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconKeySharpComponent
    ],
})
export class IoniconKeySharpModule {
}