import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBanOutline = {
    name: 'ban_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="ban-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" class="ban-outline_svg__ionicon-fill-none ban-outline_svg__ionicon-stroke-width"/><path d="M108.92 108.92l294.16 294.16" class="ban-outline_svg__ionicon-fill-none ban-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconBanOutlineComponent = class IoniconBanOutlineComponent {
};
IoniconBanOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-ban-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBanOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBanOutlineComponent);
export { IoniconBanOutlineComponent };
let IoniconBanOutlineModule = class IoniconBanOutlineModule {
};
IoniconBanOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconBanOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBanOutlineComponent
        ],
    })
], IoniconBanOutlineModule);
export { IoniconBanOutlineModule };
//# sourceMappingURL=Ionicon-ban-outline.icon.js.map