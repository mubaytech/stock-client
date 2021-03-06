
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLocationSharp: {
  name: 'location_sharp';
  data: string;
} = {
  name: 'location_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="location-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"/></svg>`
};


@Component({
    selector: 'app-ionicon-location-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLocationSharp.data}
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
export class IoniconLocationSharpComponent{}

@NgModule({
    declarations: [IoniconLocationSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLocationSharpComponent
    ],
})
export class IoniconLocationSharpModule {
}
