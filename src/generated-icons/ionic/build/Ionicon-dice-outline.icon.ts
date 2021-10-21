
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconDiceOutline: {
  name: 'dice_outline';
  data: string;
} = {
  name: 'dice_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="dice-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z" class="dice-outline_svg ionicon-fill-none  dice-outline_svg ionicon-stroke-width "/><path d="M69 153.99l187 110 187-110m-187 310v-200" class="dice-outline_svg__ionicon-fill-none dice-outline_svg__ionicon-stroke-width"/><ellipse cx="256" cy="152" rx="24" ry="16"/><ellipse cx="208" cy="296" rx="16" ry="24"/><ellipse cx="112" cy="328" rx="16" ry="24"/><ellipse cx="304" cy="296" rx="16" ry="24"/><ellipse cx="400" cy="240" rx="16" ry="24"/><ellipse cx="304" cy="384" rx="16" ry="24"/><ellipse cx="400" cy="328" rx="16" ry="24"/></svg>`
};


@Component({
    selector: 'app-ionicon-dice-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconDiceOutline.data}
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
export class IoniconDiceOutlineComponent{}

@NgModule({
    declarations: [IoniconDiceOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconDiceOutlineComponent
    ],
})
export class IoniconDiceOutlineModule {
}
