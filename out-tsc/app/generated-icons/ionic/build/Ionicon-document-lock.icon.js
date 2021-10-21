import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconDocumentLock = {
    name: 'document_lock',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="document-lock_svg__ionicon" viewBox="0 0 512 512"><path d="M288 192h129.81a2 2 0 001.41-3.41L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16zm-32 80c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14z"/><path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160a32 32 0 01-32 32h-96a32 32 0 01-32-32v-48a32 32 0 0132-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0132 32z"/></svg>`
};
let IoniconDocumentLockComponent = class IoniconDocumentLockComponent {
};
IoniconDocumentLockComponent = __decorate([
    Component({
        selector: 'app-ionicon-document-lock',
        template: `
    <div class="app-ionic-icon">
        ${IoniconDocumentLock.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconDocumentLockComponent);
export { IoniconDocumentLockComponent };
let IoniconDocumentLockModule = class IoniconDocumentLockModule {
};
IoniconDocumentLockModule = __decorate([
    NgModule({
        declarations: [IoniconDocumentLockComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconDocumentLockComponent
        ],
    })
], IoniconDocumentLockModule);
export { IoniconDocumentLockModule };
//# sourceMappingURL=Ionicon-document-lock.icon.js.map