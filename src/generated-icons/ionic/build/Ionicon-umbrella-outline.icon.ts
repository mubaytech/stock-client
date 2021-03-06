
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconUmbrellaOutline: {
  name: 'umbrella_outline';
  data: string;
} = {
  name: 'umbrella_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="umbrella-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 272v160a32 32 0 01-32 32 32 32 0 01-32-32m272-160c0-114.88-93.12-208-208-208S48 157.12 48 272a67.88 67.88 0 0196 0 78.28 78.28 0 01102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 01368 272a67.88 67.88 0 0196 0zM256 64V48" class="umbrella-outline_svg ionicon-fill-none  umbrella-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-umbrella-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconUmbrellaOutline.data}
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
export class IoniconUmbrellaOutlineComponent{}

@NgModule({
    declarations: [IoniconUmbrellaOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconUmbrellaOutlineComponent
    ],
})
export class IoniconUmbrellaOutlineModule {
}
