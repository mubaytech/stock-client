
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNuclearSharp: {
  name: 'nuclear_sharp';
  data: string;
} = {
  name: 'nuclear_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="nuclear-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="48"/><path d="M223.47 335.59l-51.71 68a169.73 169.73 0 00168.48 0l-51.71-68" class="nuclear-sharp_svg ionicon-fill-none "/><path d="M403.08 108.92a208 208 0 00-294.16 294.16 208 208 0 00294.16-294.16zM342 256a86.13 86.13 0 01-53.47 79.59l51.71 68a169.73 169.73 0 01-168.48 0l51.71-68a86 86 0 01-50.56-101.77l-85.48.09a170.21 170.21 0 0173.83-119l37.94 76.59a85.78 85.78 0 01113.6 0l37.94-76.59a170.21 170.21 0 0173.83 119l-85.48-.09A85.87 85.87 0 01342 256z"/></svg>`
};


@Component({
    selector: 'app-ionicon-nuclear-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNuclearSharp.data}
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
export class IoniconNuclearSharpComponent{}

@NgModule({
    declarations: [IoniconNuclearSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNuclearSharpComponent
    ],
})
export class IoniconNuclearSharpModule {
}
