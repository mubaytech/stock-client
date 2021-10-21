
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPeopleSharp: {
  name: 'people_sharp';
  data: string;
} = {
  name: 'people_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="people-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="152" cy="184" r="72"/><path d="M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34z"/><path d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96z"/><circle cx="340" cy="168" r="88"/></svg>`
};


@Component({
    selector: 'app-ionicon-people-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPeopleSharp.data}
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
export class IoniconPeopleSharpComponent{}

@NgModule({
    declarations: [IoniconPeopleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPeopleSharpComponent
    ],
})
export class IoniconPeopleSharpModule {
}
