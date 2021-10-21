
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBusSharp: {
  name: 'bus_sharp';
  data: string;
} = {
  name: 'bus_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bus-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M400 64H112a16 16 0 000 32h288a16 16 0 000-32z" class="bus-sharp_svg ionicon-fill-none "/><path d="M424 32H88a24 24 0 00-24 24v360a32 32 0 0016 27.71V480h72v-32h208v32h72v-36.29A32 32 0 00448 416V56a24 24 0 00-24-24zM175.82 371.47a32 32 0 11-35.3-35.29 32.09 32.09 0 0135.3 35.29zM240 288H96V128h144zm16-192H96.46L96 64h320l-.46 32H256zm16 32h144v160H272zm64.18 236.53a32 32 0 1135.3 35.29 32.09 32.09 0 01-35.3-35.29z"/></svg>`
};


@Component({
    selector: 'app-ionicon-bus-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBusSharp.data}
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
export class IoniconBusSharpComponent{}

@NgModule({
    declarations: [IoniconBusSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBusSharpComponent
    ],
})
export class IoniconBusSharpModule {
}
