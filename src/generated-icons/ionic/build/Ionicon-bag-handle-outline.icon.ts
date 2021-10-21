
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBagHandleOutline: {
  name: 'bag_handle_outline';
  data: string;
} = {
  name: 'bag_handle_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="bag-handle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96 96 96 0 0196 96v32" class="bag-handle-outline_svg ionicon-fill-none  bag-handle-outline_svg ionicon-stroke-width "/><path d="M160 224v16a96 96 0 0096 96 96 96 0 0096-96v-16" class="bag-handle-outline_svg__ionicon-fill-none bag-handle-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-bag-handle-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBagHandleOutline.data}
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
export class IoniconBagHandleOutlineComponent{}

@NgModule({
    declarations: [IoniconBagHandleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBagHandleOutlineComponent
    ],
})
export class IoniconBagHandleOutlineModule {
}
