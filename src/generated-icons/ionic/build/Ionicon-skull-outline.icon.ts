
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSkullOutline: {
  name: 'skull_outline';
  data: string;
} = {
  name: 'skull_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="skull-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z" class="skull-outline_svg ionicon-fill-none  skull-outline_svg ionicon-stroke-width "/><circle cx="168" cy="280" r="40" class="skull-outline_svg__ionicon-fill-none skull-outline_svg__ionicon-stroke-width"/><circle cx="344" cy="280" r="40" class="skull-outline_svg__ionicon-fill-none skull-outline_svg__ionicon-stroke-width"/><path d="M256 336l-16 48h32l-16-48zm0 112v32m-48-32v32m96-32v32" class="skull-outline_svg__ionicon-fill-none skull-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-skull-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSkullOutline.data}
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
export class IoniconSkullOutlineComponent{}

@NgModule({
    declarations: [IoniconSkullOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSkullOutlineComponent
    ],
})
export class IoniconSkullOutlineModule {
}
