
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPencilOutline: {
  name: 'pencil_outline';
  data: string;
} = {
  name: 'pencil_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="pencil-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zm56.56-56.56l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62 16 16 0 00-22.62 0z" class="pencil-outline_svg ionicon-fill-none  pencil-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-pencil-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPencilOutline.data}
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
export class IoniconPencilOutlineComponent{}

@NgModule({
    declarations: [IoniconPencilOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPencilOutlineComponent
    ],
})
export class IoniconPencilOutlineModule {
}
