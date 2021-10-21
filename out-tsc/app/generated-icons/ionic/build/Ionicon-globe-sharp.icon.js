import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGlobeSharp = {
    name: 'globe_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="globe-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" class="globe-sharp_svg__ionicon-fill-none"/><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" class="globe-sharp_svg__ionicon-fill-none"/><path d="M117.33 121.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 269.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34M256 48v416m208-208H48" class="globe-sharp_svg__ionicon-fill-none"/></svg>`
};
let IoniconGlobeSharpComponent = class IoniconGlobeSharpComponent {
};
IoniconGlobeSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-globe-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconGlobeSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconGlobeSharpComponent);
export { IoniconGlobeSharpComponent };
let IoniconGlobeSharpModule = class IoniconGlobeSharpModule {
};
IoniconGlobeSharpModule = __decorate([
    NgModule({
        declarations: [IoniconGlobeSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconGlobeSharpComponent
        ],
    })
], IoniconGlobeSharpModule);
export { IoniconGlobeSharpModule };
//# sourceMappingURL=Ionicon-globe-sharp.icon.js.map