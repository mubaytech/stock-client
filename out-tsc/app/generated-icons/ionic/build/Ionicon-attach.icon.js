import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAttach = {
    name: 'attach',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="attach_svg__ionicon" viewBox="0 0 512 512"><path d="M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" class="attach_svg__ionicon-fill-none attach_svg__ionicon-stroke-width"/></svg>`
};
let IoniconAttachComponent = class IoniconAttachComponent {
};
IoniconAttachComponent = __decorate([
    Component({
        selector: 'app-ionicon-attach',
        template: `
    <div class="app-ionic-icon">
        ${IoniconAttach.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconAttachComponent);
export { IoniconAttachComponent };
let IoniconAttachModule = class IoniconAttachModule {
};
IoniconAttachModule = __decorate([
    NgModule({
        declarations: [IoniconAttachComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconAttachComponent
        ],
    })
], IoniconAttachModule);
export { IoniconAttachModule };
//# sourceMappingURL=Ionicon-attach.icon.js.map