import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconDesktopOutline = {
    name: 'desktop_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="desktop-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="448" height="320" x="32" y="64" class="desktop-outline_svg__ionicon-fill-none desktop-outline_svg__ionicon-stroke-width" rx="32" ry="32"/><path d="M304 448l-8-64h-80l-8 64h96z" class="desktop-outline_svg__ionicon-stroke-width"/><path d="M368 448H144" class="desktop-outline_svg__ionicon-fill-none desktop-outline_svg__ionicon-stroke-width"/><path d="M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z"/></svg>`
};
let IoniconDesktopOutlineComponent = class IoniconDesktopOutlineComponent {
};
IoniconDesktopOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-desktop-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconDesktopOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconDesktopOutlineComponent);
export { IoniconDesktopOutlineComponent };
let IoniconDesktopOutlineModule = class IoniconDesktopOutlineModule {
};
IoniconDesktopOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconDesktopOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconDesktopOutlineComponent
        ],
    })
], IoniconDesktopOutlineModule);
export { IoniconDesktopOutlineModule };
//# sourceMappingURL=Ionicon-desktop-outline.icon.js.map