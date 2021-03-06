
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMoonSharp: {
  name: 'moon_sharp';
  data: string;
} = {
  name: 'moon_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="moon-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"/></svg>`
};


@Component({
    selector: 'app-ionicon-moon-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMoonSharp.data}
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
export class IoniconMoonSharpComponent{}

@NgModule({
    declarations: [IoniconMoonSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMoonSharpComponent
    ],
})
export class IoniconMoonSharpModule {
}
