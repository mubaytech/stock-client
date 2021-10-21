import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconContractOutline = {
    name: 'contract_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="contract-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432" class="contract-outline_svg__ionicon-fill-none contract-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconContractOutlineComponent = class IoniconContractOutlineComponent {
};
IoniconContractOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-contract-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconContractOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconContractOutlineComponent);
export { IoniconContractOutlineComponent };
let IoniconContractOutlineModule = class IoniconContractOutlineModule {
};
IoniconContractOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconContractOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconContractOutlineComponent
        ],
    })
], IoniconContractOutlineModule);
export { IoniconContractOutlineModule };
//# sourceMappingURL=Ionicon-contract-outline.icon.js.map