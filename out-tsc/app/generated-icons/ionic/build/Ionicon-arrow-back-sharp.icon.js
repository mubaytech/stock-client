import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowBackSharp = {
    name: 'arrow_back_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-back-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M244 400L100 256l144-144M120 256h292" class="arrow-back-sharp_svg__ionicon-fill-none"/></svg>`
};
let IoniconArrowBackSharpComponent = class IoniconArrowBackSharpComponent {
};
IoniconArrowBackSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-arrow-back-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconArrowBackSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconArrowBackSharpComponent);
export { IoniconArrowBackSharpComponent };
let IoniconArrowBackSharpModule = class IoniconArrowBackSharpModule {
};
IoniconArrowBackSharpModule = __decorate([
    NgModule({
        declarations: [IoniconArrowBackSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconArrowBackSharpComponent
        ],
    })
], IoniconArrowBackSharpModule);
export { IoniconArrowBackSharpModule };
//# sourceMappingURL=Ionicon-arrow-back-sharp.icon.js.map