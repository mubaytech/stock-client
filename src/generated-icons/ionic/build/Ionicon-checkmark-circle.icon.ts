
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCheckmarkCircle: {
  name: 'checkmark_circle';
  data: string;
} = {
  name: 'checkmark_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="checkmark-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"/></svg>`
};


@Component({
    selector: 'app-ionicon-checkmark-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCheckmarkCircle.data}
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
export class IoniconCheckmarkCircleComponent{}

@NgModule({
    declarations: [IoniconCheckmarkCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCheckmarkCircleComponent
    ],
})
export class IoniconCheckmarkCircleModule {
}
