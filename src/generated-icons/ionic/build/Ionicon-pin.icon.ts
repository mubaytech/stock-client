
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPin: {
  name: 'pin';
  data: string;
} = {
  name: 'pin',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="pin_svg__ionicon" viewBox="0 0 512 512"><path d="M336 96a80 80 0 10-96 78.39v283.17a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38V174.39A80.13 80.13 0 00336 96zm-56 0a24 24 0 1124-24 24 24 0 01-24 24z"/></svg>`
};


@Component({
    selector: 'app-ionicon-pin',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPin.data}
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
export class IoniconPinComponent{}

@NgModule({
    declarations: [IoniconPinComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPinComponent
    ],
})
export class IoniconPinModule {
}
