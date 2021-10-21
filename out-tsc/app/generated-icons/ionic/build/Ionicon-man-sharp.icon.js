import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconManSharp = {
    name: 'man_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="man-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="56" r="56"/><path d="M336 128H176a32 32 0 00-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 00-32-32z"/></svg>`
};
let IoniconManSharpComponent = class IoniconManSharpComponent {
};
IoniconManSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-man-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconManSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconManSharpComponent);
export { IoniconManSharpComponent };
let IoniconManSharpModule = class IoniconManSharpModule {
};
IoniconManSharpModule = __decorate([
    NgModule({
        declarations: [IoniconManSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconManSharpComponent
        ],
    })
], IoniconManSharpModule);
export { IoniconManSharpModule };
//# sourceMappingURL=Ionicon-man-sharp.icon.js.map