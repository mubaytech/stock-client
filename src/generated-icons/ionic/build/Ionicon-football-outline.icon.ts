
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFootballOutline: {
  name: 'football_outline';
  data: string;
} = {
  name: 'football_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="football-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="192" class="football-outline_svg ionicon-fill-none  football-outline_svg ionicon-stroke-width "/><path d="M256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zm76.09 63.83l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48-28 71m98.74-71H342m-142-48l-28 48 28.37 71.5M101.63 368H172" class="football-outline_svg__ionicon-fill-none football-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-football-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFootballOutline.data}
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
export class IoniconFootballOutlineComponent{}

@NgModule({
    declarations: [IoniconFootballOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFootballOutlineComponent
    ],
})
export class IoniconFootballOutlineModule {
}