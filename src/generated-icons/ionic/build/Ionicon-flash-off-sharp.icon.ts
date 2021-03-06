
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFlashOffSharp: {
  name: 'flash_off_sharp';
  data: string;
} = {
  name: 'flash_off_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="flash-off-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998zM80 304h144l-32 192 108.18-129.82-148.36-148.36L80 304zm352-96H288l32-192-108.18 129.82 148.36 148.36L432 208z"/></svg>`
};


@Component({
    selector: 'app-ionicon-flash-off-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFlashOffSharp.data}
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
export class IoniconFlashOffSharpComponent{}

@NgModule({
    declarations: [IoniconFlashOffSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFlashOffSharpComponent
    ],
})
export class IoniconFlashOffSharpModule {
}
