
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoFlickr: {
  name: 'logo_flickr';
  data: string;
} = {
  name: 'logo_flickr',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-flickr_svg__ionicon" viewBox="0 0 512 512"><path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm-82.16 280A56 56 0 11228 257.84 56 56 0 01173.84 312zm168 0A56 56 0 11396 257.84 56 56 0 01341.84 312z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-flickr',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoFlickr.data}
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
export class IoniconLogoFlickrComponent{}

@NgModule({
    declarations: [IoniconLogoFlickrComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoFlickrComponent
    ],
})
export class IoniconLogoFlickrModule {
}
