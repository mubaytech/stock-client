
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBackspaceSharp: {
  name: 'backspace_sharp';
  data: string;
} = {
  name: 'backspace_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="backspace-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M144 96L32 256l112 160h304V96zm215.3 226.34L336.67 345l-65-65-65 65L184 322.34l65-65-65-65 22.63-22.63 65 65 65-65 22.63 22.63-65 65z"/></svg>`
};


@Component({
    selector: 'app-ionicon-backspace-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconBackspaceSharp.data}
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
export class IoniconBackspaceSharpComponent{}

@NgModule({
    declarations: [IoniconBackspaceSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconBackspaceSharpComponent
    ],
})
export class IoniconBackspaceSharpModule {
}