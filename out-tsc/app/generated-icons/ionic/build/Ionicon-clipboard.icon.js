import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconClipboard = {
    name: 'clipboard',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="clipboard_svg__ionicon" viewBox="0 0 512 512"><path d="M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z"/></svg>`
};
let IoniconClipboardComponent = class IoniconClipboardComponent {
};
IoniconClipboardComponent = __decorate([
    Component({
        selector: 'app-ionicon-clipboard',
        template: `
    <div class="app-ionic-icon">
        ${IoniconClipboard.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconClipboardComponent);
export { IoniconClipboardComponent };
let IoniconClipboardModule = class IoniconClipboardModule {
};
IoniconClipboardModule = __decorate([
    NgModule({
        declarations: [IoniconClipboardComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconClipboardComponent
        ],
    })
], IoniconClipboardModule);
export { IoniconClipboardModule };
//# sourceMappingURL=Ionicon-clipboard.icon.js.map