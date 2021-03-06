
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSearchCircleOutline: {
  name: 'search_circle_outline';
  data: string;
} = {
  name: 'search_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="search-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" class="search-circle-outline_svg ionicon-fill-none  search-circle-outline_svg ionicon-stroke-width "/><path d="M232 160a72 72 0 1072 72 72 72 0 00-72-72zM283.64 283.64L336 336" class="search-circle-outline_svg__ionicon-fill-none search-circle-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-search-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSearchCircleOutline.data}
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
export class IoniconSearchCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconSearchCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSearchCircleOutlineComponent
    ],
})
export class IoniconSearchCircleOutlineModule {
}
