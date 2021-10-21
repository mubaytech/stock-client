
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWineSharp: {
  name: 'wine_sharp';
  data: string;
} = {
  name: 'wine_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="wine-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288zm-336.65-3.67h281l-37.81 38H154.16z"/></svg>`
};


@Component({
    selector: 'app-ionicon-wine-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconWineSharp.data}
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
export class IoniconWineSharpComponent{}

@NgModule({
    declarations: [IoniconWineSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconWineSharpComponent
    ],
})
export class IoniconWineSharpModule {
}