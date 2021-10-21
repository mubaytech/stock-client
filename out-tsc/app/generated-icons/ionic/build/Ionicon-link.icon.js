import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLink = {
    name: 'link',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="link_svg__ionicon" viewBox="0 0 512 512"><path d="M200.66 352H144a96 96 0 010-192h55.41m113.18 0H368a96 96 0 010 192h-56.66m-142.27-96h175.86" class="link_svg__ionicon-fill-none"/></svg>`
};
let IoniconLinkComponent = class IoniconLinkComponent {
};
IoniconLinkComponent = __decorate([
    Component({
        selector: 'app-ionicon-link',
        template: `
    <div class="app-ionic-icon">
        ${IoniconLink.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconLinkComponent);
export { IoniconLinkComponent };
let IoniconLinkModule = class IoniconLinkModule {
};
IoniconLinkModule = __decorate([
    NgModule({
        declarations: [IoniconLinkComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconLinkComponent
        ],
    })
], IoniconLinkModule);
export { IoniconLinkModule };
//# sourceMappingURL=Ionicon-link.icon.js.map