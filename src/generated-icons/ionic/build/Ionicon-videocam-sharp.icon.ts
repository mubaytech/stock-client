
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconVideocamSharp: {
  name: 'videocam_sharp';
  data: string;
} = {
  name: 'videocam_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="videocam-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M336 208v-80a16 16 0 00-16-16H32a16 16 0 00-16 16v256a16 16 0 0016 16h288a16 16 0 0016-16v-80l160 96V112z"/></svg>`
};


@Component({
    selector: 'app-ionicon-videocam-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconVideocamSharp.data}
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
export class IoniconVideocamSharpComponent{}

@NgModule({
    declarations: [IoniconVideocamSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconVideocamSharpComponent
    ],
})
export class IoniconVideocamSharpModule {
}
