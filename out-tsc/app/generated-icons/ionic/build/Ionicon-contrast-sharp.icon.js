import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconContrastSharp = {
    name: 'contrast_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="contrast-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zM128.72 383.28A180 180 0 01256 76v360a178.82 178.82 0 01-127.28-52.72z"/></svg>`
};
let IoniconContrastSharpComponent = class IoniconContrastSharpComponent {
};
IoniconContrastSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-contrast-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconContrastSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconContrastSharpComponent);
export { IoniconContrastSharpComponent };
let IoniconContrastSharpModule = class IoniconContrastSharpModule {
};
IoniconContrastSharpModule = __decorate([
    NgModule({
        declarations: [IoniconContrastSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconContrastSharpComponent
        ],
    })
], IoniconContrastSharpModule);
export { IoniconContrastSharpModule };
//# sourceMappingURL=Ionicon-contrast-sharp.icon.js.map