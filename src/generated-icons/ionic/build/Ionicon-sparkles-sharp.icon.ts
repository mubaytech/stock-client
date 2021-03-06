
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSparklesSharp: {
  name: 'sparkles_sharp';
  data: string;
} = {
  name: 'sparkles_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="sparkles-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M208 512l-52.38-139.62L16 320l139.62-52.38L208 128l52.38 139.62L400 320l-139.62 52.38zM88 176l-23.57-64.43L0 88l64.43-23.57L88 0l23.57 64.43L176 88l-64.43 23.57zm312 80l-31.11-80.89L288 144l80.89-31.11L400 32l31.11 80.89L512 144l-80.89 31.11z"/></svg>`
};


@Component({
    selector: 'app-ionicon-sparkles-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconSparklesSharp.data}
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
export class IoniconSparklesSharpComponent{}

@NgModule({
    declarations: [IoniconSparklesSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconSparklesSharpComponent
    ],
})
export class IoniconSparklesSharpModule {
}
