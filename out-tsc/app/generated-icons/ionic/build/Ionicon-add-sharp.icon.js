import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAddSharp = {
    name: 'add_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="add-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 112v288m144-144H112" class="add-sharp_svg__ionicon-fill-none add-sharp_svg__ionicon-stroke-width"/></svg>`
};
let IoniconAddSharpComponent = class IoniconAddSharpComponent {
};
IoniconAddSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-add-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconAddSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconAddSharpComponent);
export { IoniconAddSharpComponent };
let IoniconAddSharpModule = class IoniconAddSharpModule {
};
IoniconAddSharpModule = __decorate([
    NgModule({
        declarations: [IoniconAddSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconAddSharpComponent
        ],
    })
], IoniconAddSharpModule);
export { IoniconAddSharpModule };
//# sourceMappingURL=Ionicon-add-sharp.icon.js.map