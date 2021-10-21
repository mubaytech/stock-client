import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPrismSharp = {
    name: 'prism_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="prism-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 16L16 352l240 144 240-144zm-20 96.82v324.53L73.73 340z"/></svg>`
};
let IoniconPrismSharpComponent = class IoniconPrismSharpComponent {
};
IoniconPrismSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-prism-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPrismSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPrismSharpComponent);
export { IoniconPrismSharpComponent };
let IoniconPrismSharpModule = class IoniconPrismSharpModule {
};
IoniconPrismSharpModule = __decorate([
    NgModule({
        declarations: [IoniconPrismSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPrismSharpComponent
        ],
    })
], IoniconPrismSharpModule);
export { IoniconPrismSharpModule };
//# sourceMappingURL=Ionicon-prism-sharp.icon.js.map