import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconQrCode = {
    name: 'qr_code',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="qr-code_svg__ionicon" viewBox="0 0 512 512"><rect width="80" height="80" x="336" y="336" rx="8" ry="8"/><rect width="64" height="64" x="272" y="272" rx="8" ry="8"/><rect width="64" height="64" x="416" y="416" rx="8" ry="8"/><rect width="48" height="48" x="432" y="272" rx="8" ry="8"/><rect width="48" height="48" x="272" y="432" rx="8" ry="8"/><path d="M448 32H304a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 32H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zm32 104H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V304a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8z"/></svg>`
};
let IoniconQrCodeComponent = class IoniconQrCodeComponent {
};
IoniconQrCodeComponent = __decorate([
    Component({
        selector: 'app-ionicon-qr-code',
        template: `
    <div class="app-ionic-icon">
        ${IoniconQrCode.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconQrCodeComponent);
export { IoniconQrCodeComponent };
let IoniconQrCodeModule = class IoniconQrCodeModule {
};
IoniconQrCodeModule = __decorate([
    NgModule({
        declarations: [IoniconQrCodeComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconQrCodeComponent
        ],
    })
], IoniconQrCodeModule);
export { IoniconQrCodeModule };
//# sourceMappingURL=Ionicon-qr-code.icon.js.map