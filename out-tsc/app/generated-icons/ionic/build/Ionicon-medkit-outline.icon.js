import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMedkitOutline = {
    name: 'medkit_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="medkit-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="448" height="352" x="32" y="112" class="medkit-outline_svg__ionicon-fill-none medkit-outline_svg__ionicon-stroke-width" rx="48" ry="48"/><path d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32m-112 96v160m80-80H176" class="medkit-outline_svg__ionicon-fill-none medkit-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconMedkitOutlineComponent = class IoniconMedkitOutlineComponent {
};
IoniconMedkitOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-medkit-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMedkitOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMedkitOutlineComponent);
export { IoniconMedkitOutlineComponent };
let IoniconMedkitOutlineModule = class IoniconMedkitOutlineModule {
};
IoniconMedkitOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconMedkitOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMedkitOutlineComponent
        ],
    })
], IoniconMedkitOutlineModule);
export { IoniconMedkitOutlineModule };
//# sourceMappingURL=Ionicon-medkit-outline.icon.js.map