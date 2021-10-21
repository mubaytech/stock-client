import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRefreshCircleOutline = {
    name: 'refresh_circle_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="refresh-circle-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M288 193s12.18-6-32-6a80 80 0 1080 80" class="refresh-circle-outline_svg__ionicon-fill-none"/><path d="M256 149l40 40-40 40" class="refresh-circle-outline_svg__ionicon-fill-none"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" class="refresh-circle-outline_svg__ionicon-fill-none refresh-circle-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconRefreshCircleOutlineComponent = class IoniconRefreshCircleOutlineComponent {
};
IoniconRefreshCircleOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-refresh-circle-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconRefreshCircleOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconRefreshCircleOutlineComponent);
export { IoniconRefreshCircleOutlineComponent };
let IoniconRefreshCircleOutlineModule = class IoniconRefreshCircleOutlineModule {
};
IoniconRefreshCircleOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconRefreshCircleOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconRefreshCircleOutlineComponent
        ],
    })
], IoniconRefreshCircleOutlineModule);
export { IoniconRefreshCircleOutlineModule };
//# sourceMappingURL=Ionicon-refresh-circle-outline.icon.js.map