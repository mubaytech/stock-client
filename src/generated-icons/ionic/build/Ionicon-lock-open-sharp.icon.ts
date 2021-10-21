
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLockOpenSharp: {
  name: 'lock_open_sharp';
  data: string;
} = {
  name: 'lock_open_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="lock-open-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M420 192H198v-80.75a58.08 58.08 0 0199.07-41.07A59.4 59.4 0 01314 112h38a96 96 0 10-192 0v80H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V204a12 12 0 00-12-12z"/></svg>`
};


@Component({
    selector: 'app-ionicon-lock-open-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLockOpenSharp.data}
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
export class IoniconLockOpenSharpComponent{}

@NgModule({
    declarations: [IoniconLockOpenSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLockOpenSharpComponent
    ],
})
export class IoniconLockOpenSharpModule {
}