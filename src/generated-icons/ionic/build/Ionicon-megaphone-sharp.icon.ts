
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMegaphoneSharp: {
  name: 'megaphone_sharp';
  data: string;
} = {
  name: 'megaphone_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="megaphone-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M128 144v332a4 4 0 004 4h100.07a8 8 0 007.82-9.7L208.71 352H232a8 8 0 008-8V144zm324.18 42.55L448 185.5V36a4 4 0 00-4-4h-42.5a4 4 0 00-2.63 1L272 144v160l126.87 111a4 4 0 002.63 1H444a4 4 0 004-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45zM96 144H52a4 4 0 00-4 4v35.59a43 43 0 00-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 004 4h44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-megaphone-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMegaphoneSharp.data}
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
export class IoniconMegaphoneSharpComponent{}

@NgModule({
    declarations: [IoniconMegaphoneSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMegaphoneSharpComponent
    ],
})
export class IoniconMegaphoneSharpModule {
}
