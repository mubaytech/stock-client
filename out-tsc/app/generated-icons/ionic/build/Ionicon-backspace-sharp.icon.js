import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBackspaceSharp = {
    name: 'backspace_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="backspace-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M144 96L32 256l112 160h304V96zm215.3 226.34L336.67 345l-65-65-65 65L184 322.34l65-65-65-65 22.63-22.63 65 65 65-65 22.63 22.63-65 65z"/></svg>`
};
let IoniconBackspaceSharpComponent = class IoniconBackspaceSharpComponent {
};
IoniconBackspaceSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-backspace-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBackspaceSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBackspaceSharpComponent);
export { IoniconBackspaceSharpComponent };
let IoniconBackspaceSharpModule = class IoniconBackspaceSharpModule {
};
IoniconBackspaceSharpModule = __decorate([
    NgModule({
        declarations: [IoniconBackspaceSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBackspaceSharpComponent
        ],
    })
], IoniconBackspaceSharpModule);
export { IoniconBackspaceSharpModule };
//# sourceMappingURL=Ionicon-backspace-sharp.icon.js.map