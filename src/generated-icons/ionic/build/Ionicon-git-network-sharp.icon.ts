
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGitNetworkSharp: {
  name: 'git_network_sharp';
  data: string;
} = {
  name: 'git_network_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="git-network-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M384 32a64 64 0 00-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 10128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1064 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 000-128zM96 96a32 32 0 1132 32 32 32 0 01-32-32zm160 352a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-git-network-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconGitNetworkSharp.data}
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
export class IoniconGitNetworkSharpComponent{}

@NgModule({
    declarations: [IoniconGitNetworkSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconGitNetworkSharpComponent
    ],
})
export class IoniconGitNetworkSharpModule {
}