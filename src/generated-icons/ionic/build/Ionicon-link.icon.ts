
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLink: {
  name: 'link';
  data: string;
} = {
  name: 'link',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="link_svg__ionicon" viewBox="0 0 512 512"><path d="M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66m-142.27-96h175.86" class="link_svg ionicon-fill-none "/></svg>`
};


@Component({
    selector: 'app-ionicon-link',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLink.data}
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
export class IoniconLinkComponent{}

@NgModule({
    declarations: [IoniconLinkComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLinkComponent
    ],
})
export class IoniconLinkModule {
}
