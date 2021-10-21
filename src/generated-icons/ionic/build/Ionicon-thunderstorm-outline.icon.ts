
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconThunderstormOutline: {
  name: 'thunderstorm_outline';
  data: string;
} = {
  name: 'thunderstorm_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="thunderstorm-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M120 352l-24 48m40 32l-16 32m280-112l-24 48m40 32l-16 32M208 304l-16 96h48v80l80-112h-48l16-64m116.33-151.11H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 00-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44c0-41.55-34-75.55-75.67-75.55z" class="thunderstorm-outline_svg ionicon-fill-none  thunderstorm-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-thunderstorm-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconThunderstormOutline.data}
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
export class IoniconThunderstormOutlineComponent{}

@NgModule({
    declarations: [IoniconThunderstormOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconThunderstormOutlineComponent
    ],
})
export class IoniconThunderstormOutlineModule {
}