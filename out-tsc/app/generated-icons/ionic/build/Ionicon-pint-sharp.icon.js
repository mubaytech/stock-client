import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPintSharp = {
    name: 'pint_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="pint-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M399 99.29L394 16H118.45L113 99.26c-1.29 19.24-2.23 33.14 3.73 65.66 1.67 9.11 5.22 22.66 9.73 39.82 12.61 48 33.71 128.36 33.71 195.63V496h191.68v-95.62c0-77.09 21.31-153.29 34-198.81 4.38-15.63 7.83-28 9.41-36.62 6.01-32.51 5.07-46.42 3.74-65.66zM146.23 80l2-32h215.52l2 32z"/></svg>`
};
let IoniconPintSharpComponent = class IoniconPintSharpComponent {
};
IoniconPintSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-pint-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPintSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPintSharpComponent);
export { IoniconPintSharpComponent };
let IoniconPintSharpModule = class IoniconPintSharpModule {
};
IoniconPintSharpModule = __decorate([
    NgModule({
        declarations: [IoniconPintSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPintSharpComponent
        ],
    })
], IoniconPintSharpModule);
export { IoniconPintSharpModule };
//# sourceMappingURL=Ionicon-pint-sharp.icon.js.map