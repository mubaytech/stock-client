
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHardwareChipSharp: {
  name: 'hardware_chip_sharp';
  data: string;
} = {
  name: 'hardware_chip_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="hardware-chip-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M160 160h192v192H160z"/><path d="M480 198v-44h-32V88a24 24 0 00-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 00-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0024 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0024-24v-66h32v-44h-32v-36h32v-44h-32v-36zm-352-70h256v256H128z"/></svg>`
};


@Component({
    selector: 'app-ionicon-hardware-chip-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconHardwareChipSharp.data}
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
export class IoniconHardwareChipSharpComponent{}

@NgModule({
    declarations: [IoniconHardwareChipSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconHardwareChipSharpComponent
    ],
})
export class IoniconHardwareChipSharpModule {
}
