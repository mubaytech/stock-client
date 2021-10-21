
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFemale: {
  name: 'female';
  data: string;
} = {
  name: 'female',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="female_svg__ionicon" viewBox="0 0 512 512"><path d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-36a22 22 0 000 44h36v36a22 22 0 0044 0v-36h36a22 22 0 000-44h-36v-31.39c85.6-10.84 152-84.12 152-172.61zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130z"/></svg>`
};


@Component({
    selector: 'app-ionicon-female',
    template: `
    <div class="app-ionic-icon">
        ${IoniconFemale.data}
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
export class IoniconFemaleComponent{}

@NgModule({
    declarations: [IoniconFemaleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconFemaleComponent
    ],
})
export class IoniconFemaleModule {
}
