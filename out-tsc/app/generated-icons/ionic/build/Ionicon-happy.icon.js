import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHappy = {
    name: 'happy',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="happy_svg__ionicon" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 017.83-10.17h175.69a8 8 0 017.82 10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z"/></svg>`
};
let IoniconHappyComponent = class IoniconHappyComponent {
};
IoniconHappyComponent = __decorate([
    Component({
        selector: 'app-ionicon-happy',
        template: `
    <div class="app-ionic-icon">
        ${IoniconHappy.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconHappyComponent);
export { IoniconHappyComponent };
let IoniconHappyModule = class IoniconHappyModule {
};
IoniconHappyModule = __decorate([
    NgModule({
        declarations: [IoniconHappyComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconHappyComponent
        ],
    })
], IoniconHappyModule);
export { IoniconHappyModule };
//# sourceMappingURL=Ionicon-happy.icon.js.map