
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTransgenderOutline: {
  name: 'transgender_outline';
  data: string;
} = {
  name: 'transgender_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="transgender-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="128" class="transgender-outline_svg ionicon-fill-none  transgender-outline_svg ionicon-stroke-width "/><path d="M448 352l-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80m336 0L346.5 165.5M48 48l117.49 117.49M464 464L346.65 346.37" class="transgender-outline_svg__ionicon-fill-none transgender-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-transgender-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTransgenderOutline.data}
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
export class IoniconTransgenderOutlineComponent{}

@NgModule({
    declarations: [IoniconTransgenderOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTransgenderOutlineComponent
    ],
})
export class IoniconTransgenderOutlineModule {
}
