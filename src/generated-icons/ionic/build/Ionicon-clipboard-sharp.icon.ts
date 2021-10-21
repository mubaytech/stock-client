
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconClipboardSharp: {
  name: 'clipboard_sharp';
  data: string;
} = {
  name: 'clipboard_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="clipboard-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M420 48h-68V28a12 12 0 00-12-12H172a12 12 0 00-12 12v20H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V60a12 12 0 00-12-12zm-84.13 64H176.13V80h159.74z"/></svg>`
};


@Component({
    selector: 'app-ionicon-clipboard-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconClipboardSharp.data}
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
export class IoniconClipboardSharpComponent{}

@NgModule({
    declarations: [IoniconClipboardSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconClipboardSharpComponent
    ],
})
export class IoniconClipboardSharpModule {
}