
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCheckmarkCircleOutline: {
  name: 'checkmark_circle_outline';
  data: string;
} = {
  name: 'checkmark_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="checkmark-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="checkmark-circle-outline_svg ionicon-fill-none  checkmark-circle-outline_svg ionicon-stroke-width "/><path d="M352 176L217.6 336 160 272" class="checkmark-circle-outline_svg__ionicon-fill-none checkmark-circle-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-checkmark-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCheckmarkCircleOutline.data}
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
export class IoniconCheckmarkCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconCheckmarkCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCheckmarkCircleOutlineComponent
    ],
})
export class IoniconCheckmarkCircleOutlineModule {
}