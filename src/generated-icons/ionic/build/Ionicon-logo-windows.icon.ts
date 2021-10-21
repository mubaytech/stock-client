
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoWindows: {
  name: 'logo_windows';
  data: string;
} = {
  name: 'logo_windows',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-windows_svg__ionicon" viewBox="0 0 512 512"><path d="M480 265H232v179l248 36V265zm-264 0H32v150l184 26.7V265zM480 32L232 67.4V249h248V32zM216 69.7L32 96v153h184V69.7z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-windows',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoWindows.data}
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
export class IoniconLogoWindowsComponent{}

@NgModule({
    declarations: [IoniconLogoWindowsComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoWindowsComponent
    ],
})
export class IoniconLogoWindowsModule {
}
