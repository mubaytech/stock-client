import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconStopOutline = {
    name: 'stop_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="stop-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="320" height="320" x="96" y="96" class="stop-outline_svg__ionicon-fill-none stop-outline_svg__ionicon-stroke-width" rx="24" ry="24"/></svg>`
};
let IoniconStopOutlineComponent = class IoniconStopOutlineComponent {
};
IoniconStopOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-stop-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconStopOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconStopOutlineComponent);
export { IoniconStopOutlineComponent };
let IoniconStopOutlineModule = class IoniconStopOutlineModule {
};
IoniconStopOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconStopOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconStopOutlineComponent
        ],
    })
], IoniconStopOutlineModule);
export { IoniconStopOutlineModule };
//# sourceMappingURL=Ionicon-stop-outline.icon.js.map