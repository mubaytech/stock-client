
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNotificationsCircle: {
  name: 'notifications_circle';
  data: string;
} = {
  name: 'notifications_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="notifications-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 014-4.42h71.45a4 4 0 014 4.48C293.15 374.85 276.68 384 256 384zm98-48H158c-11.84 0-18-15-11.19-23 16.33-19.34 27.87-27.47 27.87-80.8 0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 006.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.39 11.39 0 006.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.53 61.46 27.86 80.8 6.74 7.99.57 22.99-11.2 22.99z"/></svg>`
};


@Component({
    selector: 'app-ionicon-notifications-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNotificationsCircle.data}
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
export class IoniconNotificationsCircleComponent{}

@NgModule({
    declarations: [IoniconNotificationsCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNotificationsCircleComponent
    ],
})
export class IoniconNotificationsCircleModule {
}
