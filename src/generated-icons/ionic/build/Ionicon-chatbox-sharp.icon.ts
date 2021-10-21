
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChatboxSharp: {
  name: 'chatbox_sharp';
  data: string;
} = {
  name: 'chatbox_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chatbox-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M128 464v-80H56a24 24 0 01-24-24V72a24 24 0 0124-24h400a24 24 0 0124 24v288a24 24 0 01-24 24H245.74zM456 80z"/></svg>`
};


@Component({
    selector: 'app-ionicon-chatbox-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChatboxSharp.data}
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
export class IoniconChatboxSharpComponent{}

@NgModule({
    declarations: [IoniconChatboxSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChatboxSharpComponent
    ],
})
export class IoniconChatboxSharpModule {
}
