
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGitCommitSharp: {
  name: 'git_commit_sharp';
  data: string;
} = {
  name: 'git_commit_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="git-commit-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M480 224H380a128 128 0 00-247.9 0H32v64h100.05A128 128 0 00380 288h100zm-224 96a64 64 0 1164-64 64.07 64.07 0 01-64 64z"/></svg>`
};


@Component({
    selector: 'app-ionicon-git-commit-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconGitCommitSharp.data}
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
export class IoniconGitCommitSharpComponent{}

@NgModule({
    declarations: [IoniconGitCommitSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconGitCommitSharpComponent
    ],
})
export class IoniconGitCommitSharpModule {
}
