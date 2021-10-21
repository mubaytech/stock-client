import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHeartCircleOutline = {
    name: 'heart_circle_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="heart-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" class="heart-circle-outline_svg__ionicon-fill-none heart-circle-outline_svg__ionicon-stroke-width"/><path d="M256 360a16 16 0 01-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 008.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.28 27.1-9.31 52.13-29.3 76.5-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 01256 360z"/></svg>`
};
let IoniconHeartCircleOutlineComponent = class IoniconHeartCircleOutlineComponent {
};
IoniconHeartCircleOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-heart-circle-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconHeartCircleOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconHeartCircleOutlineComponent);
export { IoniconHeartCircleOutlineComponent };
let IoniconHeartCircleOutlineModule = class IoniconHeartCircleOutlineModule {
};
IoniconHeartCircleOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconHeartCircleOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconHeartCircleOutlineComponent
        ],
    })
], IoniconHeartCircleOutlineModule);
export { IoniconHeartCircleOutlineModule };
//# sourceMappingURL=Ionicon-heart-circle-outline.icon.js.map