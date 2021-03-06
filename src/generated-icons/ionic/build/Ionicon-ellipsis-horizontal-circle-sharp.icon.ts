
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEllipsisHorizontalCircleSharp: {
  name: 'ellipsis_horizontal_circle_sharp';
  data: string;
} = {
  name: 'ellipsis_horizontal_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="ellipsis-horizontal-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-90 234a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26zm90 0a26 26 0 1126-26 26 26 0 01-26 26z"/></svg>`
};


@Component({
    selector: 'app-ionicon-ellipsis-horizontal-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconEllipsisHorizontalCircleSharp.data}
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
export class IoniconEllipsisHorizontalCircleSharpComponent{}

@NgModule({
    declarations: [IoniconEllipsisHorizontalCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconEllipsisHorizontalCircleSharpComponent
    ],
})
export class IoniconEllipsisHorizontalCircleSharpModule {
}
