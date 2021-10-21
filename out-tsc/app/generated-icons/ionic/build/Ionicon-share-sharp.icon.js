import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconShareSharp = {
    name: 'share_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="share-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M272 176v161h-32V176H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V188a12 12 0 00-12-12zm0-83.37l64 64L358.63 134 256 31.37 153.37 134 176 156.63l64-64V176h32V92.63z"/></svg>`
};
let IoniconShareSharpComponent = class IoniconShareSharpComponent {
};
IoniconShareSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-share-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconShareSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconShareSharpComponent);
export { IoniconShareSharpComponent };
let IoniconShareSharpModule = class IoniconShareSharpModule {
};
IoniconShareSharpModule = __decorate([
    NgModule({
        declarations: [IoniconShareSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconShareSharpComponent
        ],
    })
], IoniconShareSharpModule);
export { IoniconShareSharpModule };
//# sourceMappingURL=Ionicon-share-sharp.icon.js.map