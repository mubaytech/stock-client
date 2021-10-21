
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNavigate: {
  name: 'navigate';
  data: string;
} = {
  name: 'navigate',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="navigate_svg__ionicon" viewBox="0 0 512 512"><path d="M272 464a16 16 0 01-16-16.42V264.13a8 8 0 00-8-8H64.41a16.31 16.31 0 01-15.49-10.65 16 16 0 018.41-19.87l384-176.15a16 16 0 0121.22 21.19l-176 384A16 16 0 01272 464z"/></svg>`
};


@Component({
    selector: 'app-ionicon-navigate',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNavigate.data}
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
export class IoniconNavigateComponent{}

@NgModule({
    declarations: [IoniconNavigateComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNavigateComponent
    ],
})
export class IoniconNavigateModule {
}
