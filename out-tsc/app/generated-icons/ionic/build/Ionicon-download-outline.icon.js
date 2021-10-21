import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconDownloadOutline = {
    name: 'download_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="download-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40" class="download-outline_svg__ionicon-fill-none download-outline_svg__ionicon-stroke-width"/><path d="M176 272l80 80 80-80M256 48v288" class="download-outline_svg__ionicon-fill-none download-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconDownloadOutlineComponent = class IoniconDownloadOutlineComponent {
};
IoniconDownloadOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-download-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconDownloadOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconDownloadOutlineComponent);
export { IoniconDownloadOutlineComponent };
let IoniconDownloadOutlineModule = class IoniconDownloadOutlineModule {
};
IoniconDownloadOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconDownloadOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconDownloadOutlineComponent
        ],
    })
], IoniconDownloadOutlineModule);
export { IoniconDownloadOutlineModule };
//# sourceMappingURL=Ionicon-download-outline.icon.js.map