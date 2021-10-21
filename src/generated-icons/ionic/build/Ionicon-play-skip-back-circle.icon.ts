
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlaySkipBackCircle: {
  name: 'play_skip_back_circle';
  data: string;
} = {
  name: 'play_skip_back_circle',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="play-skip-back-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256zm128-64a16 16 0 0132 0v53l111.68-67.46a10.78 10.78 0 0116.32 9.33v138.26a10.78 10.78 0 01-16.32 9.31L208 267v53a16 16 0 01-32 0z"/></svg>`
};


@Component({
    selector: 'app-ionicon-play-skip-back-circle',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPlaySkipBackCircle.data}
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
export class IoniconPlaySkipBackCircleComponent{}

@NgModule({
    declarations: [IoniconPlaySkipBackCircleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPlaySkipBackCircleComponent
    ],
})
export class IoniconPlaySkipBackCircleModule {
}
