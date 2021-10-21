import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRemoveCircle = {
    name: 'remove_circle',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="remove-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z"/></svg>`
};
let IoniconRemoveCircleComponent = class IoniconRemoveCircleComponent {
};
IoniconRemoveCircleComponent = __decorate([
    Component({
        selector: 'app-ionicon-remove-circle',
        template: `
    <div class="app-ionic-icon">
        ${IoniconRemoveCircle.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconRemoveCircleComponent);
export { IoniconRemoveCircleComponent };
let IoniconRemoveCircleModule = class IoniconRemoveCircleModule {
};
IoniconRemoveCircleModule = __decorate([
    NgModule({
        declarations: [IoniconRemoveCircleComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconRemoveCircleComponent
        ],
    })
], IoniconRemoveCircleModule);
export { IoniconRemoveCircleModule };
//# sourceMappingURL=Ionicon-remove-circle.icon.js.map