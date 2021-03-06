import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFemaleOutline = {
    name: 'female_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="female-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="184" r="152" class="female-outline_svg__ionicon-fill-none female-outline_svg__ionicon-stroke-width"/><path d="M256 336v144m58-64H198" class="female-outline_svg__ionicon-fill-none female-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconFemaleOutlineComponent = class IoniconFemaleOutlineComponent {
};
IoniconFemaleOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-female-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconFemaleOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconFemaleOutlineComponent);
export { IoniconFemaleOutlineComponent };
let IoniconFemaleOutlineModule = class IoniconFemaleOutlineModule {
};
IoniconFemaleOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconFemaleOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconFemaleOutlineComponent
        ],
    })
], IoniconFemaleOutlineModule);
export { IoniconFemaleOutlineModule };
//# sourceMappingURL=Ionicon-female-outline.icon.js.map