import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconClose = {
    name: 'close',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="close_svg__ionicon" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>`
};
let IoniconCloseComponent = class IoniconCloseComponent {
};
IoniconCloseComponent = __decorate([
    Component({
        selector: 'app-ionicon-close',
        template: `
    <div class="app-ionic-icon">
        ${IoniconClose.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCloseComponent);
export { IoniconCloseComponent };
let IoniconCloseModule = class IoniconCloseModule {
};
IoniconCloseModule = __decorate([
    NgModule({
        declarations: [IoniconCloseComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCloseComponent
        ],
    })
], IoniconCloseModule);
export { IoniconCloseModule };
//# sourceMappingURL=Ionicon-close.icon.js.map