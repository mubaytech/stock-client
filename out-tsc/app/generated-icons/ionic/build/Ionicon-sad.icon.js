import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconSad = {
    name: 'sad',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="sad_svg__ionicon" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 01-7.82 10.17H168.15a8 8 0 01-7.82-10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z"/></svg>`
};
let IoniconSadComponent = class IoniconSadComponent {
};
IoniconSadComponent = __decorate([
    Component({
        selector: 'app-ionicon-sad',
        template: `
    <div class="app-ionic-icon">
        ${IoniconSad.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconSadComponent);
export { IoniconSadComponent };
let IoniconSadModule = class IoniconSadModule {
};
IoniconSadModule = __decorate([
    NgModule({
        declarations: [IoniconSadComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconSadComponent
        ],
    })
], IoniconSadModule);
export { IoniconSadModule };
//# sourceMappingURL=Ionicon-sad.icon.js.map