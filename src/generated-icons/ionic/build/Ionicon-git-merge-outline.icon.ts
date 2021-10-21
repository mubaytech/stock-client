
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGitMergeOutline: {
  name: 'git_merge_outline';
  data: string;
} = {
  name: 'git_merge_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="git-merge-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="129" cy="96" r="48" class="git-merge-outline_svg ionicon-fill-none  git-merge-outline_svg ionicon-stroke-width "/><circle cx="129" cy="416" r="48" class="git-merge-outline_svg__ionicon-fill-none git-merge-outline_svg__ionicon-stroke-width"/><path d="M129 144v224" class="git-merge-outline_svg__ionicon-fill-none git-merge-outline_svg__ionicon-stroke-width"/><circle cx="385" cy="288" r="48" class="git-merge-outline_svg__ionicon-fill-none git-merge-outline_svg__ionicon-stroke-width"/><path d="M129 144c0 96 112 144 208 144" class="git-merge-outline_svg__ionicon-fill-none git-merge-outline_svg__ionicon-stroke-width"/></svg>`
};


@Component({
    selector: 'app-ionicon-git-merge-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconGitMergeOutline.data}
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
export class IoniconGitMergeOutlineComponent{}

@NgModule({
    declarations: [IoniconGitMergeOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconGitMergeOutlineComponent
    ],
})
export class IoniconGitMergeOutlineModule {
}
