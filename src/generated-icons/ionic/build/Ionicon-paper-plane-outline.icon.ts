
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPaperPlaneOutline: {
  name: 'paper_plane_outline';
  data: string;
} = {
  name: 'paper_plane_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="paper-plane-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M53.12 199.94l400-151.39a8 8 0 0110.33 10.33l-151.39 400a8 8 0 01-15-.34l-67.4-166.09a16 16 0 00-10.11-10.11L53.46 215a8 8 0 01-.34-15.06zM460 52L227 285" class="paper-plane-outline_svg ionicon-fill-none  paper-plane-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-paper-plane-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPaperPlaneOutline.data}
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
export class IoniconPaperPlaneOutlineComponent{}

@NgModule({
    declarations: [IoniconPaperPlaneOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPaperPlaneOutlineComponent
    ],
})
export class IoniconPaperPlaneOutlineModule {
}
