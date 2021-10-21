import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconAttachOutline = {
    name: 'attach_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="attach-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M216.08 192v143.85a40.08 40.08 0 0080.15 0l.13-188.55a67.94 67.94 0 10-135.87 0v189.82a95.51 95.51 0 10191 0V159.74" class="attach-outline_svg__ionicon-fill-none attach-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconAttachOutlineComponent = class IoniconAttachOutlineComponent {
};
IoniconAttachOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-attach-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconAttachOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconAttachOutlineComponent);
export { IoniconAttachOutlineComponent };
let IoniconAttachOutlineModule = class IoniconAttachOutlineModule {
};
IoniconAttachOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconAttachOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconAttachOutlineComponent
        ],
    })
], IoniconAttachOutlineModule);
export { IoniconAttachOutlineModule };
//# sourceMappingURL=Ionicon-attach-outline.icon.js.map