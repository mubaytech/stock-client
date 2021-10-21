
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHeartDislikeSharp: {
  name: 'heart_dislike_sharp';
  data: string;
} = {
  name: 'heart_dislike_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="heart-dislike-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M32 64.45l389.47 389.94 22.84-22.47L54.85 42 32 64.45zm30.67 128.46c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 00-9.07 43.63zm355.16 156.88c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 00142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69z"/></svg>`
};


@Component({
    selector: 'app-ionicon-heart-dislike-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconHeartDislikeSharp.data}
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
export class IoniconHeartDislikeSharpComponent{}

@NgModule({
    declarations: [IoniconHeartDislikeSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconHeartDislikeSharpComponent
    ],
})
export class IoniconHeartDislikeSharpModule {
}
