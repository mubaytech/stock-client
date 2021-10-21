
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInformationCircleOutline: {
  name: 'information_circle_outline';
  data: string;
} = {
  name: 'information_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="information-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" class="information-circle-outline_svg ionicon-fill-none  information-circle-outline_svg ionicon-stroke-width "/><path d="M220 220h32v116M208 340h88" class="information-circle-outline_svg__ionicon-fill-none information-circle-outline_svg__ionicon-stroke-width"/><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"/></svg>`
};


@Component({
    selector: 'app-ionicon-information-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconInformationCircleOutline.data}
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
export class IoniconInformationCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconInformationCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconInformationCircleOutlineComponent
    ],
})
export class IoniconInformationCircleOutlineModule {
}