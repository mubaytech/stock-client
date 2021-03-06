
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRadioButtonOnOutline: {
  name: 'radio_button_on_outline';
  data: string;
} = {
  name: 'radio_button_on_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="radio-button-on-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="radio-button-on-outline_svg ionicon-fill-none  radio-button-on-outline_svg ionicon-stroke-width "/><circle cx="256" cy="256" r="144"/></svg>`
};


@Component({
    selector: 'app-ionicon-radio-button-on-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconRadioButtonOnOutline.data}
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
export class IoniconRadioButtonOnOutlineComponent{}

@NgModule({
    declarations: [IoniconRadioButtonOnOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconRadioButtonOnOutlineComponent
    ],
})
export class IoniconRadioButtonOnOutlineModule {
}
