
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWarningSharp: {
  name: 'warning_sharp';
  data: string;
} = {
  name: 'warning_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="warning-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M479 447.77L268.43 56.64a8 8 0 00-14.09 0L43.73 447.77a8 8 0 007.05 11.79H472a8 8 0 007-11.79zm-197.62-36.29h-40v-40h40zm-4-63.92h-32l-6-160h44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-warning-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconWarningSharp.data}
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
export class IoniconWarningSharpComponent{}

@NgModule({
    declarations: [IoniconWarningSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconWarningSharpComponent
    ],
})
export class IoniconWarningSharpModule {
}
