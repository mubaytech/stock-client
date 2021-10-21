import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSwapVerticalOutline = {
    name: 'swap_vertical_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="swap-vertical-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M464 208L352 96 240 208m112-94.87V416M48 304l112 112 112-112m-112 94V96" class="swap-vertical-outline_svg__ionicon-fill-none swap-vertical-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconSwapVerticalOutlineComponent = class IoniconSwapVerticalOutlineComponent {
};
IoniconSwapVerticalOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-swap-vertical-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconSwapVerticalOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconSwapVerticalOutlineComponent);
export { IoniconSwapVerticalOutlineComponent };
let IoniconSwapVerticalOutlineModule = class IoniconSwapVerticalOutlineModule {
};
IoniconSwapVerticalOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconSwapVerticalOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconSwapVerticalOutlineComponent
        ],
    })
], IoniconSwapVerticalOutlineModule);
export { IoniconSwapVerticalOutlineModule };
//# sourceMappingURL=Ionicon-swap-vertical-outline.icon.js.map