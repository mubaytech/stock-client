import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconDownload = {
    name: 'download',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="download_svg__ionicon" viewBox="0 0 512 512"><path d="M376 160H272v153.37l52.69-52.68a16 16 0 0122.62 22.62l-80 80a16 16 0 01-22.62 0l-80-80a16 16 0 0122.62-22.62L240 313.37V160H136a56.06 56.06 0 00-56 56v208a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V216a56.06 56.06 0 00-56-56zM272 48a16 16 0 00-32 0v112h32z"/></svg>`
};
let IoniconDownloadComponent = class IoniconDownloadComponent {
};
IoniconDownloadComponent = __decorate([
    Component({
        selector: 'app-ionicon-download',
        template: `
    <div class="app-ionic-icon">
        ${IoniconDownload.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconDownloadComponent);
export { IoniconDownloadComponent };
let IoniconDownloadModule = class IoniconDownloadModule {
};
IoniconDownloadModule = __decorate([
    NgModule({
        declarations: [IoniconDownloadComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconDownloadComponent
        ],
    })
], IoniconDownloadModule);
export { IoniconDownloadModule };
//# sourceMappingURL=Ionicon-download.icon.js.map