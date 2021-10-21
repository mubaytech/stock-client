
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoBitbucket: {
  name: 'logo_bitbucket';
  data: string;
} = {
  name: 'logo_bitbucket',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-bitbucket_svg__ionicon" viewBox="0 0 512 512"><path d="M483.13 32.23a19.65 19.65 0 00-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.44 11.44 0 00.23 2.8l65.3 411.25a22.52 22.52 0 007 12.95A20 20 0 00102 480h313.18a15.45 15.45 0 0015.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-bitbucket',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoBitbucket.data}
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
export class IoniconLogoBitbucketComponent{}

@NgModule({
    declarations: [IoniconLogoBitbucketComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoBitbucketComponent
    ],
})
export class IoniconLogoBitbucketModule {
}
