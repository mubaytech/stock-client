
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconIdCardSharp: {
  name: 'id_card_sharp';
  data: string;
} = {
  name: 'id_card_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="id-card-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M408 16H104a24 24 0 00-24 24v432a24 24 0 0024 24h304a24 24 0 0024-24V40a24 24 0 00-24-24zm-61.1 296.77a43 43 0 11-40.71-40.71 43 43 0 0140.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z"/></svg>`
};


@Component({
    selector: 'app-ionicon-id-card-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconIdCardSharp.data}
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
export class IoniconIdCardSharpComponent{}

@NgModule({
    declarations: [IoniconIdCardSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconIdCardSharpComponent
    ],
})
export class IoniconIdCardSharpModule {
}
