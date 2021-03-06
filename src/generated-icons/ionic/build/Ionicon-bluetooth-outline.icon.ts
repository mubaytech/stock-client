
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBluetoothOutline: {
  name: 'bluetooth_outline';
  data: string;
} = {
  name: 'bluetooth_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bluetooth-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M144 352l224-192L256 48v416l112-112-224-192" class="bluetooth-outline_svg ionicon-fill-none  bluetooth-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-bluetooth-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBluetoothOutline.data}
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
export class IoniconBluetoothOutlineComponent{}

@NgModule({
    declarations: [IoniconBluetoothOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBluetoothOutlineComponent
    ],
})
export class IoniconBluetoothOutlineModule {
}
