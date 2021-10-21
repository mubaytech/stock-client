import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBagSharp = {
    name: 'bag_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bag-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M372 160v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-40 0H180v-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148z"/></svg>`
};
let IoniconBagSharpComponent = class IoniconBagSharpComponent {
};
IoniconBagSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-bag-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBagSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBagSharpComponent);
export { IoniconBagSharpComponent };
let IoniconBagSharpModule = class IoniconBagSharpModule {
};
IoniconBagSharpModule = __decorate([
    NgModule({
        declarations: [IoniconBagSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBagSharpComponent
        ],
    })
], IoniconBagSharpModule);
export { IoniconBagSharpModule };
//# sourceMappingURL=Ionicon-bag-sharp.icon.js.map