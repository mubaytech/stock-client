
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTabletLandscapeOutline: {
  name: 'tablet_landscape_outline';
  data: string;
} = {
  name: 'tablet_landscape_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="tablet-landscape-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="352" height="480" x="80" y="16" class="tablet-landscape-outline_svg ionicon-fill-none  tablet-landscape-outline_svg ionicon-stroke-width " rx="48" ry="48" transform="rotate(-90 256 256)"/></svg>`
};


@Component({
    selector: 'app-ionicon-tablet-landscape-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTabletLandscapeOutline.data}
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
export class IoniconTabletLandscapeOutlineComponent{}

@NgModule({
    declarations: [IoniconTabletLandscapeOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTabletLandscapeOutlineComponent
    ],
})
export class IoniconTabletLandscapeOutlineModule {
}
