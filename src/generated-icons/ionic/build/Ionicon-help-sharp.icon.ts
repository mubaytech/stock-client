
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHelpSharp: {
  name: 'help_sharp';
  data: string;
} = {
  name: 'help_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="help-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M160 164c0-10 1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 290.36 248 316" class="help-sharp_svg ionicon-fill-none "/><rect width="56" height="56" x="220" y="368" rx="3.5" ry="3.5"/></svg>`
};


@Component({
    selector: 'app-ionicon-help-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconHelpSharp.data}
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
export class IoniconHelpSharpComponent{}

@NgModule({
    declarations: [IoniconHelpSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconHelpSharpComponent
    ],
})
export class IoniconHelpSharpModule {
}