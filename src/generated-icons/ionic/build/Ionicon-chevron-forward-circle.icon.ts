
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChevronForwardCircle: {
  name: 'chevron_forward_circle';
  data: string;
} = {
  name: 'chevron_forward_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chevron-forward-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm257.37 0l-84.68-84.69a16 16 0 0122.62-22.62l96 96a16 16 0 010 22.62l-96 96a16 16 0 01-22.62-22.62z"/></svg>`
};


@Component({
    selector: 'app-ionicon-chevron-forward-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChevronForwardCircle.data}
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
export class IoniconChevronForwardCircleComponent{}

@NgModule({
    declarations: [IoniconChevronForwardCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChevronForwardCircleComponent
    ],
})
export class IoniconChevronForwardCircleModule {
}
