
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconNuclear: {
  name: 'nuclear';
  data: string;
} = {
  name: 'nuclear',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="nuclear_svg__ionicon" viewBox="0 0 512 512"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zM429 239.92l-93.08-.1a2 2 0 01-1.95-1.57 80.08 80.08 0 00-27.44-44.17 2 2 0 01-.54-2.43l41.32-83.43a2 2 0 012.87-.81A176.2 176.2 0 01431 237.71a2 2 0 01-2 2.21zm-220.8 20.46a48 48 0 1143.42 43.42 48 48 0 01-43.42-43.42zm-43.55-152.16L206 191.65a2 2 0 01-.54 2.43A80.08 80.08 0 00178 238.25a2 2 0 01-2 1.57l-93.08.1a2 2 0 01-2-2.21 176.2 176.2 0 0180.82-130.3 2 2 0 012.91.81zm-.37 295.34l56.31-74.09a2 2 0 012.43-.6 79.84 79.84 0 0066 0 2 2 0 012.43.6l56.31 74.09a2 2 0 01-.54 2.92 175.65 175.65 0 01-182.36 0 2 2 0 01-.58-2.92z"/></svg>`
};


@Component({
    selector: 'app-ionicon-nuclear',
    template: `
    <div class="app-ionic-icon">
        ${IoniconNuclear.data}
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
export class IoniconNuclearComponent{}

@NgModule({
    declarations: [IoniconNuclearComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconNuclearComponent
    ],
})
export class IoniconNuclearModule {
}
