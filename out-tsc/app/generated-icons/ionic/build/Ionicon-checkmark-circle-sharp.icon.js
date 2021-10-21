import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCheckmarkCircleSharp = {
    name: 'checkmark_circle_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="checkmark-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38l-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z"/></svg>`
};
let IoniconCheckmarkCircleSharpComponent = class IoniconCheckmarkCircleSharpComponent {
};
IoniconCheckmarkCircleSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-checkmark-circle-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCheckmarkCircleSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCheckmarkCircleSharpComponent);
export { IoniconCheckmarkCircleSharpComponent };
let IoniconCheckmarkCircleSharpModule = class IoniconCheckmarkCircleSharpModule {
};
IoniconCheckmarkCircleSharpModule = __decorate([
    NgModule({
        declarations: [IoniconCheckmarkCircleSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCheckmarkCircleSharpComponent
        ],
    })
], IoniconCheckmarkCircleSharpModule);
export { IoniconCheckmarkCircleSharpModule };
//# sourceMappingURL=Ionicon-checkmark-circle-sharp.icon.js.map