
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowRedo: {
  name: 'arrow_redo';
  data: string;
} = {
  name: 'arrow_redo',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-redo_svg__ionicon" viewBox="0 0 512 512"><path d="M58.79 439.13A16 16 0 0148 424c0-73.1 14.68-131.56 43.65-173.77 35-51 90.21-78.46 164.35-81.87V88a16 16 0 0127.05-11.57l176 168a16 16 0 010 23.14l-176 168A16 16 0 01256 424v-79.77c-45 1.36-79 8.65-106.07 22.64-29.25 15.12-50.46 37.71-73.32 67a16 16 0 01-17.82 5.28z"/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-redo',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowRedo.data}
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
export class IoniconArrowRedoComponent{}

@NgModule({
    declarations: [IoniconArrowRedoComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowRedoComponent
    ],
})
export class IoniconArrowRedoModule {
}
