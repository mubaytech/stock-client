
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNotificationsOffCircle: {
  name: 'notifications_off_circle';
  data: string;
} = {
  name: 'notifications_off_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="notifications-off-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zM146.83 313c16.33-19.34 27.86-27.47 27.86-80.8q0-3.75.2-7.26a4 4 0 017-2.52l98 106.87a4 4 0 01-2.94 6.7H158C146.18 336 140.06 321 146.83 313zm148.93 43.41C293.53 375.14 276.92 384 256 384s-37.51-8.86-39.75-27.58a4 4 0 014-4.42h71.53a4 4 0 013.98 4.42zm67 17.42a16 16 0 01-22.6-1.08l-192-212a16 16 0 0123.68-21.52l192 212a16 16 0 01-1.08 22.61zM361 323.21L216.49 165.53a4 4 0 011.3-6.36c1.31-.58 2.61-1.12 3.89-1.63a11.33 11.33 0 006.32-6.68c3.72-12.26 14.15-22.86 28-22.86s24.29 10.6 28 22.86a11.34 11.34 0 006.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.54 61.46 27.87 80.8a12.09 12.09 0 012.76 7.25 4 4 0 01-6.97 2.95z"/></svg>`
};


@Component({
    selector: 'app-ionicon-notifications-off-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNotificationsOffCircle.data}
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
export class IoniconNotificationsOffCircleComponent{}

@NgModule({
    declarations: [IoniconNotificationsOffCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNotificationsOffCircleComponent
    ],
})
export class IoniconNotificationsOffCircleModule {
}
