import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHeartSharp = {
    name: 'heart_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="heart-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 448l-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65.56 55.68-19.71 107-62 157-40.09 47.49-94.22 79.78-137 108.35z"/></svg>`
};
let IoniconHeartSharpComponent = class IoniconHeartSharpComponent {
};
IoniconHeartSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-heart-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconHeartSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconHeartSharpComponent);
export { IoniconHeartSharpComponent };
let IoniconHeartSharpModule = class IoniconHeartSharpModule {
};
IoniconHeartSharpModule = __decorate([
    NgModule({
        declarations: [IoniconHeartSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconHeartSharpComponent
        ],
    })
], IoniconHeartSharpModule);
export { IoniconHeartSharpModule };
//# sourceMappingURL=Ionicon-heart-sharp.icon.js.map