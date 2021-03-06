
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlayOutline: {
  name: 'play_outline';
  data: string;
} = {
  name: 'play_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="play-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" class="play-outline_svg ionicon-fill-none  play-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-play-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPlayOutline.data}
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
export class IoniconPlayOutlineComponent{}

@NgModule({
    declarations: [IoniconPlayOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPlayOutlineComponent
    ],
})
export class IoniconPlayOutlineModule {
}
