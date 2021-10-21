
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAppsOutline: {
  name: 'apps_outline';
  data: string;
} = {
  name: 'apps_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="apps-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="80" height="80" x="64" y="64" class="apps-outline_svg ionicon-fill-none  apps-outline_svg ionicon-stroke-width " rx="40" ry="40"/><rect width="80" height="80" x="216" y="64" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="368" y="64" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="64" y="216" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="216" y="216" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="368" y="216" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="64" y="368" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="216" y="368" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/><rect width="80" height="80" x="368" y="368" class="apps-outline_svg__ionicon-fill-none apps-outline_svg__ionicon-stroke-width" rx="40" ry="40"/></svg>`
};


@Component({
    selector: 'app-ionicon-apps-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAppsOutline.data}
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
export class IoniconAppsOutlineComponent{}

@NgModule({
    declarations: [IoniconAppsOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAppsOutlineComponent
    ],
})
export class IoniconAppsOutlineModule {
}
