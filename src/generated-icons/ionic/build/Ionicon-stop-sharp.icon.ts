
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconStopSharp: {
  name: 'stop_sharp';
  data: string;
} = {
  name: 'stop_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="stop-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M80 80h352v352H80z"/></svg>`
};


@Component({
    selector: 'app-ionicon-stop-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconStopSharp.data}
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
export class IoniconStopSharpComponent{}

@NgModule({
    declarations: [IoniconStopSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconStopSharpComponent
    ],
})
export class IoniconStopSharpModule {
}
