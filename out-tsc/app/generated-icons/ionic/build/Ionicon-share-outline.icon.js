import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconShareOutline = {
    name: 'share_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="share-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40m160-64l-80-80-80 80m80 193V48" class="share-outline_svg__ionicon-fill-none share-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconShareOutlineComponent = class IoniconShareOutlineComponent {
};
IoniconShareOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-share-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconShareOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconShareOutlineComponent);
export { IoniconShareOutlineComponent };
let IoniconShareOutlineModule = class IoniconShareOutlineModule {
};
IoniconShareOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconShareOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconShareOutlineComponent
        ],
    })
], IoniconShareOutlineModule);
export { IoniconShareOutlineModule };
//# sourceMappingURL=Ionicon-share-outline.icon.js.map