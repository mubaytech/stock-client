
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInformationCircleSharp: {
  name: 'information_circle_sharp';
  data: string;
} = {
  name: 'information_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="information-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-information-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconInformationCircleSharp.data}
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
export class IoniconInformationCircleSharpComponent{}

@NgModule({
    declarations: [IoniconInformationCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconInformationCircleSharpComponent
    ],
})
export class IoniconInformationCircleSharpModule {
}
