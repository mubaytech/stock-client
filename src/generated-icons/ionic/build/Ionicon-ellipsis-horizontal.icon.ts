
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEllipsisHorizontal: {
  name: 'ellipsis_horizontal';
  data: string;
} = {
  name: 'ellipsis_horizontal',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="ellipsis-horizontal_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="48"/><circle cx="416" cy="256" r="48"/><circle cx="96" cy="256" r="48"/></svg>`
};


@Component({
    selector: 'app-ionicon-ellipsis-horizontal',
    template: `
    <div class="app-ionic-icon">
        ${IoniconEllipsisHorizontal.data}
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
export class IoniconEllipsisHorizontalComponent{}

@NgModule({
    declarations: [IoniconEllipsisHorizontalComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconEllipsisHorizontalComponent
    ],
})
export class IoniconEllipsisHorizontalModule {
}
