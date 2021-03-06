import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLaptopOutline = {
    name: 'laptop_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="laptop-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="416" height="304" x="48" y="96" class="laptop-outline_svg__ionicon-fill-none laptop-outline_svg__ionicon-stroke-width" rx="32.14" ry="32.14"/><path d="M16 416h480" class="laptop-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconLaptopOutlineComponent = class IoniconLaptopOutlineComponent {
};
IoniconLaptopOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-laptop-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconLaptopOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconLaptopOutlineComponent);
export { IoniconLaptopOutlineComponent };
let IoniconLaptopOutlineModule = class IoniconLaptopOutlineModule {
};
IoniconLaptopOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconLaptopOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconLaptopOutlineComponent
        ],
    })
], IoniconLaptopOutlineModule);
export { IoniconLaptopOutlineModule };
//# sourceMappingURL=Ionicon-laptop-outline.icon.js.map