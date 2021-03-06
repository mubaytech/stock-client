
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAtOutline: {
  name: 'at_outline';
  data: string;
} = {
  name: 'at_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="at-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80z" class="at-outline_svg ionicon-fill-none  at-outline_svg ionicon-stroke-width "/><path d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" class="at-outline_svg__ionicon-fill-none at-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-at-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAtOutline.data}
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
export class IoniconAtOutlineComponent{}

@NgModule({
    declarations: [IoniconAtOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAtOutlineComponent
    ],
})
export class IoniconAtOutlineModule {
}
