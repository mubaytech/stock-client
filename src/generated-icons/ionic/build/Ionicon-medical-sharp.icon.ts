
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMedicalSharp: {
  name: 'medical_sharp';
  data: string;
} = {
  name: 'medical_sharp',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="medical-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M351.9 256L460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2L351.9 256z"/></svg>`
};


@Component({
    selector: 'app-ionicon-medical-sharp',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMedicalSharp.data}
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
export class IoniconMedicalSharpComponent{}

@NgModule({
    declarations: [IoniconMedicalSharpComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMedicalSharpComponent
    ],
})
export class IoniconMedicalSharpModule {
}