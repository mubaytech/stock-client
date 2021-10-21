
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconResize: {
  name: 'resize';
  data: string;
} = {
  name: 'resize',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="resize_svg__ionicon" viewBox="0 0 512 512"><path d="M304 96h112v112m-10.23-101.8L111.98 400.02M208 416H96V304" class="resize_svg ionicon-fill-none  resize_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-resize',
    template: `
    <div class="app-ionic-icon">
        ${IoniconResize.data}
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
export class IoniconResizeComponent{}

@NgModule({
    declarations: [IoniconResizeComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconResizeComponent
    ],
})
export class IoniconResizeModule {
}