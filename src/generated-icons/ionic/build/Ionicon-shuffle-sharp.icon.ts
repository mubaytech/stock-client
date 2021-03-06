
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconShuffleSharp: {
  name: 'shuffle_sharp';
  data: string;
} = {
  name: 'shuffle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="shuffle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M400 304l48 48-48 48m0-288l48 48-48 48M64 352h128l60-92" class="shuffle-sharp_svg ionicon-fill-none  shuffle-sharp_svg ionicon-stroke-width "/><path d="M64 160h128l128 192h96m0-192h-96l-32 48" class="shuffle-sharp_svg__ionicon-fill-none shuffle-sharp_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-shuffle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconShuffleSharp.data}
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
export class IoniconShuffleSharpComponent{}

@NgModule({
    declarations: [IoniconShuffleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconShuffleSharpComponent
    ],
})
export class IoniconShuffleSharpModule {
}
