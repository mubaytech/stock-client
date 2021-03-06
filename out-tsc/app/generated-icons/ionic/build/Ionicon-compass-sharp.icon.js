import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCompassSharp = {
    name: 'compass_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="compass-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="24"/><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 256l-160 64 64-160 160-64z"/></svg>`
};
let IoniconCompassSharpComponent = class IoniconCompassSharpComponent {
};
IoniconCompassSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-compass-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCompassSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCompassSharpComponent);
export { IoniconCompassSharpComponent };
let IoniconCompassSharpModule = class IoniconCompassSharpModule {
};
IoniconCompassSharpModule = __decorate([
    NgModule({
        declarations: [IoniconCompassSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCompassSharpComponent
        ],
    })
], IoniconCompassSharpModule);
export { IoniconCompassSharpModule };
//# sourceMappingURL=Ionicon-compass-sharp.icon.js.map