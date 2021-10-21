import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBagOutline = {
    name: 'bag_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bag-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96 96 96 0 0196 96v32" class="bag-outline_svg__ionicon-fill-none bag-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconBagOutlineComponent = class IoniconBagOutlineComponent {
};
IoniconBagOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-bag-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBagOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBagOutlineComponent);
export { IoniconBagOutlineComponent };
let IoniconBagOutlineModule = class IoniconBagOutlineModule {
};
IoniconBagOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconBagOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBagOutlineComponent
        ],
    })
], IoniconBagOutlineModule);
export { IoniconBagOutlineModule };
//# sourceMappingURL=Ionicon-bag-outline.icon.js.map