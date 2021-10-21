
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCarOutline: {
  name: 'car_outline';
  data: string;
} = {
  name: 'car_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="car-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M80 224l37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224m-352 0h352v144H80zm32 144v32H80v-32m352 0v32h-32v-32" class="car-outline_svg ionicon-fill-none  car-outline_svg ionicon-stroke-width "/><circle cx="144" cy="288" r="16" class="car-outline_svg__ionicon-fill-none car-outline_svg__ionicon-stroke-width"/><circle cx="368" cy="288" r="16" class="car-outline_svg__ionicon-fill-none car-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-car-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCarOutline.data}
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
export class IoniconCarOutlineComponent{}

@NgModule({
    declarations: [IoniconCarOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCarOutlineComponent
    ],
})
export class IoniconCarOutlineModule {
}