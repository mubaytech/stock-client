
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconColorWandOutline: {
  name: 'color_wand_outline';
  data: string;
} = {
  name: 'color_wand_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="color-wand-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="63.03" height="378.2" x="280.48" y="122.9" class="color-wand-outline_svg ionicon-fill-none  color-wand-outline_svg ionicon-stroke-width " rx="31.52" transform="rotate(-45 312.002 311.994)"/><path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z"/><path d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48m101.82-5.82l-33.94 33.94M124.12 259.88l-33.94 33.94" class="color-wand-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-color-wand-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconColorWandOutline.data}
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
export class IoniconColorWandOutlineComponent{}

@NgModule({
    declarations: [IoniconColorWandOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconColorWandOutlineComponent
    ],
})
export class IoniconColorWandOutlineModule {
}
