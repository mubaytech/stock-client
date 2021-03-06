
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBicycleOutline: {
  name: 'bicycle_outline';
  data: string;
} = {
  name: 'bicycle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bicycle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zm-264 0a76 76 0 1076 76 76.24 76.24 0 00-76-76zM256 360v-86l-64-42 80-88 40 72h56" class="bicycle-outline_svg ionicon-fill-none  bicycle-outline_svg ionicon-stroke-width "/><path d="M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z"/></svg>`
};


@Component({
    selector: 'app-ionicon-bicycle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBicycleOutline.data}
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
export class IoniconBicycleOutlineComponent{}

@NgModule({
    declarations: [IoniconBicycleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBicycleOutlineComponent
    ],
})
export class IoniconBicycleOutlineModule {
}
