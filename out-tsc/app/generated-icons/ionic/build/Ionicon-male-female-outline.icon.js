import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMaleFemaleOutline = {
    name: 'male_female_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="male-female-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="216" cy="200" r="136" class="male-female-outline_svg__ionicon-fill-none male-female-outline_svg__ionicon-stroke-width"/><path d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32" class="male-female-outline_svg__ionicon-fill-none male-female-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconMaleFemaleOutlineComponent = class IoniconMaleFemaleOutlineComponent {
};
IoniconMaleFemaleOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-male-female-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMaleFemaleOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMaleFemaleOutlineComponent);
export { IoniconMaleFemaleOutlineComponent };
let IoniconMaleFemaleOutlineModule = class IoniconMaleFemaleOutlineModule {
};
IoniconMaleFemaleOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconMaleFemaleOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMaleFemaleOutlineComponent
        ],
    })
], IoniconMaleFemaleOutlineModule);
export { IoniconMaleFemaleOutlineModule };
//# sourceMappingURL=Ionicon-male-female-outline.icon.js.map