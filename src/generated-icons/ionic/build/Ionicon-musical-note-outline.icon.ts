
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMusicalNoteOutline: {
  name: 'musical_note_outline';
  data: string;
} = {
  name: 'musical_note_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="musical-note-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M240 343.31V424a32.28 32.28 0 01-21.88 30.65l-21.47 7.23c-25.9 8.71-52.65-10.75-52.65-38.32A34.29 34.29 0 01167.25 391l50.87-17.12A32.29 32.29 0 00240 343.24V92a16.13 16.13 0 0112.06-15.66L360.49 48.2A6 6 0 01368 54v57.76a16.13 16.13 0 01-12.12 15.67l-91.64 23.13A32.25 32.25 0 00240 181.91v39.39" class="musical-note-outline_svg ionicon-fill-none  musical-note-outline_svg ionicon-stroke-width "/></svg>`
};


@Component({
    selector: 'app-ionicon-musical-note-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconMusicalNoteOutline.data}
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
export class IoniconMusicalNoteOutlineComponent{}

@NgModule({
    declarations: [IoniconMusicalNoteOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconMusicalNoteOutlineComponent
    ],
})
export class IoniconMusicalNoteOutlineModule {
}
