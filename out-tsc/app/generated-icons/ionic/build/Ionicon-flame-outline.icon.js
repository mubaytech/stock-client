import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFlameOutline = {
    name: 'flame_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="flame-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 01-288 0z" class="flame-outline_svg__ionicon-fill-none flame-outline_svg__ionicon-stroke-width"/><path d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128z" class="flame-outline_svg__ionicon-fill-none flame-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconFlameOutlineComponent = class IoniconFlameOutlineComponent {
};
IoniconFlameOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-flame-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconFlameOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconFlameOutlineComponent);
export { IoniconFlameOutlineComponent };
let IoniconFlameOutlineModule = class IoniconFlameOutlineModule {
};
IoniconFlameOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconFlameOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconFlameOutlineComponent
        ],
    })
], IoniconFlameOutlineModule);
export { IoniconFlameOutlineModule };
//# sourceMappingURL=Ionicon-flame-outline.icon.js.map