
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowRedoSharp: {
  name: 'arrow_redo_sharp';
  data: string;
} = {
  name: 'arrow_redo_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-redo-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252 252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84-28.75 13.25-49.6 33.05-72.08 58.7L48 440z"/></svg>`
};


@Component({
    selector: 'app-ionicon-arrow-redo-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconArrowRedoSharp.data}
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
export class IoniconArrowRedoSharpComponent{}

@NgModule({
    declarations: [IoniconArrowRedoSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconArrowRedoSharpComponent
    ],
})
export class IoniconArrowRedoSharpModule {
}
