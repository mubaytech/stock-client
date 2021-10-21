import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCaretBack = {
    name: 'caret_back',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="caret-back_svg__ionicon" viewBox="0 0 512 512"><path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/></svg>`
};
let IoniconCaretBackComponent = class IoniconCaretBackComponent {
};
IoniconCaretBackComponent = __decorate([
    Component({
        selector: 'app-ionicon-caret-back',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCaretBack.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCaretBackComponent);
export { IoniconCaretBackComponent };
let IoniconCaretBackModule = class IoniconCaretBackModule {
};
IoniconCaretBackModule = __decorate([
    NgModule({
        declarations: [IoniconCaretBackComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCaretBackComponent
        ],
    })
], IoniconCaretBackModule);
export { IoniconCaretBackModule };
//# sourceMappingURL=Ionicon-caret-back.icon.js.map