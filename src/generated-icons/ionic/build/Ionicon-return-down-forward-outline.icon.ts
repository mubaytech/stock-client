
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReturnDownForwardOutline: {
  name: 'return_down_forward_outline';
  data: string;
} = {
  name: 'return_down_forward_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="return-down-forward-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M400 352l64-64-64-64" class="return-down-forward-outline_svg ionicon-fill-none  return-down-forward-outline_svg ionicon-stroke-width "/><path d="M448 288H154c-58.76 0-106-49.33-106-108v-20" class="return-down-forward-outline_svg__ionicon-fill-none return-down-forward-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-return-down-forward-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconReturnDownForwardOutline.data}
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
export class IoniconReturnDownForwardOutlineComponent{}

@NgModule({
    declarations: [IoniconReturnDownForwardOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconReturnDownForwardOutlineComponent
    ],
})
export class IoniconReturnDownForwardOutlineModule {
}