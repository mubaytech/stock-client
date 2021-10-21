
import {
    Component,
    NgModule,
    ChangeDetectionStrategy
} from '@angular/core';

import {CommonModule} from '@angular/common';

/* 🤖 this file was generated by svg-to-ts*/
export const IoniconJournalOutline: {
  name: 'journal_outline';
  data: string;
} = {
  name: 'journal_outline',
  data: `<svg xmlns="http://www.w3.org/2000/svg" class="journal-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="320" height="416" x="96" y="48" class="journal-outline_svg ionicon-fill-none  journal-outline_svg ionicon-stroke-width " rx="48" ry="48"/><path d="M320 48v416" class="journal-outline_svg__ionicon-fill-none"/></svg>`
};


@Component({
    selector: 'app-ionicon-journal-outline',
    template: `
    <div class="app-ionic-icon">
        ${IoniconJournalOutline.data}
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
export class IoniconJournalOutlineComponent{}

@NgModule({
    declarations: [IoniconJournalOutlineComponent],
    imports: [
        CommonModule
    ],
    exports: [
        IoniconJournalOutlineComponent
    ],
})
export class IoniconJournalOutlineModule {
}