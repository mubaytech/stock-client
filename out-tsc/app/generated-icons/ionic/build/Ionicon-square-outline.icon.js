import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSquareOutline = {
    name: 'square_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="square-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M416 448H96a32.09 32.09 0 01-32-32V96a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v320a32.09 32.09 0 01-32 32z" class="square-outline_svg__ionicon-fill-none square-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconSquareOutlineComponent = class IoniconSquareOutlineComponent {
};
IoniconSquareOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-square-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconSquareOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconSquareOutlineComponent);
export { IoniconSquareOutlineComponent };
let IoniconSquareOutlineModule = class IoniconSquareOutlineModule {
};
IoniconSquareOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconSquareOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconSquareOutlineComponent
        ],
    })
], IoniconSquareOutlineModule);
export { IoniconSquareOutlineModule };
//# sourceMappingURL=Ionicon-square-outline.icon.js.map