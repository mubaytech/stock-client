import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconToggleSharp = {
    name: 'toggle_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="toggle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M368 112H144a144 144 0 000 288h224a144 144 0 000-288zm0 230a86 86 0 1186-86 85.88 85.88 0 01-86 86z"/></svg>`
};
let IoniconToggleSharpComponent = class IoniconToggleSharpComponent {
};
IoniconToggleSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-toggle-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconToggleSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconToggleSharpComponent);
export { IoniconToggleSharpComponent };
let IoniconToggleSharpModule = class IoniconToggleSharpModule {
};
IoniconToggleSharpModule = __decorate([
    NgModule({
        declarations: [IoniconToggleSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconToggleSharpComponent
        ],
    })
], IoniconToggleSharpModule);
export { IoniconToggleSharpModule };
//# sourceMappingURL=Ionicon-toggle-sharp.icon.js.map