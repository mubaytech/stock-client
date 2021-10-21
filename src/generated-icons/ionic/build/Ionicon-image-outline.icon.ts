
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconImageOutline: {
  name: 'image_outline';
  data: string;
} = {
  name: 'image_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="image-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="416" height="352" x="48" y="80" class="image-outline_svg ionicon-fill-none  image-outline_svg ionicon-stroke-width " rx="48" ry="48"/><circle cx="336" cy="176" r="32" class="image-outline_svg__ionicon-fill-none image-outline_svg__ionicon-stroke-width"/><path d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0143.11-2L464 368" class="image-outline_svg__ionicon-fill-none image-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-image-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconImageOutline.data}
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
export class IoniconImageOutlineComponent{}

@NgModule({
    declarations: [IoniconImageOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconImageOutlineComponent
    ],
})
export class IoniconImageOutlineModule {
}
