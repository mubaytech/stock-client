import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPricetag = {
    name: 'pricetag',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="pricetag_svg__ionicon" viewBox="0 0 512 512"><path d="M467 45.2A44.45 44.45 0 00435.29 32H312.36a30.63 30.63 0 00-21.52 8.89L45.09 286.59a44.82 44.82 0 000 63.32l117 117a44.83 44.83 0 0063.34 0l245.65-245.6A30.6 30.6 0 00480 199.8v-123a44.24 44.24 0 00-13-31.6zM384 160a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};
let IoniconPricetagComponent = class IoniconPricetagComponent {
};
IoniconPricetagComponent = __decorate([
    Component({
        selector: 'app-ionicon-pricetag',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPricetag.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPricetagComponent);
export { IoniconPricetagComponent };
let IoniconPricetagModule = class IoniconPricetagModule {
};
IoniconPricetagModule = __decorate([
    NgModule({
        declarations: [IoniconPricetagComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPricetagComponent
        ],
    })
], IoniconPricetagModule);
export { IoniconPricetagModule };
//# sourceMappingURL=Ionicon-pricetag.icon.js.map