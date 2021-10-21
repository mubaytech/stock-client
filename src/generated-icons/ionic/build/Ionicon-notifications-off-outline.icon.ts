
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNotificationsOffOutline: {
  name: 'notifications_off_outline';
  data: string;
} = {
  name: 'notifications_off_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="notifications-off-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M128.51 204.59q-.37 6.15-.37 12.76C128.14 304 110 320 84.33 351.43 73.69 364.45 83 384 101.62 384H320m94.5-48.7c-18.48-23.45-30.62-47.05-30.62-118 0-79.3-40.52-107.57-73.88-121.3-4.43-1.82-8.6-6-9.95-10.55C294.21 65.54 277.82 48 256 48s-38.2 17.55-44 37.47c-1.35 4.6-5.52 8.71-10 10.53a149.57 149.57 0 00-18 8.79M320 384v16a64 64 0 01-128 0v-16M448 448L64 64" class="notifications-off-outline_svg ionicon-fill-none  notifications-off-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-notifications-off-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNotificationsOffOutline.data}
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
export class IoniconNotificationsOffOutlineComponent{}

@NgModule({
    declarations: [IoniconNotificationsOffOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNotificationsOffOutlineComponent
    ],
})
export class IoniconNotificationsOffOutlineModule {
}
