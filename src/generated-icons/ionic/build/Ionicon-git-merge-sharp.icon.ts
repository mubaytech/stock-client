
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGitMergeSharp: {
  name: 'git_merge_sharp';
  data: string;
} = {
  name: 'git_merge_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="git-merge-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M384 224a63.66 63.66 0 00-37.95 12.5L160 153.36v-2a64 64 0 10-64 0v209.25a64 64 0 1064 0V223.46l160.41 71.69A64 64 0 10384 224zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};


@Component({
    selector: 'app-ionicon-git-merge-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconGitMergeSharp.data}
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
export class IoniconGitMergeSharpComponent{}

@NgModule({
    declarations: [IoniconGitMergeSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconGitMergeSharpComponent
    ],
})
export class IoniconGitMergeSharpModule {
}