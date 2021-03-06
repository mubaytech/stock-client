import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTrophyOutline = {
    name: 'trophy_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="trophy-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M176 464h160m-80 0V336m128-112c0-50.64-.08-134.63-.12-160a16 16 0 00-16-16l-223.79.26a16 16 0 00-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224z" class="trophy-outline_svg__ionicon-fill-none trophy-outline_svg__ionicon-stroke-width"/><path d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112" class="trophy-outline_svg__ionicon-fill-none trophy-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconTrophyOutlineComponent = class IoniconTrophyOutlineComponent {
};
IoniconTrophyOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-trophy-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconTrophyOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconTrophyOutlineComponent);
export { IoniconTrophyOutlineComponent };
let IoniconTrophyOutlineModule = class IoniconTrophyOutlineModule {
};
IoniconTrophyOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconTrophyOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconTrophyOutlineComponent
        ],
    })
], IoniconTrophyOutlineModule);
export { IoniconTrophyOutlineModule };
//# sourceMappingURL=Ionicon-trophy-outline.icon.js.map