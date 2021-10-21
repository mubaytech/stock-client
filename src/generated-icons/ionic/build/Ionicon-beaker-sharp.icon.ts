
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBeakerSharp: {
  name: 'beaker_sharp';
  data: string;
} = {
  name: 'beaker_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="beaker-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M453.55 54.7L464 32H128.4c-27.74 0-49 6.57-63.31 19.51C54.39 61.27 48 74.89 48 88v24h16c31 0 32 16.79 32 35v313a20 20 0 0020 20h312a20 20 0 0020-20V96c0-17.16 2.28-34.14 5.55-41.3zM416 96v64H128v-22c0-36.15-21-51-41.77-53.46C89 70 105.7 64.05 128.4 64.05h289.92A221.83 221.83 0 00416 96z"/></svg>`
};


@Component({
    selector: 'app-ionicon-beaker-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBeakerSharp.data}
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
export class IoniconBeakerSharpComponent{}

@NgModule({
    declarations: [IoniconBeakerSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBeakerSharpComponent
    ],
})
export class IoniconBeakerSharpModule {
}
