
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconThermometerOutline: {
  name: 'thermometer_outline';
  data: string;
} = {
  name: 'thermometer_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="thermometer-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M307.72 302.27a8 8 0 01-3.72-6.75V80a48 48 0 00-48-48 48 48 0 00-48 48v215.52a8 8 0 01-3.71 6.74 97.51 97.51 0 00-44.19 86.07A96 96 0 00352 384a97.49 97.49 0 00-44.28-81.73zM256 112v272" class="thermometer-outline_svg ionicon-fill-none  thermometer-outline_svg ionicon-stroke-width "/><circle cx="256" cy="384" r="48"/></svg>`
};


@Component({
    selector: 'app-ionicon-thermometer-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconThermometerOutline.data}
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
export class IoniconThermometerOutlineComponent{}

@NgModule({
    declarations: [IoniconThermometerOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconThermometerOutlineComponent
    ],
})
export class IoniconThermometerOutlineModule {
}
