
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMaleOutline: {
  name: 'male_outline';
  data: string;
} = {
  name: 'male_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="male-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="216" cy="296" r="152" class="male-outline_svg ionicon-fill-none  male-outline_svg ionicon-stroke-width "/><path d="M448 160V64h-96m-28 124L448 64" class="male-outline_svg__ionicon-fill-none male-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-male-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMaleOutline.data}
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
export class IoniconMaleOutlineComponent{}

@NgModule({
    declarations: [IoniconMaleOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMaleOutlineComponent
    ],
})
export class IoniconMaleOutlineModule {
}
