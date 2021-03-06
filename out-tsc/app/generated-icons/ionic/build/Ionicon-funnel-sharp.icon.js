import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFunnelSharp = {
    name: 'funnel_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="funnel-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M0 48l192 240v128l128 48V288L512 48H0z"/></svg>`
};
let IoniconFunnelSharpComponent = class IoniconFunnelSharpComponent {
};
IoniconFunnelSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-funnel-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconFunnelSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconFunnelSharpComponent);
export { IoniconFunnelSharpComponent };
let IoniconFunnelSharpModule = class IoniconFunnelSharpModule {
};
IoniconFunnelSharpModule = __decorate([
    NgModule({
        declarations: [IoniconFunnelSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconFunnelSharpComponent
        ],
    })
], IoniconFunnelSharpModule);
export { IoniconFunnelSharpModule };
//# sourceMappingURL=Ionicon-funnel-sharp.icon.js.map