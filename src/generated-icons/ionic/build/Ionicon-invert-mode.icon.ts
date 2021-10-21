
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInvertMode: {
  name: 'invert_mode';
  data: string;
} = {
  name: 'invert_mode',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="invert-mode_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" class="invert-mode_svg ionicon-fill-none  invert-mode_svg ionicon-stroke-width "/><path d="M256 176v160a80 80 0 000-160zm0-128v128a80 80 0 000 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg>`
};


@Component({
    selector: 'app-ionicon-invert-mode',
    template: `
    <div class="app-ionic-icon">
        ${IoniconInvertMode.data}
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
export class IoniconInvertModeComponent{}

@NgModule({
    declarations: [IoniconInvertModeComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconInvertModeComponent
    ],
})
export class IoniconInvertModeModule {
}