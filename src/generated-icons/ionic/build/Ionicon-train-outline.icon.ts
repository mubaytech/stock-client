
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTrainOutline: {
  name: 'train_outline';
  data: string;
} = {
  name: 'train_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="train-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M344 48h-24a16 16 0 00-16-16h-96a16 16 0 00-16 16h-24a56.16 56.16 0 00-56 56v247c0 35.3 144 65 144 65s144-29.7 144-65V104a56 56 0 00-56-56zm-88 304a48 48 0 1148-48 48 48 0 01-48 48zm96-160a16 16 0 01-16 16H176a16 16 0 01-16-16v-64a16 16 0 0116-16h160a16 16 0 0116 16zM144 464h224m-32-32l48 48m-208-48l-48 48" class="train-outline_svg ionicon-fill-none  train-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-train-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconTrainOutline.data}
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
export class IoniconTrainOutlineComponent{}

@NgModule({
    declarations: [IoniconTrainOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconTrainOutlineComponent
    ],
})
export class IoniconTrainOutlineModule {
}