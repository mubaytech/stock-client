
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInvertModeSharp: {
  name: 'invert_mode_sharp';
  data: string;
} = {
  name: 'invert_mode_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="invert-mode-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z"/><path d="M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z"/></svg>`
};


@Component({
    selector: 'app-ionicon-invert-mode-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconInvertModeSharp.data}
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
export class IoniconInvertModeSharpComponent{}

@NgModule({
    declarations: [IoniconInvertModeSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconInvertModeSharpComponent
    ],
})
export class IoniconInvertModeSharpModule {
}
