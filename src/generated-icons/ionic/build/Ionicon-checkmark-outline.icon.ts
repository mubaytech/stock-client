
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCheckmarkOutline: {
  name: 'checkmark_outline';
  data: string;
} = {
  name: 'checkmark_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="checkmark-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M416 128L192 384l-96-96" class="checkmark-outline_svg ionicon-fill-none  checkmark-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-checkmark-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCheckmarkOutline.data}
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
export class IoniconCheckmarkOutlineComponent{}

@NgModule({
    declarations: [IoniconCheckmarkOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCheckmarkOutlineComponent
    ],
})
export class IoniconCheckmarkOutlineModule {
}
