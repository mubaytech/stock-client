import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconJournal = {
    name: 'journal',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="journal_svg__ionicon" viewBox="0 0 512 512"><path d="M290 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h146zm78 0h-18v448h18a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64z"/></svg>`
};
let IoniconJournalComponent = class IoniconJournalComponent {
};
IoniconJournalComponent = __decorate([
    Component({
        selector: 'app-ionicon-journal',
        template: `
    <div class="app-ionic-icon">
        ${IoniconJournal.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconJournalComponent);
export { IoniconJournalComponent };
let IoniconJournalModule = class IoniconJournalModule {
};
IoniconJournalModule = __decorate([
    NgModule({
        declarations: [IoniconJournalComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconJournalComponent
        ],
    })
], IoniconJournalModule);
export { IoniconJournalModule };
//# sourceMappingURL=Ionicon-journal.icon.js.map