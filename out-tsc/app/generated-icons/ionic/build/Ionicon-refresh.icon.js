import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconRefresh = {
    name: 'refresh',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="refresh_svg__ionicon" viewBox="0 0 512 512"><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" class="refresh_svg__ionicon-fill-none refresh_svg__ionicon-stroke-width"/><path d="M256 58l80 80-80 80" class="refresh_svg__ionicon-fill-none refresh_svg__ionicon-stroke-width"/></svg>`
};
let IoniconRefreshComponent = class IoniconRefreshComponent {
};
IoniconRefreshComponent = __decorate([
    Component({
        selector: 'app-ionicon-refresh',
        template: `
    <div class="app-ionic-icon">
        ${IoniconRefresh.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconRefreshComponent);
export { IoniconRefreshComponent };
let IoniconRefreshModule = class IoniconRefreshModule {
};
IoniconRefreshModule = __decorate([
    NgModule({
        declarations: [IoniconRefreshComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconRefreshComponent
        ],
    })
], IoniconRefreshModule);
export { IoniconRefreshModule };
//# sourceMappingURL=Ionicon-refresh.icon.js.map