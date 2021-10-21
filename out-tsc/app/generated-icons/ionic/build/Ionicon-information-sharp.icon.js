import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInformationSharp = {
    name: 'information_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="information-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M196 220h64v172m-73 4h138" class="information-sharp_svg__ionicon-fill-none"/><path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z"/></svg>`
};
let IoniconInformationSharpComponent = class IoniconInformationSharpComponent {
};
IoniconInformationSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-information-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconInformationSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconInformationSharpComponent);
export { IoniconInformationSharpComponent };
let IoniconInformationSharpModule = class IoniconInformationSharpModule {
};
IoniconInformationSharpModule = __decorate([
    NgModule({
        declarations: [IoniconInformationSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconInformationSharpComponent
        ],
    })
], IoniconInformationSharpModule);
export { IoniconInformationSharpModule };
//# sourceMappingURL=Ionicon-information-sharp.icon.js.map