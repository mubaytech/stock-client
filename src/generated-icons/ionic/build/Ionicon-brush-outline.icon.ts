
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBrushOutline: {
  name: 'brush_outline';
  data: string;
} = {
  name: 'brush_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="brush-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M452.37 59.63a40.49 40.49 0 00-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 000-57.26zM138 336c-29.88 0-54 24.5-54 54.86 0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14 0-30.36-24.12-54.86-54-54.86z" class="brush-outline_svg ionicon-fill-none  brush-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-brush-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBrushOutline.data}
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
export class IoniconBrushOutlineComponent{}

@NgModule({
    declarations: [IoniconBrushOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBrushOutlineComponent
    ],
})
export class IoniconBrushOutlineModule {
}
