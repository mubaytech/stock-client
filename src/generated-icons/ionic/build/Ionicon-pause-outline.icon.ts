
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPauseOutline: {
  name: 'pause_outline';
  data: string;
} = {
  name: 'pause_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="pause-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M176 96h16v320h-16zm144 0h16v320h-16z" class="pause-outline_svg ionicon-fill-none  pause-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-pause-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPauseOutline.data}
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
export class IoniconPauseOutlineComponent{}

@NgModule({
    declarations: [IoniconPauseOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPauseOutlineComponent
    ],
})
export class IoniconPauseOutlineModule {
}
