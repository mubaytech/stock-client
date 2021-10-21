import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGolfOutline = {
    name: 'golf_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="golf-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M256 400V32l176 80-176 80" class="golf-outline_svg__ionicon-fill-none golf-outline_svg__ionicon-stroke-width"/><path d="M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336z" class="golf-outline_svg__ionicon-fill-none golf-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconGolfOutlineComponent = class IoniconGolfOutlineComponent {
};
IoniconGolfOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-golf-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconGolfOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconGolfOutlineComponent);
export { IoniconGolfOutlineComponent };
let IoniconGolfOutlineModule = class IoniconGolfOutlineModule {
};
IoniconGolfOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconGolfOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconGolfOutlineComponent
        ],
    })
], IoniconGolfOutlineModule);
export { IoniconGolfOutlineModule };
//# sourceMappingURL=Ionicon-golf-outline.icon.js.map