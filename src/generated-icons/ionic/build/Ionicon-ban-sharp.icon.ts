
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBanSharp: {
  name: 'ban_sharp';
  data: string;
} = {
  name: 'ban_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="ban-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM432 256a175.09 175.09 0 01-35.8 106.26L149.74 115.8A175.09 175.09 0 01256 80c97.05 0 176 79 176 176zm-352 0a175.09 175.09 0 0135.8-106.26L362.26 396.2A175.09 175.09 0 01256 432c-97 0-176-78.95-176-176z"/></svg>`
};


@Component({
    selector: 'app-ionicon-ban-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBanSharp.data}
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
export class IoniconBanSharpComponent{}

@NgModule({
    declarations: [IoniconBanSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBanSharpComponent
    ],
})
export class IoniconBanSharpModule {
}