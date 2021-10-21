import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPrint = {
    name: 'print',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="print_svg__ionicon" viewBox="0 0 512 512"><path d="M408 112H106a58 58 0 00-58 58v158a56 56 0 0056 56h8v39.68A40.32 40.32 0 00152.32 464h207.36A40.32 40.32 0 00400 423.68V384h8a56 56 0 0056-56V168a56 56 0 00-56-56zm-40 311.68a8.35 8.35 0 01-8.32 8.32H152.32a8.35 8.35 0 01-8.32-8.32V264.32a8.35 8.35 0 018.32-8.32h207.36a8.35 8.35 0 018.32 8.32zm26-215.76a24 24 0 1122-22 24 24 0 01-22 22zM344 48H168a56.09 56.09 0 00-55.42 48h286.84A56.09 56.09 0 00344 48z"/></svg>`
};
let IoniconPrintComponent = class IoniconPrintComponent {
};
IoniconPrintComponent = __decorate([
    Component({
        selector: 'app-ionicon-print',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPrint.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPrintComponent);
export { IoniconPrintComponent };
let IoniconPrintModule = class IoniconPrintModule {
};
IoniconPrintModule = __decorate([
    NgModule({
        declarations: [IoniconPrintComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPrintComponent
        ],
    })
], IoniconPrintModule);
export { IoniconPrintModule };
//# sourceMappingURL=Ionicon-print.icon.js.map