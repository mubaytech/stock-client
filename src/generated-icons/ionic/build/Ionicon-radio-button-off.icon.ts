
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRadioButtonOff: {
  name: 'radio_button_off';
  data: string;
} = {
  name: 'radio_button_off',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="radio-button-off_svg__ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="radio-button-off_svg ionicon-fill-none  radio-button-off_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-radio-button-off',
    template: `
    <div class="app-ionic-icon">
        ${IoniconRadioButtonOff.data}
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
export class IoniconRadioButtonOffComponent{}

@NgModule({
    declarations: [IoniconRadioButtonOffComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconRadioButtonOffComponent
    ],
})
export class IoniconRadioButtonOffModule {
}
