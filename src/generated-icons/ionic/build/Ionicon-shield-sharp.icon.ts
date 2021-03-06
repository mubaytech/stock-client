
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconShieldSharp: {
  name: 'shield_sharp';
  data: string;
} = {
  name: 'shield_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="shield-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0071.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0071.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64z"/></svg>`
};


@Component({
    selector: 'app-ionicon-shield-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconShieldSharp.data}
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
export class IoniconShieldSharpComponent{}

@NgModule({
    declarations: [IoniconShieldSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconShieldSharpComponent
    ],
})
export class IoniconShieldSharpModule {
}
