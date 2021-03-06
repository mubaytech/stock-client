import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBagHandle = {
    name: 'bag_handle',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bag-handle_svg__ionicon" viewBox="0 0 512 512"><path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"/></svg>`
};
let IoniconBagHandleComponent = class IoniconBagHandleComponent {
};
IoniconBagHandleComponent = __decorate([
    Component({
        selector: 'app-ionicon-bag-handle',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBagHandle.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBagHandleComponent);
export { IoniconBagHandleComponent };
let IoniconBagHandleModule = class IoniconBagHandleModule {
};
IoniconBagHandleModule = __decorate([
    NgModule({
        declarations: [IoniconBagHandleComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBagHandleComponent
        ],
    })
], IoniconBagHandleModule);
export { IoniconBagHandleModule };
//# sourceMappingURL=Ionicon-bag-handle.icon.js.map