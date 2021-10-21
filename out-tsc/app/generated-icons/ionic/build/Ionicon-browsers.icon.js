import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBrowsers = {
    name: 'browsers',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="browsers_svg__ionicon" viewBox="0 0 512 512"><path d="M416 48H96a64 64 0 00-64 64v288a64 64 0 0064 64h320a64 64 0 0064-64V112a64 64 0 00-64-64zm24 96H72a8 8 0 01-8-8v-24a32.09 32.09 0 0132-32h320a32.09 32.09 0 0132 32v24a8 8 0 01-8 8z"/></svg>`
};
let IoniconBrowsersComponent = class IoniconBrowsersComponent {
};
IoniconBrowsersComponent = __decorate([
    Component({
        selector: 'app-ionicon-browsers',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBrowsers.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBrowsersComponent);
export { IoniconBrowsersComponent };
let IoniconBrowsersModule = class IoniconBrowsersModule {
};
IoniconBrowsersModule = __decorate([
    NgModule({
        declarations: [IoniconBrowsersComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBrowsersComponent
        ],
    })
], IoniconBrowsersModule);
export { IoniconBrowsersModule };
//# sourceMappingURL=Ionicon-browsers.icon.js.map