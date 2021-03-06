
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFemaleSharp: {
  name: 'female_sharp';
  data: string;
} = {
  name: 'female_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="female-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-58v44h58v58h44v-58h58v-44h-58v-31.39c85.6-10.84 152-84.12 152-172.61zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130z"/></svg>`
};


@Component({
    selector: 'app-ionicon-female-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFemaleSharp.data}
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
export class IoniconFemaleSharpComponent{}

@NgModule({
    declarations: [IoniconFemaleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFemaleSharpComponent
    ],
})
export class IoniconFemaleSharpModule {
}
