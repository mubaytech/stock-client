
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconColorPaletteOutline: {
  name: 'color_palette_outline';
  data: string;
} = {
  name: 'color_palette_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="color-palette-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z" class="color-palette-outline_svg ionicon-fill-none  color-palette-outline_svg ionicon-stroke-width "/><circle cx="144" cy="208" r="32"/><circle cx="152" cy="311" r="32"/><circle cx="224" cy="144" r="32"/><circle cx="256" cy="367" r="48"/><circle cx="328" cy="144" r="32"/></svg>`
};


@Component({
    selector: 'app-ionicon-color-palette-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconColorPaletteOutline.data}
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
export class IoniconColorPaletteOutlineComponent{}

@NgModule({
    declarations: [IoniconColorPaletteOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconColorPaletteOutlineComponent
    ],
})
export class IoniconColorPaletteOutlineModule {
}