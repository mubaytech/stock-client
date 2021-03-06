import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBan = {
    name: 'ban',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="ban_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="200" class="ban_svg__ionicon-fill-none"/><path d="M114.58 114.58l282.84 282.84"/></svg>`
};
let IoniconBanComponent = class IoniconBanComponent {
};
IoniconBanComponent = __decorate([
    Component({
        selector: 'app-ionicon-ban',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBan.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBanComponent);
export { IoniconBanComponent };
let IoniconBanModule = class IoniconBanModule {
};
IoniconBanModule = __decorate([
    NgModule({
        declarations: [IoniconBanComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBanComponent
        ],
    })
], IoniconBanModule);
export { IoniconBanModule };
//# sourceMappingURL=Ionicon-ban.icon.js.map