import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCartSharp = {
    name: 'cart_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="cart-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32"/><circle cx="400" cy="416" r="32"/><path d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z"/></svg>`
};
let IoniconCartSharpComponent = class IoniconCartSharpComponent {
};
IoniconCartSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-cart-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCartSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCartSharpComponent);
export { IoniconCartSharpComponent };
let IoniconCartSharpModule = class IoniconCartSharpModule {
};
IoniconCartSharpModule = __decorate([
    NgModule({
        declarations: [IoniconCartSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCartSharpComponent
        ],
    })
], IoniconCartSharpModule);
export { IoniconCartSharpModule };
//# sourceMappingURL=Ionicon-cart-sharp.icon.js.map