import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconOpenOutline = {
    name: 'open_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="open-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72" class="open-outline_svg__ionicon-fill-none open-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconOpenOutlineComponent = class IoniconOpenOutlineComponent {
};
IoniconOpenOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-open-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconOpenOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconOpenOutlineComponent);
export { IoniconOpenOutlineComponent };
let IoniconOpenOutlineModule = class IoniconOpenOutlineModule {
};
IoniconOpenOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconOpenOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconOpenOutlineComponent
        ],
    })
], IoniconOpenOutlineModule);
export { IoniconOpenOutlineModule };
//# sourceMappingURL=Ionicon-open-outline.icon.js.map