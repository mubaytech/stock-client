
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAlbumsOutline: {
  name: 'albums_outline';
  data: string;
} = {
  name: 'albums_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="albums-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="384" height="256" x="64" y="176" class="albums-outline_svg ionicon-fill-none  albums-outline_svg ionicon-stroke-width " rx="28.87" ry="28.87"/><path d="M144 80h224m-256 48h288" class="albums-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-albums-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAlbumsOutline.data}
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
export class IoniconAlbumsOutlineComponent{}

@NgModule({
    declarations: [IoniconAlbumsOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAlbumsOutlineComponent
    ],
})
export class IoniconAlbumsOutlineModule {
}
