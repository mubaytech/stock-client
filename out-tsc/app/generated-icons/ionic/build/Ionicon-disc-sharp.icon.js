import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconDiscSharp = {
    name: 'disc_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="disc-sharp_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32"/><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z"/></svg>`
};
let IoniconDiscSharpComponent = class IoniconDiscSharpComponent {
};
IoniconDiscSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-disc-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconDiscSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconDiscSharpComponent);
export { IoniconDiscSharpComponent };
let IoniconDiscSharpModule = class IoniconDiscSharpModule {
};
IoniconDiscSharpModule = __decorate([
    NgModule({
        declarations: [IoniconDiscSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconDiscSharpComponent
        ],
    })
], IoniconDiscSharpModule);
export { IoniconDiscSharpModule };
//# sourceMappingURL=Ionicon-disc-sharp.icon.js.map