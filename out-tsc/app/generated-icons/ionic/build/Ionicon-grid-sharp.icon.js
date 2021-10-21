import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGridSharp = {
    name: 'grid_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="grid-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M240 240H32V32h208zm240 0H272V32h208zM240 480H32V272h208zm240 0H272V272h208z"/></svg>`
};
let IoniconGridSharpComponent = class IoniconGridSharpComponent {
};
IoniconGridSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-grid-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconGridSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconGridSharpComponent);
export { IoniconGridSharpComponent };
let IoniconGridSharpModule = class IoniconGridSharpModule {
};
IoniconGridSharpModule = __decorate([
    NgModule({
        declarations: [IoniconGridSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconGridSharpComponent
        ],
    })
], IoniconGridSharpModule);
export { IoniconGridSharpModule };
//# sourceMappingURL=Ionicon-grid-sharp.icon.js.map