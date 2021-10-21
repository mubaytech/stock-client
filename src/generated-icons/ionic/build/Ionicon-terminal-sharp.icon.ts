
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTerminalSharp: {
  name: 'terminal_sharp';
  data: string;
} = {
  name: 'terminal_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="terminal-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M16 44v424a12 12 0 0012 12h456a12 12 0 0012-12V44a12 12 0 00-12-12H28a12 12 0 00-12 12zm57.51 193.5l76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49zM272 256h-96v-32h96z"/></svg>`
};


@Component({
    selector: 'app-ionicon-terminal-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTerminalSharp.data}
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
export class IoniconTerminalSharpComponent{}

@NgModule({
    declarations: [IoniconTerminalSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTerminalSharpComponent
    ],
})
export class IoniconTerminalSharpModule {
}
