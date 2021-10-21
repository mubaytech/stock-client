
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlayCircleSharp: {
  name: 'play_circle_sharp';
  data: string;
} = {
  name: 'play_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="play-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z"/></svg>`
};


@Component({
    selector: 'app-ionicon-play-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPlayCircleSharp.data}
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
export class IoniconPlayCircleSharpComponent{}

@NgModule({
    declarations: [IoniconPlayCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPlayCircleSharpComponent
    ],
})
export class IoniconPlayCircleSharpModule {
}