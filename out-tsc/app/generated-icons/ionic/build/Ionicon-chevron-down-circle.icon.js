import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChevronDownCircle = {
    name: 'chevron_down_circle',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="chevron-down-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-100.69-28.69l-96 96a16 16 0 01-22.62 0l-96-96a16 16 0 0122.62-22.62L256 289.37l84.69-84.68a16 16 0 0122.62 22.62z"/></svg>`
};
let IoniconChevronDownCircleComponent = class IoniconChevronDownCircleComponent {
};
IoniconChevronDownCircleComponent = __decorate([
    Component({
        selector: 'app-ionicon-chevron-down-circle',
        template: `
    <div class="app-ionic-icon">
        ${IoniconChevronDownCircle.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconChevronDownCircleComponent);
export { IoniconChevronDownCircleComponent };
let IoniconChevronDownCircleModule = class IoniconChevronDownCircleModule {
};
IoniconChevronDownCircleModule = __decorate([
    NgModule({
        declarations: [IoniconChevronDownCircleComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconChevronDownCircleComponent
        ],
    })
], IoniconChevronDownCircleModule);
export { IoniconChevronDownCircleModule };
//# sourceMappingURL=Ionicon-chevron-down-circle.icon.js.map