import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChevronForward = {
    name: 'chevron_forward',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="chevron-forward_svg__ionicon" viewBox="0 0 512 512"><path d="M184 112l144 144-144 144" class="chevron-forward_svg__ionicon-fill-none"/></svg>`
};
let IoniconChevronForwardComponent = class IoniconChevronForwardComponent {
};
IoniconChevronForwardComponent = __decorate([
    Component({
        selector: 'app-ionicon-chevron-forward',
        template: `
    <div class="app-ionic-icon">
        ${IoniconChevronForward.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconChevronForwardComponent);
export { IoniconChevronForwardComponent };
let IoniconChevronForwardModule = class IoniconChevronForwardModule {
};
IoniconChevronForwardModule = __decorate([
    NgModule({
        declarations: [IoniconChevronForwardComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconChevronForwardComponent
        ],
    })
], IoniconChevronForwardModule);
export { IoniconChevronForwardModule };
//# sourceMappingURL=Ionicon-chevron-forward.icon.js.map