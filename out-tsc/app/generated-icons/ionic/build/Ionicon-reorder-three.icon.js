import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReorderThree = {
    name: 'reorder_three',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="reorder-three_svg__ionicon" viewBox="0 0 512 512"><path d="M102 256h308m-308-80h308M102 336h308" class="reorder-three_svg__ionicon-fill-none"/></svg>`
};
let IoniconReorderThreeComponent = class IoniconReorderThreeComponent {
};
IoniconReorderThreeComponent = __decorate([
    Component({
        selector: 'app-ionicon-reorder-three',
        template: `
    <div class="app-ionic-icon">
        ${IoniconReorderThree.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconReorderThreeComponent);
export { IoniconReorderThreeComponent };
let IoniconReorderThreeModule = class IoniconReorderThreeModule {
};
IoniconReorderThreeModule = __decorate([
    NgModule({
        declarations: [IoniconReorderThreeComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconReorderThreeComponent
        ],
    })
], IoniconReorderThreeModule);
export { IoniconReorderThreeModule };
//# sourceMappingURL=Ionicon-reorder-three.icon.js.map