
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAlertCircleSharp: {
  name: 'alert_circle_sharp';
  data: string;
} = {
  name: 'alert_circle_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="alert-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M240 304h32l6-160h-44l6 160z" class="alert-circle-sharp_svg ionicon-fill-none "/><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-alert-circle-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAlertCircleSharp.data}
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
export class IoniconAlertCircleSharpComponent{}

@NgModule({
    declarations: [IoniconAlertCircleSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAlertCircleSharpComponent
    ],
})
export class IoniconAlertCircleSharpModule {
}
