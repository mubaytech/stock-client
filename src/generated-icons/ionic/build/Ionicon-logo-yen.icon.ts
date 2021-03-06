
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoYen: {
  name: 'logo_yen';
  data: string;
} = {
  name: 'logo_yen',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-yen_svg__ionicon" viewBox="0 0 512 512"><path d="M448 32h-80L256 253.13 144 32H64l112.37 208H128v48h73.56L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.89-31H384v-48h-48.29z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-yen',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoYen.data}
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
export class IoniconLogoYenComponent{}

@NgModule({
    declarations: [IoniconLogoYenComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoYenComponent
    ],
})
export class IoniconLogoYenModule {
}
