import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMaleFemale = {
    name: 'male_female',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="male-female_svg__ionicon" viewBox="0 0 512 512"><path d="M426 16h-74a22 22 0 000 44h20.89l-37.1 37.09A157.68 157.68 0 00216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 000 44h28v36a22 22 0 0044 0v-36h28a22 22 0 000-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 00-14-64.92l44-44V112a22 22 0 0044 0V38a22 22 0 00-22-22zM216 314a114 114 0 11114-114 114.13 114.13 0 01-114 114z"/></svg>`
};
let IoniconMaleFemaleComponent = class IoniconMaleFemaleComponent {
};
IoniconMaleFemaleComponent = __decorate([
    Component({
        selector: 'app-ionicon-male-female',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMaleFemale.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMaleFemaleComponent);
export { IoniconMaleFemaleComponent };
let IoniconMaleFemaleModule = class IoniconMaleFemaleModule {
};
IoniconMaleFemaleModule = __decorate([
    NgModule({
        declarations: [IoniconMaleFemaleComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMaleFemaleComponent
        ],
    })
], IoniconMaleFemaleModule);
export { IoniconMaleFemaleModule };
//# sourceMappingURL=Ionicon-male-female.icon.js.map