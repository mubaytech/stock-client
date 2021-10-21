
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBagCheck: {
  name: 'bag_check';
  data: string;
} = {
  name: 'bag_check',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bag-check_svg__ionicon" viewBox="0 0 512 512"><path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM332.49 274l-89.6 112a16 16 0 01-12.23 6h-.26a16 16 0 01-12.16-5.6l-38.4-44.88a16 16 0 1124.32-20.8L230 350.91 307.51 254a16 16 0 0125 20zM336 160H176v-16a80 80 0 01160 0z"/></svg>`
};


@Component({
    selector: 'app-ionicon-bag-check',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBagCheck.data}
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
export class IoniconBagCheckComponent{}

@NgModule({
    declarations: [IoniconBagCheckComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBagCheckComponent
    ],
})
export class IoniconBagCheckModule {
}