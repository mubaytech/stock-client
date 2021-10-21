import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSkullSharp = {
    name: 'skull_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="skull-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208zm-88 320a56 56 0 1156-56 56.06 56.06 0 01-56 56zm51.51 64L244 320h24l24.49 80zM344 336a56 56 0 1156-56 56.06 56.06 0 01-56 56zm104 32z"/></svg>`
};
let IoniconSkullSharpComponent = class IoniconSkullSharpComponent {
};
IoniconSkullSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-skull-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconSkullSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconSkullSharpComponent);
export { IoniconSkullSharpComponent };
let IoniconSkullSharpModule = class IoniconSkullSharpModule {
};
IoniconSkullSharpModule = __decorate([
    NgModule({
        declarations: [IoniconSkullSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconSkullSharpComponent
        ],
    })
], IoniconSkullSharpModule);
export { IoniconSkullSharpModule };
//# sourceMappingURL=Ionicon-skull-sharp.icon.js.map