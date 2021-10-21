
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoGooglePlaystore: {
  name: 'logo_google_playstore';
  data: string;
} = {
  name: 'logo_google_playstore',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-google-playstore_svg__ionicon" viewBox="0 0 512 512"><path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-google-playstore',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoGooglePlaystore.data}
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
export class IoniconLogoGooglePlaystoreComponent{}

@NgModule({
    declarations: [IoniconLogoGooglePlaystoreComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoGooglePlaystoreComponent
    ],
})
export class IoniconLogoGooglePlaystoreModule {
}
