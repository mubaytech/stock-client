import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconArchiveOutline = {
    name: 'archive_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="archive-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M80 152v256a40.12 40.12 0 0040 40h272a40.12 40.12 0 0040-40V152" class="archive-outline_svg__ionicon-fill-none archive-outline_svg__ionicon-stroke-width"/><rect width="416" height="80" x="48" y="64" class="archive-outline_svg__ionicon-fill-none archive-outline_svg__ionicon-stroke-width" rx="28" ry="28"/><path d="M320 304l-64 64-64-64m64 41.89V224" class="archive-outline_svg__ionicon-fill-none archive-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconArchiveOutlineComponent = class IoniconArchiveOutlineComponent {
};
IoniconArchiveOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-archive-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconArchiveOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconArchiveOutlineComponent);
export { IoniconArchiveOutlineComponent };
let IoniconArchiveOutlineModule = class IoniconArchiveOutlineModule {
};
IoniconArchiveOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconArchiveOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconArchiveOutlineComponent
        ],
    })
], IoniconArchiveOutlineModule);
export { IoniconArchiveOutlineModule };
//# sourceMappingURL=Ionicon-archive-outline.icon.js.map