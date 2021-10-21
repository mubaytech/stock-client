
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMagnetSharp: {
  name: 'magnet_sharp';
  data: string;
} = {
  name: 'magnet_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="magnet-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M191.98 463.58v-48M90.16 421.4l33.94-33.94m-76.12-67.88h48" class="magnet-sharp_svg ionicon-stroke-width "/><path d="M422.2 89.82a144 144 0 00-203.71-.07l-67.88 67.88 67.88 67.89 67.88-67.89a48 48 0 0168.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32 67.88 67.88 66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55zM82.718 225.517l45.255-45.254 67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254 67.882 67.882-45.255 45.255z"/></svg>`
};


@Component({
    selector: 'app-ionicon-magnet-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMagnetSharp.data}
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
export class IoniconMagnetSharpComponent{}

@NgModule({
    declarations: [IoniconMagnetSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMagnetSharpComponent
    ],
})
export class IoniconMagnetSharpModule {
}
