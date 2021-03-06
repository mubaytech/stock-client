import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCloseSharp = {
    name: 'close_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="close-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"/></svg>`
};
let IoniconCloseSharpComponent = class IoniconCloseSharpComponent {
};
IoniconCloseSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-close-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCloseSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCloseSharpComponent);
export { IoniconCloseSharpComponent };
let IoniconCloseSharpModule = class IoniconCloseSharpModule {
};
IoniconCloseSharpModule = __decorate([
    NgModule({
        declarations: [IoniconCloseSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCloseSharpComponent
        ],
    })
], IoniconCloseSharpModule);
export { IoniconCloseSharpModule };
//# sourceMappingURL=Ionicon-close-sharp.icon.js.map