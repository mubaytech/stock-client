
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMenuSharp: {
  name: 'menu_sharp';
  data: string;
} = {
  name: 'menu_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="menu-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"/></svg>`
};


@Component({
    selector: 'app-ionicon-menu-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMenuSharp.data}
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
export class IoniconMenuSharpComponent{}

@NgModule({
    declarations: [IoniconMenuSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMenuSharpComponent
    ],
})
export class IoniconMenuSharpModule {
}
