
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMaleFemaleOutline: {
  name: 'male_female_outline';
  data: string;
} = {
  name: 'male_female_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="male-female-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="216" cy="200" r="136" class="male-female-outline_svg ionicon-fill-none  male-female-outline_svg ionicon-stroke-width "/><path d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32" class="male-female-outline_svg__ionicon-fill-none male-female-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-male-female-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMaleFemaleOutline.data}
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
export class IoniconMaleFemaleOutlineComponent{}

@NgModule({
    declarations: [IoniconMaleFemaleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMaleFemaleOutlineComponent
    ],
})
export class IoniconMaleFemaleOutlineModule {
}
