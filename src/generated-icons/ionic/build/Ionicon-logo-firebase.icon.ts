
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoFirebase: {
  name: 'logo_firebase';
  data: string;
} = {
  name: 'logo_firebase',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-firebase_svg__ionicon" viewBox="0 0 512 512"><path d="M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 00-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0031.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 00-19.36 0L85.83 375.74z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-firebase',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoFirebase.data}
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
export class IoniconLogoFirebaseComponent{}

@NgModule({
    declarations: [IoniconLogoFirebaseComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoFirebaseComponent
    ],
})
export class IoniconLogoFirebaseModule {
}