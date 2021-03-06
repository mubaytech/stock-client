
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoDesignernews: {
  name: 'logo_designernews';
  data: string;
} = {
  name: 'logo_designernews',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-designernews_svg__ionicon" viewBox="0 0 512 512"><path d="M295.31 122.8L222.86 64l72.68 122.64-.23-63.84z"/><path d="M339.43 64v195.6h-41.6L225.6 141.28l1.94 118.32h-45.83V131.2L139.09 96c1.14 1.44 2.28 2.88 3.31 4.44 11.43 16.68 17.14 36.6 17.14 60.6 0 59-35 98.52-87.88 98.52H0v.48L228.11 448H512V205.72z"/><path d="M111.89 162.52c0-34.8-16.23-54.12-45.38-54.12H44.57v106.8h21.72c29.71 0 45.6-18.48 45.6-52.68z"/></svg>`
};


@Component({
    selector: 'app-ionicon-logo-designernews',
    template: `
    <div class="app-ionic-icon">
        ${IoniconLogoDesignernews.data}
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
export class IoniconLogoDesignernewsComponent{}

@NgModule({
    declarations: [IoniconLogoDesignernewsComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconLogoDesignernewsComponent
    ],
})
export class IoniconLogoDesignernewsModule {
}
