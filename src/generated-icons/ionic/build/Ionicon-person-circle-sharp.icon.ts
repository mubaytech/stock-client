
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPersonCircleSharp: {
  name: 'person_circle_sharp';
  data: string;
} = {
  name: 'person_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="person-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z"/></svg>`
};


@Component({
    selector: 'app-ionicon-person-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPersonCircleSharp.data}
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
export class IoniconPersonCircleSharpComponent{}

@NgModule({
    declarations: [IoniconPersonCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPersonCircleSharpComponent
    ],
})
export class IoniconPersonCircleSharpModule {
}
