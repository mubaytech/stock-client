
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSendOutline: {
  name: 'send_outline';
  data: string;
} = {
  name: 'send_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="send-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" class="send-outline_svg ionicon-fill-none  send-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-send-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSendOutline.data}
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
export class IoniconSendOutlineComponent{}

@NgModule({
    declarations: [IoniconSendOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSendOutlineComponent
    ],
})
export class IoniconSendOutlineModule {
}
