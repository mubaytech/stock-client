
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTerminalOutline: {
  name: 'terminal_outline';
  data: string;
} = {
  name: 'terminal_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="terminal-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="448" height="416" x="32" y="48" class="terminal-outline_svg ionicon-fill-none  terminal-outline_svg ionicon-stroke-width " rx="48" ry="48"/><path d="M96 112l80 64-80 64m96 0h64" class="terminal-outline_svg__ionicon-fill-none terminal-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-terminal-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTerminalOutline.data}
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
export class IoniconTerminalOutlineComponent{}

@NgModule({
    declarations: [IoniconTerminalOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTerminalOutlineComponent
    ],
})
export class IoniconTerminalOutlineModule {
}