
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRepeat: {
  name: 'repeat';
  data: string;
} = {
  name: 'repeat',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="repeat_svg__ionicon" viewBox="0 0 512 512"><path d="M320 120l48 48-48 48" class="repeat_svg ionicon-fill-none  repeat_svg ionicon-stroke-width "/><path d="M352 168H144a80.24 80.24 0 00-80 80v16m128 128l-48-48 48-48" class="repeat_svg__ionicon-fill-none repeat_svg__ionicon-stroke-width"/><path d="M160 344h208a80.24 80.24 0 0080-80v-16" class="repeat_svg__ionicon-fill-none repeat_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-repeat',
    template: `
    <div class="app-ionic-icon">
        ${IoniconRepeat.data}
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
export class IoniconRepeatComponent{}

@NgModule({
    declarations: [IoniconRepeatComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconRepeatComponent
    ],
})
export class IoniconRepeatModule {
}
