import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconStarHalf = {
    name: 'star_half',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="star-half_svg__ionicon" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" class="star-half_svg__ionicon-fill-none star-half_svg__ionicon-stroke-width"/><path d="M256 48v316L118 464l54-160-140-96h172l52-160z"/></svg>`
};
let IoniconStarHalfComponent = class IoniconStarHalfComponent {
};
IoniconStarHalfComponent = __decorate([
    Component({
        selector: 'app-ionicon-star-half',
        template: `
    <div class="app-ionic-icon">
        ${IoniconStarHalf.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconStarHalfComponent);
export { IoniconStarHalfComponent };
let IoniconStarHalfModule = class IoniconStarHalfModule {
};
IoniconStarHalfModule = __decorate([
    NgModule({
        declarations: [IoniconStarHalfComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconStarHalfComponent
        ],
    })
], IoniconStarHalfModule);
export { IoniconStarHalfModule };
//# sourceMappingURL=Ionicon-star-half.icon.js.map