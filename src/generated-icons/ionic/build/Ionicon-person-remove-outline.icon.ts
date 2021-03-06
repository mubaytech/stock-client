
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPersonRemoveOutline: {
  name: 'person_remove_outline';
  data: string;
} = {
  name: 'person_remove_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="person-remove-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96zM288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304zM144 232H32" class="person-remove-outline_svg ionicon-fill-none  person-remove-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-person-remove-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconPersonRemoveOutline.data}
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
export class IoniconPersonRemoveOutlineComponent{}

@NgModule({
    declarations: [IoniconPersonRemoveOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconPersonRemoveOutlineComponent
    ],
})
export class IoniconPersonRemoveOutlineModule {
}
