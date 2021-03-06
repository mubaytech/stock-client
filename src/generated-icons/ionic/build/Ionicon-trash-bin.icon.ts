
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTrashBin: {
  name: 'trash_bin';
  data: string;
} = {
  name: 'trash_bin',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="trash-bin_svg__ionicon" viewBox="0 0 512 512"><rect width="448" height="80" x="32" y="48" rx="32" ry="32"/><path d="M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z"/></svg>`
};


@Component({
    selector: 'app-ionicon-trash-bin',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTrashBin.data}
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
export class IoniconTrashBinComponent{}

@NgModule({
    declarations: [IoniconTrashBinComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTrashBinComponent
    ],
})
export class IoniconTrashBinModule {
}
