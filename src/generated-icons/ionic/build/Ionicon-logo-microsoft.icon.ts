
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoMicrosoft: {
  name: 'logo_microsoft';
  data: string;
} = {
  name: 'logo_microsoft',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-microsoft_svg__ionicon" viewBox="0 0 512 512"><path d="M31.87 30.58H244.7v212.81H31.87zm235.02 0H479.7v212.81H266.89zM31.87 265.61H244.7v212.8H31.87zm235.02 0H479.7v212.8H266.89z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-microsoft',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoMicrosoft.data}
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
export class IoniconLogoMicrosoftComponent{}

@NgModule({
    declarations: [IoniconLogoMicrosoftComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoMicrosoftComponent
    ],
})
export class IoniconLogoMicrosoftModule {
}
