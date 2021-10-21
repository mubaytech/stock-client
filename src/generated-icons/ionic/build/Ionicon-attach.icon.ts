
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAttach: {
  name: 'attach';
  data: string;
} = {
  name: 'attach',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="attach_svg__ionicon" viewBox="0 0 512 512"><path d="M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" class="attach_svg ionicon-fill-none  attach_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-attach',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAttach.data}
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
export class IoniconAttachComponent{}

@NgModule({
    declarations: [IoniconAttachComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAttachComponent
    ],
})
export class IoniconAttachModule {
}