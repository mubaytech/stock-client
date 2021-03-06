import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconVolumeOffOutline = {
    name: 'volume_off_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="volume-off-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M237.65 192H168a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61z" class="volume-off-outline_svg__ionicon-fill-none volume-off-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconVolumeOffOutlineComponent = class IoniconVolumeOffOutlineComponent {
};
IoniconVolumeOffOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-volume-off-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconVolumeOffOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconVolumeOffOutlineComponent);
export { IoniconVolumeOffOutlineComponent };
let IoniconVolumeOffOutlineModule = class IoniconVolumeOffOutlineModule {
};
IoniconVolumeOffOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconVolumeOffOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconVolumeOffOutlineComponent
        ],
    })
], IoniconVolumeOffOutlineModule);
export { IoniconVolumeOffOutlineModule };
//# sourceMappingURL=Ionicon-volume-off-outline.icon.js.map