
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogOut: {
  name: 'log_out';
  data: string;
} = {
  name: 'log_out',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="log-out_svg__ionicon" viewBox="0 0 512 512"><path d="M160 256a16 16 0 0116-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h160a56.06 56.06 0 0056-56V272H176a16 16 0 01-16-16zm299.31-11.31l-80-80a16 16 0 00-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1022.62 22.62l80-80a16 16 0 000-22.62z"/></svg>`
};


@Component({
    selector: 'app-ionicon-log-out',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogOut.data}
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
export class IoniconLogOutComponent{}

@NgModule({
    declarations: [IoniconLogOutComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogOutComponent
    ],
})
export class IoniconLogOutModule {
}
