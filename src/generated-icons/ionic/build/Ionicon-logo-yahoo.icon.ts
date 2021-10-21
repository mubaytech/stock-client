
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoYahoo: {
  name: 'logo_yahoo';
  data: string;
} = {
  name: 'logo_yahoo',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-yahoo_svg__ionicon" viewBox="0 0 512 512"><path d="M410.32 37.13c-13.56 0-27-.93-39.12-5.13L256 218.67 140.8 32c-12.12 4.2-24.84 5.13-38.4 5.13-13.32 0-26.52-1.05-38.4-5.13l153.6 248.15V480c12-4.08 25-5.13 38.4-5.13s26.4 1.05 38.4 5.13V280.5L448 32c-11.88 4-24.36 5.13-37.68 5.13z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-yahoo',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoYahoo.data}
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
export class IoniconLogoYahooComponent{}

@NgModule({
    declarations: [IoniconLogoYahooComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoYahooComponent
    ],
})
export class IoniconLogoYahooModule {
}
