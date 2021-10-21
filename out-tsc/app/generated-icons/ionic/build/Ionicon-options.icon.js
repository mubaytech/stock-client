import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconOptions = {
    name: 'options',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="options_svg__ionicon" viewBox="0 0 512 512"><path d="M64 144h226.75a48 48 0 0090.5 0H448a16 16 0 000-32h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32zm384 224h-66.75a48 48 0 00-90.5 0H64a16 16 0 000 32h226.75a48 48 0 0090.5 0H448a16 16 0 000-32zm0-128H221.25a48 48 0 00-90.5 0H64a16 16 0 000 32h66.75a48 48 0 0090.5 0H448a16 16 0 000-32z"/></svg>`
};
let IoniconOptionsComponent = class IoniconOptionsComponent {
};
IoniconOptionsComponent = __decorate([
    Component({
        selector: 'app-ionicon-options',
        template: `
    <div class="app-ionic-icon">
        ${IoniconOptions.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconOptionsComponent);
export { IoniconOptionsComponent };
let IoniconOptionsModule = class IoniconOptionsModule {
};
IoniconOptionsModule = __decorate([
    NgModule({
        declarations: [IoniconOptionsComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconOptionsComponent
        ],
    })
], IoniconOptionsModule);
export { IoniconOptionsModule };
//# sourceMappingURL=Ionicon-options.icon.js.map