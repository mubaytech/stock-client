
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBatteryHalfOutline: {
  name: 'battery_half_outline';
  data: string;
} = {
  name: 'battery_half_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="battery-half-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="400" height="224" x="32" y="144" class="battery-half-outline_svg ionicon-fill-none  battery-half-outline_svg ionicon-stroke-width " rx="45.7" ry="45.7"/><rect width="154.31" height="114.13" x="85.69" y="198.93" class="battery-half-outline_svg__ionicon-stroke-width" rx="4" ry="4"/><path d="M480 218.67v74.66" class="battery-half-outline_svg__ionicon-fill-none battery-half-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-battery-half-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBatteryHalfOutline.data}
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
export class IoniconBatteryHalfOutlineComponent{}

@NgModule({
    declarations: [IoniconBatteryHalfOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBatteryHalfOutlineComponent
    ],
})
export class IoniconBatteryHalfOutlineModule {
}