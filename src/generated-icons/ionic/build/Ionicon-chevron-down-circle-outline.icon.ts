
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChevronDownCircleOutline: {
  name: 'chevron_down_circle_outline';
  data: string;
} = {
  name: 'chevron_down_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chevron-down-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" class="chevron-down-circle-outline_svg ionicon-fill-none  chevron-down-circle-outline_svg ionicon-stroke-width "/><path d="M352 216l-96 96-96-96" class="chevron-down-circle-outline_svg__ionicon-fill-none chevron-down-circle-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-chevron-down-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChevronDownCircleOutline.data}
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
export class IoniconChevronDownCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconChevronDownCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChevronDownCircleOutlineComponent
    ],
})
export class IoniconChevronDownCircleOutlineModule {
}
