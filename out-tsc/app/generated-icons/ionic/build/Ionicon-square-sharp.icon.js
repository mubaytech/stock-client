import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSquareSharp = {
    name: 'square_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="square-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M48 48h416v416H48z"/></svg>`
};
let IoniconSquareSharpComponent = class IoniconSquareSharpComponent {
};
IoniconSquareSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-square-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconSquareSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconSquareSharpComponent);
export { IoniconSquareSharpComponent };
let IoniconSquareSharpModule = class IoniconSquareSharpModule {
};
IoniconSquareSharpModule = __decorate([
    NgModule({
        declarations: [IoniconSquareSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconSquareSharpComponent
        ],
    })
], IoniconSquareSharpModule);
export { IoniconSquareSharpModule };
//# sourceMappingURL=Ionicon-square-sharp.icon.js.map