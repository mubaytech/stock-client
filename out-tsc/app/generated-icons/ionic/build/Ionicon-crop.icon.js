import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCrop = {
    name: 'crop',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="crop_svg__ionicon" viewBox="0 0 512 512"><path d="M458 346H192a26 26 0 01-26-26V54a22 22 0 00-44 0v68H54a22 22 0 000 44h68v154a70.08 70.08 0 0070 70h154v68a22 22 0 0044 0v-68h68a22 22 0 000-44z"/><path d="M214 166h106a26 26 0 0126 26v106a22 22 0 0044 0V192a70.08 70.08 0 00-70-70H214a22 22 0 000 44z"/></svg>`
};
let IoniconCropComponent = class IoniconCropComponent {
};
IoniconCropComponent = __decorate([
    Component({
        selector: 'app-ionicon-crop',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCrop.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCropComponent);
export { IoniconCropComponent };
let IoniconCropModule = class IoniconCropModule {
};
IoniconCropModule = __decorate([
    NgModule({
        declarations: [IoniconCropComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCropComponent
        ],
    })
], IoniconCropModule);
export { IoniconCropModule };
//# sourceMappingURL=Ionicon-crop.icon.js.map