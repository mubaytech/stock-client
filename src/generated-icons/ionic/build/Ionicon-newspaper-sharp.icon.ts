
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNewspaperSharp: {
  name: 'newspaper_sharp';
  data: string;
} = {
  name: 'newspaper_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="newspaper-sharp_svg__ionicon" viewBox="0 0 512 512"><rect width="96" height="96" x="96" y="112" class="newspaper-sharp_svg ionicon-fill-none " rx="16" ry="16"/><path d="M468 112h-52v304a32 32 0 0032 32 32 32 0 0032-32V124a12 12 0 00-12-12z"/><path d="M431.15 477.75A64.11 64.11 0 01384 416V44a12 12 0 00-12-12H44a12 12 0 00-12 12v380a56 56 0 0056 56h342.85a1.14 1.14 0 00.3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z"/></svg>`
};


@Component({
    selector: 'app-ionicon-newspaper-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNewspaperSharp.data}
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
export class IoniconNewspaperSharpComponent{}

@NgModule({
    declarations: [IoniconNewspaperSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNewspaperSharpComponent
    ],
})
export class IoniconNewspaperSharpModule {
}
