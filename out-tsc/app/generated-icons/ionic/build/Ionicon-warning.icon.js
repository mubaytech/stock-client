import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWarning = {
    name: 'warning',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="warning_svg__ionicon" viewBox="0 0 512 512"><path d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z"/></svg>`
};
let IoniconWarningComponent = class IoniconWarningComponent {
};
IoniconWarningComponent = __decorate([
    Component({
        selector: 'app-ionicon-warning',
        template: `
    <div class="app-ionic-icon">
        ${IoniconWarning.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconWarningComponent);
export { IoniconWarningComponent };
let IoniconWarningModule = class IoniconWarningModule {
};
IoniconWarningModule = __decorate([
    NgModule({
        declarations: [IoniconWarningComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconWarningComponent
        ],
    })
], IoniconWarningModule);
export { IoniconWarningModule };
//# sourceMappingURL=Ionicon-warning.icon.js.map