
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGameControllerOutline: {
  name: 'game_controller_outline';
  data: string;
} = {
  name: 'game_controller_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="game-controller-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 00352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 00-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88 26 9 49.25-9.61 71.27-37 25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16 41.02-14.01 40.44-79.13 21.43-165.04z" class="game-controller-outline_svg ionicon-fill-none  game-controller-outline_svg ionicon-stroke-width "/><circle cx="292" cy="224" r="20"/><path d="M336 288a20 20 0 1120-19.95A20 20 0 01336 288z"/><circle cx="336" cy="180" r="20"/><circle cx="380" cy="224" r="20"/><path d="M160 176v96m48-48h-96" class="game-controller-outline_svg__ionicon-fill-none game-controller-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-game-controller-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconGameControllerOutline.data}
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
export class IoniconGameControllerOutlineComponent{}

@NgModule({
    declarations: [IoniconGameControllerOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconGameControllerOutlineComponent
    ],
})
export class IoniconGameControllerOutlineModule {
}