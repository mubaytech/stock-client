
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEllipsisVerticalOutline: {
  name: 'ellipsis_vertical_outline';
  data: string;
} = {
  name: 'ellipsis_vertical_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="ellipsis-vertical-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32" class="ellipsis-vertical-outline_svg ionicon-fill-none  ellipsis-vertical-outline_svg ionicon-stroke-width "/><circle cx="256" cy="416" r="32" class="ellipsis-vertical-outline_svg__ionicon-fill-none ellipsis-vertical-outline_svg__ionicon-stroke-width"/><circle cx="256" cy="96" r="32" class="ellipsis-vertical-outline_svg__ionicon-fill-none ellipsis-vertical-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-ellipsis-vertical-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconEllipsisVerticalOutline.data}
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
export class IoniconEllipsisVerticalOutlineComponent{}

@NgModule({
    declarations: [IoniconEllipsisVerticalOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconEllipsisVerticalOutlineComponent
    ],
})
export class IoniconEllipsisVerticalOutlineModule {
}
