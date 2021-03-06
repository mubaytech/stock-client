import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCode = {
    name: 'code',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="code_svg__ionicon" viewBox="0 0 512 512"><path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389z"/></svg>`
};
let IoniconCodeComponent = class IoniconCodeComponent {
};
IoniconCodeComponent = __decorate([
    Component({
        selector: 'app-ionicon-code',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCode.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCodeComponent);
export { IoniconCodeComponent };
let IoniconCodeModule = class IoniconCodeModule {
};
IoniconCodeModule = __decorate([
    NgModule({
        declarations: [IoniconCodeComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCodeComponent
        ],
    })
], IoniconCodeModule);
export { IoniconCodeModule };
//# sourceMappingURL=Ionicon-code.icon.js.map