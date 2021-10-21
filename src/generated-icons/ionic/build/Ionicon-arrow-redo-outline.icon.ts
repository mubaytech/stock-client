
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowRedoOutline: {
  name: 'arrow_redo_outline';
  data: string;
} = {
  name: 'arrow_redo_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-redo-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" class="arrow-redo-outline_svg ionicon-fill-none  arrow-redo-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-redo-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowRedoOutline.data}
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
export class IoniconArrowRedoOutlineComponent{}

@NgModule({
    declarations: [IoniconArrowRedoOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowRedoOutlineComponent
    ],
})
export class IoniconArrowRedoOutlineModule {
}