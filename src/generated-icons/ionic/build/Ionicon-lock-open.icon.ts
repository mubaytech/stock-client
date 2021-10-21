
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLockOpen: {
  name: 'lock_open';
  data: string;
} = {
  name: 'lock_open',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="lock-open_svg__ionicon" viewBox="0 0 512 512"><path d="M368 192H192v-80a64 64 0 11128 0 16 16 0 0032 0 96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64z"/></svg>`
};


@Component({
    selector: 'app-ionicon-lock-open',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLockOpen.data}
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
export class IoniconLockOpenComponent{}

@NgModule({
    declarations: [IoniconLockOpenComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLockOpenComponent
    ],
})
export class IoniconLockOpenModule {
}
