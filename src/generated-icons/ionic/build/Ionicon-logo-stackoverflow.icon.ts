
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoStackoverflow: {
  name: 'logo_stackoverflow';
  data: string;
} = {
  name: 'logo_stackoverflow',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-stackoverflow_svg__ionicon" viewBox="0 0 512 512"><path d="M392 440V320h40v160H64V320h40v120z"/><path d="M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-stackoverflow',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoStackoverflow.data}
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
export class IoniconLogoStackoverflowComponent{}

@NgModule({
    declarations: [IoniconLogoStackoverflowComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoStackoverflowComponent
    ],
})
export class IoniconLogoStackoverflowModule {
}
