
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHandRight: {
  name: 'hand_right';
  data: string;
} = {
  name: 'hand_right',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="hand-right_svg__ionicon" viewBox="0 0 512 512"><path d="M79.2 211.44c15.52-8.82 34.91-2.28 43.31 13.68l41.38 84.41a7 7 0 008.93 3.43 7 7 0 004.41-6.52V72c0-13.91 12.85-24 26.77-24s26 10.09 26 24v156.64A11.24 11.24 0 00240.79 240 11 11 0 00252 229V24c0-13.91 10.94-24 24.86-24S302 10.09 302 24v204.64A11.24 11.24 0 00312.79 240 11 11 0 00324 229V56c0-13.91 12.08-24 26-24s26 11.09 26 25v187.64A11.24 11.24 0 00386.79 256 11 11 0 00398 245V120c0-13.91 11.08-24 25-24s25.12 10.22 25 24v216c0 117.41-72 176-160 176h-16c-88 0-115.71-39.6-136-88L67.33 255c-6.66-18-3.64-34.75 11.87-43.56z"/></svg>`
};


@Component({
    selector: 'app-ionicon-hand-right',
    template: `
    <div class="app-ionic-icon">
        ${IoniconHandRight.data}
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
export class IoniconHandRightComponent{}

@NgModule({
    declarations: [IoniconHandRightComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconHandRightComponent
    ],
})
export class IoniconHandRightModule {
}