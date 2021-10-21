
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChatboxOutline: {
  name: 'chatbox_outline';
  data: string;
} = {
  name: 'chatbox_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chatbox-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" class="chatbox-outline_svg ionicon-fill-none  chatbox-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-chatbox-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChatboxOutline.data}
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
export class IoniconChatboxOutlineComponent{}

@NgModule({
    declarations: [IoniconChatboxOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChatboxOutlineComponent
    ],
})
export class IoniconChatboxOutlineModule {
}
