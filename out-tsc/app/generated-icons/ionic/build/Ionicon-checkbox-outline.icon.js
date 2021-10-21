import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCheckboxOutline = {
    name: 'checkbox_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="checkbox-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M352 176L217.6 336 160 272" class="checkbox-outline_svg__ionicon-fill-none checkbox-outline_svg__ionicon-stroke-width"/><rect width="384" height="384" x="64" y="64" class="checkbox-outline_svg__ionicon-fill-none checkbox-outline_svg__ionicon-stroke-width" rx="48" ry="48"/></svg>`
};
let IoniconCheckboxOutlineComponent = class IoniconCheckboxOutlineComponent {
};
IoniconCheckboxOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-checkbox-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCheckboxOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCheckboxOutlineComponent);
export { IoniconCheckboxOutlineComponent };
let IoniconCheckboxOutlineModule = class IoniconCheckboxOutlineModule {
};
IoniconCheckboxOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconCheckboxOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCheckboxOutlineComponent
        ],
    })
], IoniconCheckboxOutlineModule);
export { IoniconCheckboxOutlineModule };
//# sourceMappingURL=Ionicon-checkbox-outline.icon.js.map