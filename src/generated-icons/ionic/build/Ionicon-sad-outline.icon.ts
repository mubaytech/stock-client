
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSadOutline: {
  name: 'sad_outline';
  data: string;
} = {
  name: 'sad_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="sad-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="184" cy="232" r="24"/><path d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z"/><circle cx="328" cy="232" r="24"/><circle cx="256" cy="256" r="208" class="sad-outline_svg ionicon-fill-none  sad-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-sad-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSadOutline.data}
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
export class IoniconSadOutlineComponent{}

@NgModule({
    declarations: [IoniconSadOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSadOutlineComponent
    ],
})
export class IoniconSadOutlineModule {
}
