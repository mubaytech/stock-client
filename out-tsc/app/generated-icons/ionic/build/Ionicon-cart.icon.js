import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCart = {
    name: 'cart',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="cart_svg__ionicon" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32"/><circle cx="400" cy="416" r="32"/><path d="M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z"/></svg>`
};
let IoniconCartComponent = class IoniconCartComponent {
};
IoniconCartComponent = __decorate([
    Component({
        selector: 'app-ionicon-cart',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCart.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCartComponent);
export { IoniconCartComponent };
let IoniconCartModule = class IoniconCartModule {
};
IoniconCartModule = __decorate([
    NgModule({
        declarations: [IoniconCartComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCartComponent
        ],
    })
], IoniconCartModule);
export { IoniconCartModule };
//# sourceMappingURL=Ionicon-cart.icon.js.map