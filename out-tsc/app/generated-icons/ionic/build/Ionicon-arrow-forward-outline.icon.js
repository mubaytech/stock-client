import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowForwardOutline = {
    name: 'arrow_forward_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-forward-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M268 112l144 144-144 144m124-144H100" class="arrow-forward-outline_svg__ionicon-fill-none"/></svg>`
};
let IoniconArrowForwardOutlineComponent = class IoniconArrowForwardOutlineComponent {
};
IoniconArrowForwardOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-arrow-forward-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconArrowForwardOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconArrowForwardOutlineComponent);
export { IoniconArrowForwardOutlineComponent };
let IoniconArrowForwardOutlineModule = class IoniconArrowForwardOutlineModule {
};
IoniconArrowForwardOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconArrowForwardOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconArrowForwardOutlineComponent
        ],
    })
], IoniconArrowForwardOutlineModule);
export { IoniconArrowForwardOutlineModule };
//# sourceMappingURL=Ionicon-arrow-forward-outline.icon.js.map