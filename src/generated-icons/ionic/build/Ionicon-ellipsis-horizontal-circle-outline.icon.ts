
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEllipsisHorizontalCircleOutline: {
  name: 'ellipsis_horizontal_circle_outline';
  data: string;
} = {
  name: 'ellipsis_horizontal_circle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="ellipsis-horizontal-circle-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="26"/><circle cx="346" cy="256" r="26"/><circle cx="166" cy="256" r="26"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="ellipsis-horizontal-circle-outline_svg ionicon-fill-none  ellipsis-horizontal-circle-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-ellipsis-horizontal-circle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconEllipsisHorizontalCircleOutline.data}
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
export class IoniconEllipsisHorizontalCircleOutlineComponent{}

@NgModule({
    declarations: [IoniconEllipsisHorizontalCircleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconEllipsisHorizontalCircleOutlineComponent
    ],
})
export class IoniconEllipsisHorizontalCircleOutlineModule {
}
