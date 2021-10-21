import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEllipseSharp = {
    name: 'ellipse_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="ellipse-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"/></svg>`
};
let IoniconEllipseSharpComponent = class IoniconEllipseSharpComponent {
};
IoniconEllipseSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-ellipse-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconEllipseSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconEllipseSharpComponent);
export { IoniconEllipseSharpComponent };
let IoniconEllipseSharpModule = class IoniconEllipseSharpModule {
};
IoniconEllipseSharpModule = __decorate([
    NgModule({
        declarations: [IoniconEllipseSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconEllipseSharpComponent
        ],
    })
], IoniconEllipseSharpModule);
export { IoniconEllipseSharpModule };
//# sourceMappingURL=Ionicon-ellipse-sharp.icon.js.map