import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMoonOutline = {
    name: 'moon_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="moon-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" class="moon-outline_svg__ionicon-fill-none moon-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconMoonOutlineComponent = class IoniconMoonOutlineComponent {
};
IoniconMoonOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-moon-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMoonOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMoonOutlineComponent);
export { IoniconMoonOutlineComponent };
let IoniconMoonOutlineModule = class IoniconMoonOutlineModule {
};
IoniconMoonOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconMoonOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMoonOutlineComponent
        ],
    })
], IoniconMoonOutlineModule);
export { IoniconMoonOutlineModule };
//# sourceMappingURL=Ionicon-moon-outline.icon.js.map