
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPintOutline: {
  name: 'pint_outline';
  data: string;
} = {
  name: 'pint_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="pint-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0115.94-15h215.57a16 16 0 0115.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 01-8 8H184.12a8 8 0 01-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37zm2.78-66h241.58" class="pint-outline_svg ionicon-fill-none  pint-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-pint-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPintOutline.data}
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
export class IoniconPintOutlineComponent{}

@NgModule({
    declarations: [IoniconPintOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPintOutlineComponent
    ],
})
export class IoniconPintOutlineModule {
}
