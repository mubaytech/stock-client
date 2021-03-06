
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCafeOutline: {
  name: 'cafe_outline';
  data: string;
} = {
  name: 'cafe_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="cafe-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M368 80h64a16 16 0 0116 16v34a46 46 0 01-46 46h-34M96 80h272v192a80 80 0 01-80 80H176a80 80 0 01-80-80V80zM64 416h336" class="cafe-outline_svg ionicon-fill-none  cafe-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-cafe-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconCafeOutline.data}
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
export class IoniconCafeOutlineComponent{}

@NgModule({
    declarations: [IoniconCafeOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconCafeOutlineComponent
    ],
})
export class IoniconCafeOutlineModule {
}
