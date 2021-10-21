
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconShapesSharp: {
  name: 'shapes_sharp';
  data: string;
} = {
  name: 'shapes_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="shapes-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M363.27 336H4.73L184 16z"/><path d="M336 160a160.54 160.54 0 00-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160z"/></svg>`
};


@Component({
    selector: 'app-ionicon-shapes-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconShapesSharp.data}
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
export class IoniconShapesSharpComponent{}

@NgModule({
    declarations: [IoniconShapesSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconShapesSharpComponent
    ],
})
export class IoniconShapesSharpModule {
}
