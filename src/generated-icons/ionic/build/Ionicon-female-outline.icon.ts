
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFemaleOutline: {
  name: 'female_outline';
  data: string;
} = {
  name: 'female_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="female-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="184" r="152" class="female-outline_svg ionicon-fill-none  female-outline_svg ionicon-stroke-width "/><path d="M256 336v144m58-64H198" class="female-outline_svg__ionicon-fill-none female-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-female-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFemaleOutline.data}
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
export class IoniconFemaleOutlineComponent{}

@NgModule({
    declarations: [IoniconFemaleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFemaleOutlineComponent
    ],
})
export class IoniconFemaleOutlineModule {
}
