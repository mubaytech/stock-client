import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoVue = {
    name: 'logo_vue',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-vue_svg__ionicon" viewBox="0 0 512 512"><path d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"/><path d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"/></svg>`
};
let IoniconLogoVueComponent = class IoniconLogoVueComponent {
};
IoniconLogoVueComponent = __decorate([
    Component({
        selector: 'app-ionicon-logo-vue',
        template: `
    <div class="app-ionic-icon">
        ${IoniconLogoVue.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconLogoVueComponent);
export { IoniconLogoVueComponent };
let IoniconLogoVueModule = class IoniconLogoVueModule {
};
IoniconLogoVueModule = __decorate([
    NgModule({
        declarations: [IoniconLogoVueComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconLogoVueComponent
        ],
    })
], IoniconLogoVueModule);
export { IoniconLogoVueModule };
//# sourceMappingURL=Ionicon-logo-vue.icon.js.map