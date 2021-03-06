import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowBack = {
    name: 'arrow_back',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-back_svg__ionicon" viewBox="0 0 512 512"><path d="M244 400L100 256l144-144M120 256h292" class="arrow-back_svg__ionicon-fill-none"/></svg>`
};
let IoniconArrowBackComponent = class IoniconArrowBackComponent {
};
IoniconArrowBackComponent = __decorate([
    Component({
        selector: 'app-ionicon-arrow-back',
        template: `
    <div class="app-ionic-icon">
        ${IoniconArrowBack.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconArrowBackComponent);
export { IoniconArrowBackComponent };
let IoniconArrowBackModule = class IoniconArrowBackModule {
};
IoniconArrowBackModule = __decorate([
    NgModule({
        declarations: [IoniconArrowBackComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconArrowBackComponent
        ],
    })
], IoniconArrowBackModule);
export { IoniconArrowBackModule };
//# sourceMappingURL=Ionicon-arrow-back.icon.js.map