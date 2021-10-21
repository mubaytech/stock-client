
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAnalyticsOutline: {
  name: 'analytics_outline';
  data: string;
} = {
  name: 'analytics_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="analytics-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M344 280l88-88m-200 24l64 64M80 320l104-104" class="analytics-outline_svg ionicon-fill-none  analytics-outline_svg ionicon-stroke-width "/><circle cx="456" cy="168" r="24" class="analytics-outline_svg__ionicon-fill-none analytics-outline_svg__ionicon-stroke-width"/><circle cx="320" cy="304" r="24" class="analytics-outline_svg__ionicon-fill-none analytics-outline_svg__ionicon-stroke-width"/><circle cx="208" cy="192" r="24" class="analytics-outline_svg__ionicon-fill-none analytics-outline_svg__ionicon-stroke-width"/><circle cx="56" cy="344" r="24" class="analytics-outline_svg__ionicon-fill-none analytics-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-analytics-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAnalyticsOutline.data}
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
export class IoniconAnalyticsOutlineComponent{}

@NgModule({
    declarations: [IoniconAnalyticsOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAnalyticsOutlineComponent
    ],
})
export class IoniconAnalyticsOutlineModule {
}
