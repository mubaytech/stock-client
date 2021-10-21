
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEllipse: {
  name: 'ellipse';
  data: string;
} = {
  name: 'ellipse',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="ellipse_svg__ionicon" viewBox="0 0 512 512"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"/></svg>`
};


@Component({
    selector: 'app-ionicon-ellipse',
    template: `
    <div class="app-ionic-icon">
        ${IoniconEllipse.data}
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
export class IoniconEllipseComponent{}

@NgModule({
    declarations: [IoniconEllipseComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconEllipseComponent
    ],
})
export class IoniconEllipseModule {
}