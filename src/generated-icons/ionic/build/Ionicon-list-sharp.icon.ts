
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconListSharp: {
  name: 'list_sharp';
  data: string;
} = {
  name: 'list_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="list-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M144 144h320M144 256h320M144 368h320" class="list-sharp_svg ionicon-fill-none "/><path d="M64 128h32v32H64zm0 112h32v32H64zm0 112h32v32H64z" class="list-sharp_svg__ionicon-fill-none list-sharp_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-list-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconListSharp.data}
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
export class IoniconListSharpComponent{}

@NgModule({
    declarations: [IoniconListSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconListSharpComponent
    ],
})
export class IoniconListSharpModule {
}