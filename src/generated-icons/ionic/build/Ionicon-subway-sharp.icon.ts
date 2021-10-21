
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSubwaySharp: {
  name: 'subway_sharp';
  data: string;
} = {
  name: 'subway_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="subway-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M392 16H120a24 24 0 00-24 24v336a24 24 0 0024 24h272a24 24 0 0024-24V40a24 24 0 00-24-24zM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01208 64zm-28.53 287.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zm160 0a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM384 144v64H128v-64zm-86 272l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416h-45z"/></svg>`
};


@Component({
    selector: 'app-ionicon-subway-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSubwaySharp.data}
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
export class IoniconSubwaySharpComponent{}

@NgModule({
    declarations: [IoniconSubwaySharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSubwaySharpComponent
    ],
})
export class IoniconSubwaySharpModule {
}
