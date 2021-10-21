
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFilmOutline: {
  name: 'film_outline';
  data: string;
} = {
  name: 'film_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="film-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="416" height="320" x="48" y="96" class="film-outline_svg ionicon-fill-none  film-outline_svg ionicon-stroke-width " rx="28" ry="28"/><rect width="80" height="80" x="384" y="336" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="384" y="256" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="384" y="176" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="384" y="96" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="48" y="336" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="48" y="256" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="48" y="176" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="80" height="80" x="48" y="96" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="256" height="160" x="128" y="96" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><rect width="256" height="160" x="128" y="256" class="film-outline_svg__ionicon-fill-none film-outline_svg__ionicon-stroke-width" rx="28" ry="28"/></svg>`
};


@Component({
    selector: 'app-ionicon-film-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFilmOutline.data}
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
export class IoniconFilmOutlineComponent{}

@NgModule({
    declarations: [IoniconFilmOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFilmOutlineComponent
    ],
})
export class IoniconFilmOutlineModule {
}