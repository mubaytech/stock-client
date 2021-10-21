import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMaleOutline = {
    name: 'male_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="male-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="216" cy="296" r="152" class="male-outline_svg__ionicon-fill-none male-outline_svg__ionicon-stroke-width"/><path d="M448 160V64h-96m-28 124L448 64" class="male-outline_svg__ionicon-fill-none male-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconMaleOutlineComponent = class IoniconMaleOutlineComponent {
};
IoniconMaleOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-male-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMaleOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMaleOutlineComponent);
export { IoniconMaleOutlineComponent };
let IoniconMaleOutlineModule = class IoniconMaleOutlineModule {
};
IoniconMaleOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconMaleOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMaleOutlineComponent
        ],
    })
], IoniconMaleOutlineModule);
export { IoniconMaleOutlineModule };
//# sourceMappingURL=Ionicon-male-outline.icon.js.map