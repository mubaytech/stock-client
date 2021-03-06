import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMenu = {
    name: 'menu',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="menu_svg__ionicon" viewBox="0 0 512 512"><path d="M88 152h336M88 256h336M88 360h336" class="menu_svg__ionicon-fill-none"/></svg>`
};
let IoniconMenuComponent = class IoniconMenuComponent {
};
IoniconMenuComponent = __decorate([
    Component({
        selector: 'app-ionicon-menu',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMenu.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMenuComponent);
export { IoniconMenuComponent };
let IoniconMenuModule = class IoniconMenuModule {
};
IoniconMenuModule = __decorate([
    NgModule({
        declarations: [IoniconMenuComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMenuComponent
        ],
    })
], IoniconMenuModule);
export { IoniconMenuModule };
//# sourceMappingURL=Ionicon-menu.icon.js.map