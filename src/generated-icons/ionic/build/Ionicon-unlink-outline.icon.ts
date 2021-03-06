
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconUnlinkOutline: {
  name: 'unlink_outline';
  data: string;
} = {
  name: 'unlink_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="unlink-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64" class="unlink-outline_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-unlink-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconUnlinkOutline.data}
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
export class IoniconUnlinkOutlineComponent{}

@NgModule({
    declarations: [IoniconUnlinkOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconUnlinkOutlineComponent
    ],
})
export class IoniconUnlinkOutlineModule {
}
