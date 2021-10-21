import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHeartOutline = {
    name: 'heart_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="heart-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" class="heart-outline_svg__ionicon-fill-none heart-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconHeartOutlineComponent = class IoniconHeartOutlineComponent {
};
IoniconHeartOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-heart-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconHeartOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconHeartOutlineComponent);
export { IoniconHeartOutlineComponent };
let IoniconHeartOutlineModule = class IoniconHeartOutlineModule {
};
IoniconHeartOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconHeartOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconHeartOutlineComponent
        ],
    })
], IoniconHeartOutlineModule);
export { IoniconHeartOutlineModule };
//# sourceMappingURL=Ionicon-heart-outline.icon.js.map