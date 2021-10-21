
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInfiniteOutline: {
  name: 'infinite_outline';
  data: string;
} = {
  name: 'infinite_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="infinite-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48m32-48s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48" class="infinite-outline_svg ionicon-fill-none  infinite-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-infinite-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconInfiniteOutline.data}
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
export class IoniconInfiniteOutlineComponent{}

@NgModule({
    declarations: [IoniconInfiniteOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconInfiniteOutlineComponent
    ],
})
export class IoniconInfiniteOutlineModule {
}
