import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFunnel = {
    name: 'funnel',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="funnel_svg__ionicon" viewBox="0 0 512 512"><path d="M296 464a23.88 23.88 0 01-7.55-1.23L208.3 436.1a23.92 23.92 0 01-16.3-22.78V294.11a.44.44 0 00-.09-.13L23.26 97.54A30 30 0 0146.05 48H466a30 30 0 0122.79 49.54L320.09 294a.77.77 0 00-.09.13V440a23.93 23.93 0 01-24 24z"/></svg>`
};
let IoniconFunnelComponent = class IoniconFunnelComponent {
};
IoniconFunnelComponent = __decorate([
    Component({
        selector: 'app-ionicon-funnel',
        template: `
    <div class="app-ionic-icon">
        ${IoniconFunnel.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconFunnelComponent);
export { IoniconFunnelComponent };
let IoniconFunnelModule = class IoniconFunnelModule {
};
IoniconFunnelModule = __decorate([
    NgModule({
        declarations: [IoniconFunnelComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconFunnelComponent
        ],
    })
], IoniconFunnelModule);
export { IoniconFunnelModule };
//# sourceMappingURL=Ionicon-funnel.icon.js.map