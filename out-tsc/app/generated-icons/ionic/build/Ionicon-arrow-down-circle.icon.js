import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowDownCircle = {
    name: 'arrow_down_circle',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-down-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208zm-91.36-212.65a16 16 0 0122.63-.09L240 303.58V170a16 16 0 0132 0v133.58l52.73-52.32A16 16 0 11347.27 274l-80 79.39a16 16 0 01-22.54 0l-80-79.39a16 16 0 01-.09-22.65z"/></svg>`
};
let IoniconArrowDownCircleComponent = class IoniconArrowDownCircleComponent {
};
IoniconArrowDownCircleComponent = __decorate([
    Component({
        selector: 'app-ionicon-arrow-down-circle',
        template: `
    <div class="app-ionic-icon">
        ${IoniconArrowDownCircle.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconArrowDownCircleComponent);
export { IoniconArrowDownCircleComponent };
let IoniconArrowDownCircleModule = class IoniconArrowDownCircleModule {
};
IoniconArrowDownCircleModule = __decorate([
    NgModule({
        declarations: [IoniconArrowDownCircleComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconArrowDownCircleComponent
        ],
    })
], IoniconArrowDownCircleModule);
export { IoniconArrowDownCircleModule };
//# sourceMappingURL=Ionicon-arrow-down-circle.icon.js.map