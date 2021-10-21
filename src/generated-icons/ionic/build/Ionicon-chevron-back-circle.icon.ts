
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChevronBackCircle: {
  name: 'chevron_back_circle';
  data: string;
} = {
  name: 'chevron_back_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chevron-back-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm35.31 292.69a16 16 0 11-22.62 22.62l-96-96a16 16 0 010-22.62l96-96a16 16 0 0122.62 22.62L206.63 256z"/></svg>`
};


@Component({
    selector: 'app-ionicon-chevron-back-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChevronBackCircle.data}
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
export class IoniconChevronBackCircleComponent{}

@NgModule({
    declarations: [IoniconChevronBackCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChevronBackCircleComponent
    ],
})
export class IoniconChevronBackCircleModule {
}
