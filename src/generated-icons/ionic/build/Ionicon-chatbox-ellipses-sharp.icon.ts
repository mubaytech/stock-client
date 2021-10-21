
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChatboxEllipsesSharp: {
  name: 'chatbox_ellipses_sharp';
  data: string;
} = {
  name: 'chatbox_ellipses_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chatbox-ellipses-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M456 48H56a24 24 0 00-24 24v288a24 24 0 0024 24h72v80l117.74-80H456a24 24 0 0024-24V72a24 24 0 00-24-24zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zM456 80z"/></svg>`
};


@Component({
    selector: 'app-ionicon-chatbox-ellipses-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChatboxEllipsesSharp.data}
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
export class IoniconChatboxEllipsesSharpComponent{}

@NgModule({
    declarations: [IoniconChatboxEllipsesSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChatboxEllipsesSharpComponent
    ],
})
export class IoniconChatboxEllipsesSharpModule {
}