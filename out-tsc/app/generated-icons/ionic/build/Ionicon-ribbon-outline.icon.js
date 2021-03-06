import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRibbonOutline = {
    name: 'ribbon_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="ribbon-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="160" r="128" class="ribbon-outline_svg__ionicon-fill-none ribbon-outline_svg__ionicon-stroke-width"/><path d="M143.65 227.82L48 400l86.86-.42a16 16 0 0113.82 7.8L192 480l88.33-194.32" class="ribbon-outline_svg__ionicon-fill-none ribbon-outline_svg__ionicon-stroke-width"/><path d="M366.54 224L464 400l-86.86-.42a16 16 0 00-13.82 7.8L320 480l-64-140.8" class="ribbon-outline_svg__ionicon-fill-none ribbon-outline_svg__ionicon-stroke-width"/><circle cx="256" cy="160" r="64" class="ribbon-outline_svg__ionicon-fill-none ribbon-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconRibbonOutlineComponent = class IoniconRibbonOutlineComponent {
};
IoniconRibbonOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-ribbon-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconRibbonOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconRibbonOutlineComponent);
export { IoniconRibbonOutlineComponent };
let IoniconRibbonOutlineModule = class IoniconRibbonOutlineModule {
};
IoniconRibbonOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconRibbonOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconRibbonOutlineComponent
        ],
    })
], IoniconRibbonOutlineModule);
export { IoniconRibbonOutlineModule };
//# sourceMappingURL=Ionicon-ribbon-outline.icon.js.map