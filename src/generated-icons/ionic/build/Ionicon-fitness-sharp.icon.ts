
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFitnessSharp: {
  name: 'fitness_sharp';
  data: string;
} = {
  name: 'fitness_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="fitness-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M480 272h-37.34a261.41 261.41 0 01-18.25 32H480zM32 240v32h37.34a225.1 225.1 0 01-12.4-32z"/><path d="M304 259.78l-51.73 103.46-48-160L169.89 272H69.34c10 20.92 23.5 41.41 40.63 61.68 40.12 47.46 94.25 79.75 137 108.32l9 6 9-6c42.78-28.57 96.91-60.86 137-108.32A322.78 322.78 0 00424.41 304h-98.3z"/><path d="M211.73 116.76l48 160L304 188.22 345.89 272h96.77A213.13 213.13 0 00464 176.65C463.37 114.54 413.54 64 352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64 98.46 64 48.63 114.54 48 176.65A211.23 211.23 0 0056.94 240h93.17z"/></svg>`
};


@Component({
    selector: 'app-ionicon-fitness-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFitnessSharp.data}
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
export class IoniconFitnessSharpComponent{}

@NgModule({
    declarations: [IoniconFitnessSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFitnessSharpComponent
    ],
})
export class IoniconFitnessSharpModule {
}