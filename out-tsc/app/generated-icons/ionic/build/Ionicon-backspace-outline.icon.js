import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBackspaceOutline = {
    name: 'backspace_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="backspace-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84L46.33 256l88.86 134.11zM336.67 192.33L206.66 322.34m130.01 0L206.66 192.33m130.01 0L206.66 322.34m130.01 0L206.66 192.33" class="backspace-outline_svg__ionicon-fill-none backspace-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconBackspaceOutlineComponent = class IoniconBackspaceOutlineComponent {
};
IoniconBackspaceOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-backspace-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBackspaceOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBackspaceOutlineComponent);
export { IoniconBackspaceOutlineComponent };
let IoniconBackspaceOutlineModule = class IoniconBackspaceOutlineModule {
};
IoniconBackspaceOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconBackspaceOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBackspaceOutlineComponent
        ],
    })
], IoniconBackspaceOutlineModule);
export { IoniconBackspaceOutlineModule };
//# sourceMappingURL=Ionicon-backspace-outline.icon.js.map