import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconShapesOutline = {
    name: 'shapes_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="shapes-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M336 320H32L184 48l152 272zm-70.68-125.49A144 144 0 11192 320" class="shapes-outline_svg__ionicon-fill-none shapes-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconShapesOutlineComponent = class IoniconShapesOutlineComponent {
};
IoniconShapesOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-shapes-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconShapesOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconShapesOutlineComponent);
export { IoniconShapesOutlineComponent };
let IoniconShapesOutlineModule = class IoniconShapesOutlineModule {
};
IoniconShapesOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconShapesOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconShapesOutlineComponent
        ],
    })
], IoniconShapesOutlineModule);
export { IoniconShapesOutlineModule };
//# sourceMappingURL=Ionicon-shapes-outline.icon.js.map