
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoAmplify: {
  name: 'logo_amplify';
  data: string;
} = {
  name: 'logo_amplify',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-amplify_svg__ionicon" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M112.31 268l40.36-68.69 34.65 59-67.54 115h135L289.31 432H16zm58.57-99.76l33.27-56.67L392.44 432h-66.68zM222.67 80h66.59L496 432h-66.68z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-amplify',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoAmplify.data}
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
export class IoniconLogoAmplifyComponent{}

@NgModule({
    declarations: [IoniconLogoAmplifyComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoAmplifyComponent
    ],
})
export class IoniconLogoAmplifyModule {
}
