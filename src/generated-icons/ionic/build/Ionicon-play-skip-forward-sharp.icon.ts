
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlaySkipForwardSharp: {
  name: 'play_skip_forward_sharp';
  data: string;
} = {
  name: 'play_skip_forward_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="play-skip-forward-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z"/></svg>`
};


@Component({
    selector: 'app-ionicon-play-skip-forward-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPlaySkipForwardSharp.data}
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
export class IoniconPlaySkipForwardSharpComponent{}

@NgModule({
    declarations: [IoniconPlaySkipForwardSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPlaySkipForwardSharpComponent
    ],
})
export class IoniconPlaySkipForwardSharpModule {
}
