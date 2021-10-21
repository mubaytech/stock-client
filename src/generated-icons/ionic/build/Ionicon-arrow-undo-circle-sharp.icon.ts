
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowUndoCircleSharp: {
  name: 'arrow_undo_circle_sharp';
  data: string;
} = {
  name: 'arrow_undo_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-undo-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14-27.85-35.57-52.48-54.86-119.17-54.86z"/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-undo-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowUndoCircleSharp.data}
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
export class IoniconArrowUndoCircleSharpComponent{}

@NgModule({
    declarations: [IoniconArrowUndoCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowUndoCircleSharpComponent
    ],
})
export class IoniconArrowUndoCircleSharpModule {
}
