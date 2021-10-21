
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReloadCircleSharp: {
  name: 'reload_circle_sharp';
  data: string;
} = {
  name: 'reload_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="reload-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm120 190.77h-89l36.88-36.88-5.6-6.51a87.38 87.38 0 10-62.94 148 87.55 87.55 0 0082.42-58.25l5.37-15.13 30.17 10.67-5.3 15.13a119.4 119.4 0 11-112.62-159.18 118.34 118.34 0 0186.36 36.95l.56.62 4.31 5L376 149.81z"/></svg>`
};


@Component({
    selector: 'app-ionicon-reload-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReloadCircleSharp.data}
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
export class IoniconReloadCircleSharpComponent{}

@NgModule({
    declarations: [IoniconReloadCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReloadCircleSharpComponent
    ],
})
export class IoniconReloadCircleSharpModule {
}
