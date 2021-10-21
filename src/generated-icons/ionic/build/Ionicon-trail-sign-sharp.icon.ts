
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTrailSignSharp: {
  name: 'trail_sign_sharp';
  data: string;
} = {
  name: 'trail_sign_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="trail-sign-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M502.63 336l-80-80H278v-32h170V64H278V32h-44v32H89.37l-80 80 80 80H234v32H64v160h170v64h44v-64h144.63z"/></svg>`
};


@Component({
    selector: 'app-ionicon-trail-sign-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTrailSignSharp.data}
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
export class IoniconTrailSignSharpComponent{}

@NgModule({
    declarations: [IoniconTrailSignSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTrailSignSharpComponent
    ],
})
export class IoniconTrailSignSharpModule {
}