
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReaderSharp: {
  name: 'reader_sharp';
  data: string;
} = {
  name: 'reader_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="reader-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M80 44v424a12 12 0 0012 12h328a12 12 0 0012-12V44a12 12 0 00-12-12H92a12 12 0 00-12 12zm192 260H160v-32h112zm80-80H160v-32h192zm0-80H160v-32h192z"/></svg>`
};


@Component({
    selector: 'app-ionicon-reader-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReaderSharp.data}
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
export class IoniconReaderSharpComponent{}

@NgModule({
    declarations: [IoniconReaderSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReaderSharpComponent
    ],
})
export class IoniconReaderSharpModule {
}
