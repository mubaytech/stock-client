import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconUnlinkOutline = {
    name: 'unlink_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="unlink-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64" class="unlink-outline_svg__ionicon-fill-none"/></svg>`
};
let IoniconUnlinkOutlineComponent = class IoniconUnlinkOutlineComponent {
};
IoniconUnlinkOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-unlink-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconUnlinkOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconUnlinkOutlineComponent);
export { IoniconUnlinkOutlineComponent };
let IoniconUnlinkOutlineModule = class IoniconUnlinkOutlineModule {
};
IoniconUnlinkOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconUnlinkOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconUnlinkOutlineComponent
        ],
    })
], IoniconUnlinkOutlineModule);
export { IoniconUnlinkOutlineModule };
//# sourceMappingURL=Ionicon-unlink-outline.icon.js.map