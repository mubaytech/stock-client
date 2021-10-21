
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTrendingDown: {
  name: 'trending_down';
  data: string;
} = {
  name: 'trending_down',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="trending-down_svg__ionicon" viewBox="0 0 512 512"><path d="M352 368h112V256" class="trending-down_svg ionicon-fill-none  trending-down_svg ionicon-stroke-width "/><path d="M48 144l121.37 121.37a32 32 0 0045.26 0l50.74-50.74a32 32 0 0145.26 0L448 352" class="trending-down_svg__ionicon-fill-none trending-down_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-trending-down',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTrendingDown.data}
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
export class IoniconTrendingDownComponent{}

@NgModule({
    declarations: [IoniconTrendingDownComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTrendingDownComponent
    ],
})
export class IoniconTrendingDownModule {
}