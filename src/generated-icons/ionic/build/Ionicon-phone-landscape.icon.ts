
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPhoneLandscape: {
  name: 'phone_landscape';
  data: string;
} = {
  name: 'phone_landscape',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="phone-landscape_svg__ionicon" viewBox="0 0 512 512"><path d="M0 176v160a64 64 0 0064 64h384a64 64 0 0064-64V176a64 64 0 00-64-64H64a64 64 0 00-64 64zm448-32a32 32 0 0132 32v160a32 32 0 01-32 32H64a32 32 0 01-32-32v-11.35a7.94 7.94 0 014.75-7.3A32 32 0 0056 288v-64a32 32 0 00-19.25-29.35 7.94 7.94 0 01-4.75-7.3V176a32 32 0 0132-32z"/><path d="M48 176a11.88 11.88 0 004.69 9.53A48 48 0 0172 224v64a48 48 0 01-19.31 38.47A11.88 11.88 0 0048 336a16 16 0 0016 16h384a16 16 0 0016-16V176a16 16 0 00-16-16H64a16 16 0 00-16 16z"/><path d="M0 176v160a64 64 0 0064 64h384a64 64 0 0064-64V176a64 64 0 00-64-64H64a64 64 0 00-64 64zm448-32a32 32 0 0132 32v160a32 32 0 01-32 32H64a32 32 0 01-32-32v-11.35a7.94 7.94 0 014.75-7.3A32 32 0 0056 288v-64a32 32 0 00-19.25-29.35 7.94 7.94 0 01-4.75-7.3V176a32 32 0 0132-32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-phone-landscape',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPhoneLandscape.data}
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
export class IoniconPhoneLandscapeComponent{}

@NgModule({
    declarations: [IoniconPhoneLandscapeComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPhoneLandscapeComponent
    ],
})
export class IoniconPhoneLandscapeModule {
}
