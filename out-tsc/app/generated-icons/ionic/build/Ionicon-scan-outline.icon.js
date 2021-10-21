import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconScanOutline = {
    name: 'scan_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="scan-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M336 448h56a56 56 0 0056-56v-56m0-160v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56m0-160v-56a56 56 0 0156-56h56" class="scan-outline_svg__ionicon-fill-none scan-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconScanOutlineComponent = class IoniconScanOutlineComponent {
};
IoniconScanOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-scan-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconScanOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconScanOutlineComponent);
export { IoniconScanOutlineComponent };
let IoniconScanOutlineModule = class IoniconScanOutlineModule {
};
IoniconScanOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconScanOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconScanOutlineComponent
        ],
    })
], IoniconScanOutlineModule);
export { IoniconScanOutlineModule };
//# sourceMappingURL=Ionicon-scan-outline.icon.js.map