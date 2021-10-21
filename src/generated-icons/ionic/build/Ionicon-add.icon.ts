
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAdd: {
  name: 'add';
  data: string;
} = {
  name: 'add',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="add_svg__ionicon" viewBox="0 0 512 512"><path d="M256 112v288m144-144H112" class="add_svg ionicon-fill-none  add_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-add',
    template: `
    <div class="app-ionic-icon">
        ${IoniconAdd.data}
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
export class IoniconAddComponent{}

@NgModule({
    declarations: [IoniconAddComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconAddComponent
    ],
})
export class IoniconAddModule {
}
