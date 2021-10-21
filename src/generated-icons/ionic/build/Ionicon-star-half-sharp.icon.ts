
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconStarHalfSharp: {
  name: 'star_half_sharp';
  data: string;
} = {
  name: 'star_half_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="star-half-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3zM274.63 347.82L256 334.49v-200.1l26 78.91 7.24 22h105.39l-67.32 47.2-19.69 13.81 7.78 22.75 26.26 76.75z"/></svg>`
};


@Component({
    selector: 'app-ionicon-star-half-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconStarHalfSharp.data}
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
export class IoniconStarHalfSharpComponent{}

@NgModule({
    declarations: [IoniconStarHalfSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconStarHalfSharpComponent
    ],
})
export class IoniconStarHalfSharpModule {
}