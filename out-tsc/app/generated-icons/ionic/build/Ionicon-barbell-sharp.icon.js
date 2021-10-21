import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBarbellSharp = {
    name: 'barbell_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="barbell-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z"/></svg>`
};
let IoniconBarbellSharpComponent = class IoniconBarbellSharpComponent {
};
IoniconBarbellSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-barbell-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBarbellSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBarbellSharpComponent);
export { IoniconBarbellSharpComponent };
let IoniconBarbellSharpModule = class IoniconBarbellSharpModule {
};
IoniconBarbellSharpModule = __decorate([
    NgModule({
        declarations: [IoniconBarbellSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBarbellSharpComponent
        ],
    })
], IoniconBarbellSharpModule);
export { IoniconBarbellSharpModule };
//# sourceMappingURL=Ionicon-barbell-sharp.icon.js.map