
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChatboxEllipses: {
  name: 'chatbox_ellipses';
  data: string;
} = {
  name: 'chatbox_ellipses',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="chatbox-ellipses_svg__ionicon" viewBox="0 0 512 512"><path d="M408 48H104a72.08 72.08 0 00-72 72v192a72.08 72.08 0 0072 72h24v64a16 16 0 0026.25 12.29L245.74 384H408a72.08 72.08 0 0072-72V120a72.08 72.08 0 00-72-72zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-chatbox-ellipses',
    template: `
    <div class="app-ionic-icon">
        ${IoniconChatboxEllipses.data}
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
export class IoniconChatboxEllipsesComponent{}

@NgModule({
    declarations: [IoniconChatboxEllipsesComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconChatboxEllipsesComponent
    ],
})
export class IoniconChatboxEllipsesModule {
}
