
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBrushSharp: {
  name: 'brush_sharp';
  data: string;
} = {
  name: 'brush_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="brush-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M480 96l-64-64-244 260 64 64zM142 320c-36.52 0-66 30.63-66 68.57 0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43 0-37.94-29.48-68.57-66-68.57z"/></svg>`
};


@Component({
    selector: 'app-ionicon-brush-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBrushSharp.data}
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
export class IoniconBrushSharpComponent{}

@NgModule({
    declarations: [IoniconBrushSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBrushSharpComponent
    ],
})
export class IoniconBrushSharpModule {
}
