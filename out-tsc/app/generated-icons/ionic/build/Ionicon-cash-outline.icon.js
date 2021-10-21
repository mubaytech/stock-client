import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCashOutline = {
    name: 'cash_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="cash-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="448" height="256" x="32" y="80" class="cash-outline_svg__ionicon-fill-none cash-outline_svg__ionicon-stroke-width" rx="16" ry="16" transform="rotate(180 256 208)"/><path d="M64 384h384M96 432h320" class="cash-outline_svg__ionicon-fill-none cash-outline_svg__ionicon-stroke-width"/><circle cx="256" cy="208" r="80" class="cash-outline_svg__ionicon-fill-none cash-outline_svg__ionicon-stroke-width"/><path d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80" class="cash-outline_svg__ionicon-fill-none cash-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconCashOutlineComponent = class IoniconCashOutlineComponent {
};
IoniconCashOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-cash-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCashOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCashOutlineComponent);
export { IoniconCashOutlineComponent };
let IoniconCashOutlineModule = class IoniconCashOutlineModule {
};
IoniconCashOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconCashOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCashOutlineComponent
        ],
    })
], IoniconCashOutlineModule);
export { IoniconCashOutlineModule };
//# sourceMappingURL=Ionicon-cash-outline.icon.js.map