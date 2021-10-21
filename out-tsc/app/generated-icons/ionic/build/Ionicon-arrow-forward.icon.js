import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArrowForward = {
    name: 'arrow_forward',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="arrow-forward_svg__ionicon" viewBox="0 0 512 512"><path d="M268 112l144 144-144 144m124-144H100" class="arrow-forward_svg__ionicon-fill-none"/></svg>`
};
let IoniconArrowForwardComponent = class IoniconArrowForwardComponent {
};
IoniconArrowForwardComponent = __decorate([
    Component({
        selector: 'app-ionicon-arrow-forward',
        template: `
    <div class="app-ionic-icon">
        ${IoniconArrowForward.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconArrowForwardComponent);
export { IoniconArrowForwardComponent };
let IoniconArrowForwardModule = class IoniconArrowForwardModule {
};
IoniconArrowForwardModule = __decorate([
    NgModule({
        declarations: [IoniconArrowForwardComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconArrowForwardComponent
        ],
    })
], IoniconArrowForwardModule);
export { IoniconArrowForwardModule };
//# sourceMappingURL=Ionicon-arrow-forward.icon.js.map