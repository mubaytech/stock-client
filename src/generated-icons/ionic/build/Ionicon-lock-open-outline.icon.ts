
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLockOpenOutline: {
  name: 'lock_open_outline';
  data: string;
} = {
  name: 'lock_open_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="lock-open-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M336 112a80 80 0 00-160 0v96" class="lock-open-outline_svg ionicon-fill-none  lock-open-outline_svg ionicon-stroke-width "/><rect width="320" height="272" x="96" y="208" class="lock-open-outline_svg__ionicon-fill-none lock-open-outline_svg__ionicon-stroke-width" rx="48" ry="48"/></svg>`
};


@Component({
    selector: 'app-ionicon-lock-open-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLockOpenOutline.data}
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
export class IoniconLockOpenOutlineComponent{}

@NgModule({
    declarations: [IoniconLockOpenOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLockOpenOutlineComponent
    ],
})
export class IoniconLockOpenOutlineModule {
}